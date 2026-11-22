/**
 * Draws the QR code that guests scan at the centenary celebration, as an SVG in
 * public/img/centenary/.
 *
 * Written out rather than generated at build time so the published code is a
 * plain file anyone can open, print or hand to a printer. Re-run it only if the
 * address changes — and if it does, remember that every card already printed
 * still points at the old one.
 *
 *     node scripts/make-qr.mjs
 *
 * A self-contained encoder (ISO/IEC 18004, byte mode, error correction level M)
 * so that printing a poster never depends on a package being installed. Level M
 * recovers from about 15% damage, which is the usual choice for signage.
 */
import fs from 'node:fs';
import path from 'node:path';

const OUTPUT = [
  { url: 'https://ndsai.org/centenary/', file: 'public/img/centenary/centenary-qr.svg' },
];

// ---------------------------------------------------------------- GF(256)

/** Log and antilog tables over GF(256) with primitive polynomial 0x11D. */
const EXP = new Uint8Array(512);
const LOG = new Uint8Array(256);
for (let i = 0, x = 1; i < 255; i++) {
  EXP[i] = x;
  LOG[x] = i;
  x <<= 1;
  if (x & 0x100) x ^= 0x11d;
}
for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];

const mul = (a, b) => (a === 0 || b === 0 ? 0 : EXP[LOG[a] + LOG[b]]);

/** The generator polynomial for `degree` error-correction codewords. */
function generator(degree) {
  let poly = [1];
  for (let i = 0; i < degree; i++) {
    const next = new Array(poly.length + 1).fill(0);
    for (let j = 0; j < poly.length; j++) {
      next[j] ^= poly[j];
      next[j + 1] ^= mul(poly[j], EXP[i]);
    }
    poly = next;
  }
  return poly;
}

/** Reed-Solomon remainder: the error-correction codewords for one block. */
function remainder(data, degree) {
  const gen = generator(degree);
  const out = new Array(degree).fill(0);
  for (const byte of data) {
    const factor = byte ^ out[0];
    out.shift();
    out.push(0);
    for (let i = 0; i < degree; i++) out[i] ^= mul(gen[i + 1], factor);
  }
  return out;
}

// ------------------------------------------------------- version tables

/**
 * Error-correction level M, versions 1 to 10: the codewords per block and how
 * the data is divided. `[ecPerBlock, blocks]` where blocks is a list of data
 * codeword counts — the later blocks in a version are sometimes one longer.
 */
const LEVEL_M = {
  1: [10, [16]],
  2: [16, [28]],
  3: [26, [44]],
  4: [18, [32, 32]],
  5: [24, [43, 43]],
  6: [16, [27, 27, 27, 27]],
  7: [18, [31, 31, 31, 31]],
  8: [22, [38, 38, 39, 39]],
  9: [22, [36, 36, 36, 37, 37]],
  10: [26, [43, 43, 43, 43, 44]],
};

/** Centres of the alignment patterns, by version. */
const ALIGNMENT = {
  1: [],
  2: [6, 18],
  3: [6, 22],
  4: [6, 26],
  5: [6, 30],
  6: [6, 34],
  7: [6, 22, 38],
  8: [6, 24, 42],
  9: [6, 26, 46],
  10: [6, 28, 50],
};

const dataCapacity = (version) => LEVEL_M[version][1].reduce((sum, n) => sum + n, 0);

// --------------------------------------------------------------- encoding

/** Mode indicator, length, payload, terminator and padding — the bitstream. */
function encodeData(bytes, version) {
  const capacity = dataCapacity(version) * 8;
  const bits = [];
  const push = (value, length) => {
    for (let i = length - 1; i >= 0; i--) bits.push((value >> i) & 1);
  };

  push(0b0100, 4); // byte mode
  push(bytes.length, 8); // versions 1-9 use an 8-bit character count
  for (const byte of bytes) push(byte, 8);

  // Terminator, up to four zero bits, then zeros to the next byte boundary.
  for (let i = 0; i < 4 && bits.length < capacity; i++) bits.push(0);
  while (bits.length % 8 !== 0) bits.push(0);

  // Alternating pad bytes, as the specification prescribes.
  const pad = [0xec, 0x11];
  for (let i = 0; bits.length < capacity; i++) push(pad[i % 2], 8);

  const codewords = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) byte = (byte << 1) | bits[i + j];
    codewords.push(byte);
  }
  return codewords;
}

/** Split into blocks, add error correction, then interleave as required. */
function withErrorCorrection(codewords, version) {
  const [ecPerBlock, sizes] = LEVEL_M[version];

  const dataBlocks = [];
  const ecBlocks = [];
  let at = 0;
  for (const size of sizes) {
    const block = codewords.slice(at, at + size);
    at += size;
    dataBlocks.push(block);
    ecBlocks.push(remainder(block, ecPerBlock));
  }

  const out = [];
  const longest = Math.max(...sizes);
  for (let i = 0; i < longest; i++) {
    for (const block of dataBlocks) if (i < block.length) out.push(block[i]);
  }
  for (let i = 0; i < ecPerBlock; i++) {
    for (const block of ecBlocks) out.push(block[i]);
  }
  return out;
}

// ---------------------------------------------------------------- the grid

/**
 * A matrix of modules. `null` means "not yet set", which is also how the
 * function patterns are kept apart from the places data may be written.
 */
function blankMatrix(size) {
  return Array.from({ length: size }, () => new Array(size).fill(null));
}

function placeFunctionPatterns(matrix, version) {
  const size = matrix.length;
  const set = (row, col, value) => {
    if (row >= 0 && row < size && col >= 0 && col < size) matrix[row][col] = value;
  };

  // Finder patterns, each with its separator of light modules.
  for (const [top, left] of [
    [0, 0],
    [0, size - 7],
    [size - 7, 0],
  ]) {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const onRing = r === 0 || r === 6 || c === 0 || c === 6;
        const inCore = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        const outside = r === -1 || r === 7 || c === -1 || c === 7;
        set(top + r, left + c, outside ? 0 : onRing || inCore ? 1 : 0);
      }
    }
  }

  // Timing patterns.
  for (let i = 8; i < size - 8; i++) {
    const value = i % 2 === 0 ? 1 : 0;
    matrix[6][i] = value;
    matrix[i][6] = value;
  }

  // Alignment patterns, except where they would overlap a finder.
  const centres = ALIGNMENT[version];
  for (const row of centres) {
    for (const col of centres) {
      const nearFinder =
        (row <= 8 && col <= 8) || (row <= 8 && col >= size - 9) || (row >= size - 9 && col <= 8);
      if (nearFinder) continue;
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const edge = Math.max(Math.abs(r), Math.abs(c));
          matrix[row + r][col + c] = edge === 1 ? 0 : 1;
        }
      }
    }
  }

  // The single dark module, always just above the lower-left format area.
  matrix[size - 8][8] = 1;

  // Reserve the format information areas so data is not written into them.
  for (let i = 0; i < 9; i++) {
    if (matrix[8][i] === null) matrix[8][i] = 0;
    if (matrix[i][8] === null) matrix[i][8] = 0;
  }
  for (let i = 0; i < 8; i++) {
    if (matrix[8][size - 1 - i] === null) matrix[8][size - 1 - i] = 0;
    if (matrix[size - 1 - i][8] === null) matrix[size - 1 - i][8] = 0;
  }
}

/** Which cells the data snake may use: everything the patterns did not claim. */
function freeCells(version) {
  const size = version * 4 + 17;
  const probe = blankMatrix(size);
  placeFunctionPatterns(probe, version);
  return probe.map((row) => row.map((cell) => cell === null));
}

/** The zigzag walk: upward and downward pairs of columns, right to left. */
function placeData(matrix, free, codewords) {
  const size = matrix.length;
  const bits = [];
  for (const byte of codewords) {
    for (let i = 7; i >= 0; i--) bits.push((byte >> i) & 1);
  }

  let at = 0;
  let upward = true;
  for (let right = size - 1; right > 0; right -= 2) {
    // Column 6 is the vertical timing pattern and is stepped over entirely.
    if (right === 6) right = 5;
    for (let step = 0; step < size; step++) {
      const row = upward ? size - 1 - step : step;
      for (const col of [right, right - 1]) {
        if (!free[row][col]) continue;
        matrix[row][col] = at < bits.length ? bits[at] : 0;
        at++;
      }
    }
    upward = !upward;
  }
}

const MASKS = [
  (r, c) => (r + c) % 2 === 0,
  (r) => r % 2 === 0,
  (_r, c) => c % 3 === 0,
  (r, c) => (r + c) % 3 === 0,
  (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
  (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
  (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
  (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
];

/** The four penalty rules, used to choose the mask that prints most cleanly. */
function penalty(matrix) {
  const size = matrix.length;
  let score = 0;

  // Rule 1: runs of five or more of the same colour, in both directions.
  for (const byRow of [true, false]) {
    for (let a = 0; a < size; a++) {
      let run = 1;
      for (let b = 1; b < size; b++) {
        const here = byRow ? matrix[a][b] : matrix[b][a];
        const before = byRow ? matrix[a][b - 1] : matrix[b - 1][a];
        if (here === before) {
          run++;
          if (run === 5) score += 3;
          else if (run > 5) score += 1;
        } else {
          run = 1;
        }
      }
    }
  }

  // Rule 2: every 2x2 block of one colour.
  for (let r = 0; r < size - 1; r++) {
    for (let c = 0; c < size - 1; c++) {
      const v = matrix[r][c];
      if (v === matrix[r][c + 1] && v === matrix[r + 1][c] && v === matrix[r + 1][c + 1]) score += 3;
    }
  }

  // Rule 3: the finder-like 1:1:3:1:1 sequence with four light modules beside it.
  const a = [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0];
  const b = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1];
  for (const byRow of [true, false]) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j + 11 <= size; j++) {
        let matchesA = true;
        let matchesB = true;
        for (let k = 0; k < 11; k++) {
          const cell = byRow ? matrix[i][j + k] : matrix[j + k][i];
          if (cell !== a[k]) matchesA = false;
          if (cell !== b[k]) matchesB = false;
        }
        if (matchesA) score += 40;
        if (matchesB) score += 40;
      }
    }
  }

  // Rule 4: how far the proportion of dark modules strays from one half.
  let dark = 0;
  for (const row of matrix) for (const cell of row) dark += cell;
  const percent = (dark * 100) / (size * size);
  score += Math.floor(Math.abs(percent - 50) / 5) * 10;

  return score;
}

/** The 15-bit format sequence: level M, the mask, BCH parity, then the mask XOR. */
function formatBits(mask) {
  const data = (0b00 << 3) | mask; // 00 is error-correction level M
  let value = data << 10;
  for (let i = 4; i >= 0; i--) {
    if ((value >> (i + 10)) & 1) value ^= 0b10100110111 << i;
  }
  return ((data << 10) | value) ^ 0b101010000010010;
}

function placeFormat(matrix, mask) {
  const size = matrix.length;
  const bits = formatBits(mask);
  // The sequence is laid out most significant bit first: position 0 below takes
  // bit 14 of the value, position 14 takes bit 0.
  const bit = (i) => (bits >> (14 - i)) & 1;

  for (let i = 0; i <= 5; i++) matrix[8][i] = bit(i);
  matrix[8][7] = bit(6);
  matrix[8][8] = bit(7);
  matrix[7][8] = bit(8);
  for (let i = 9; i <= 14; i++) matrix[14 - i][8] = bit(i);

  // Bits 0-6 run up column 8 from the bottom; bits 7-14 run along row 8 to the
  // right edge. The module at (size-8, 8) between them is the dark module and
  // is left alone — overwriting it is what stops a reader locking on at all.
  for (let i = 0; i <= 6; i++) matrix[size - 1 - i][8] = bit(i);
  for (let i = 7; i <= 14; i++) matrix[8][size - 15 + i] = bit(i);
}

function build(text) {
  const bytes = [...Buffer.from(text, 'utf8')];
  const needed = bytes.length + 2; // the mode indicator and count add up to two codewords

  const version = Object.keys(LEVEL_M)
    .map(Number)
    .find((v) => dataCapacity(v) >= needed);
  if (!version) throw new Error(`"${text}" is too long for this encoder (max version 10, level M).`);

  const codewords = withErrorCorrection(encodeData(bytes, version), version);
  const size = version * 4 + 17;
  const free = freeCells(version);

  let best = null;
  for (let mask = 0; mask < 8; mask++) {
    const matrix = blankMatrix(size);
    placeFunctionPatterns(matrix, version);
    placeData(matrix, free, codewords);
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (free[r][c] && MASKS[mask](r, c)) matrix[r][c] ^= 1;
      }
    }
    placeFormat(matrix, mask);
    const score = penalty(matrix);
    if (!best || score < best.score) best = { matrix, score, mask };
  }

  return { matrix: best.matrix, version, mask: best.mask };
}

// ------------------------------------------------------------------ output

/**
 * One `<path>` of square subpaths rather than thousands of `<rect>` elements:
 * it keeps the file small and prints without hairline gaps between modules.
 */
function toSvg(matrix, url) {
  const size = matrix.length;
  const quiet = 4; // the mandatory light margin, in modules
  const extent = size + quiet * 2;

  const parts = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (matrix[r][c]) parts.push(`M${c + quiet} ${r + quiet}h1v1h-1z`);
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${extent} ${extent}" shape-rendering="crispEdges" role="img" aria-label="QR code linking to ${url}">
  <rect width="${extent}" height="${extent}" fill="#ffffff"/>
  <path d="${parts.join('')}" fill="#1e2a5a"/>
</svg>
`;
}

const siteDir = path.resolve(import.meta.dirname, '..');
for (const { url, file } of OUTPUT) {
  const { matrix, version, mask } = build(url);
  const target = path.join(siteDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, toSvg(matrix, url));
  console.log(`${file} — ${url} (version ${version}, ${matrix.length}×${matrix.length}, mask ${mask})`);
}
