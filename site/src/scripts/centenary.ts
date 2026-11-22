/**
 * Shared behaviour for the three centenary pages: deciding which item a visitor
 * is given, remembering it, and letting them pass it on.
 *
 * There is no server behind ndsai.org, so all of this happens in the browser.
 * The aim is that a phone which has seen a message keeps seeing that message —
 * see `remember` and `fromDevice` for how far that is carried.
 */

export type Item = { id: string };

/** FNV-1a, 32-bit. Small, stable, and enough to spread a string across a hundred buckets. */
export function hash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/**
 * An unbiased index, by rejection sampling, so a hundred items divide evenly
 * into the random range rather than the first few being favoured.
 */
export function randomIndex(limit: number): number {
  if (limit <= 0) return 0;
  if (!window.crypto?.getRandomValues) return Math.floor(Math.random() * limit);
  const ceiling = Math.floor(0xffffffff / limit) * limit;
  const buffer = new Uint32Array(1);
  let value = 0;
  do {
    window.crypto.getRandomValues(buffer);
    value = buffer[0];
  } while (value >= ceiling);
  return value % limit;
}

const A_YEAR = 60 * 60 * 24 * 365;

/**
 * Written to localStorage and to a cookie. They are usually cleared together,
 * but not always — Safari evicts localStorage for sites not visited in a week
 * while leaving cookies alone — and either surviving keeps the choice steady.
 */
export function remember(key: string, id: string): void {
  try {
    localStorage.setItem(key, id);
  } catch {
    /* private mode, or storage disabled — the cookie may still take it. */
  }
  try {
    document.cookie = `${key}=${id}; path=/; max-age=${A_YEAR}; samesite=lax`;
  } catch {
    /* nothing more to try; the device signature below covers this. */
  }
}

export function recall(key: string, isKnown: (id: string) => boolean): string | null {
  try {
    const stored = localStorage.getItem(key);
    if (stored && isKnown(stored)) return stored;
  } catch {
    /* fall through to the cookie. */
  }
  try {
    // Reading this throws outright where cookies are disabled, which is not the
    // same as there being no cookie — hence the guard.
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${key}=([^;]*)`));
    const fromCookie = match ? decodeURIComponent(match[1]) : null;
    return fromCookie && isKnown(fromCookie) ? fromCookie : null;
  } catch {
    return null;
  }
}

/**
 * Last resort, for a browser that will not store anything at all: derive the
 * choice from properties of the device itself, so a refresh still lands on the
 * same item. Deliberately coarse — nothing here identifies a person, and the
 * screen dimensions are sorted so turning the phone cannot change the answer.
 */
export function deviceSignature(): string {
  const sides = [screen.width, screen.height].sort((a, b) => a - b);
  let zone = '';
  try {
    zone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
  } catch {
    /* older browsers; the rest of the signature still varies. */
  }
  return [
    sides[0],
    sides[1],
    screen.colorDepth,
    zone,
    navigator.language,
    navigator.hardwareConcurrency ?? '',
    navigator.maxTouchPoints ?? '',
    navigator.userAgent,
  ].join('|');
}

/**
 * The item this device is given, and keeps. Drawn at random the first time and
 * stored; if nothing can be stored, derived from the device so that it at least
 * holds steady across a refresh.
 */
export function ownItem<T extends Item>(items: T[], key: string): T {
  const byId = new Map(items.map((i) => [i.id, i]));
  const kept = recall(key, (id) => byId.has(id));
  if (kept) return byId.get(kept)!;

  const drawn = items[randomIndex(items.length)];
  remember(key, drawn.id);
  if (recall(key, (id) => byId.has(id))) return drawn;

  return items[hash(deviceSignature()) % items.length];
}

/** A different item from the ones named, for passing on to somebody else. */
export function anotherItem<T extends Item>(items: T[], ...notThese: (string | undefined)[]): T {
  const pool = items.filter((i) => !notThese.includes(i.id));
  const from = pool.length ? pool : items;
  return from[randomIndex(from.length)];
}

/** A permanent link to this exact item, so whoever opens it sees the same thing. */
export function linkTo(param: string, id: string): string {
  return `${location.origin}${location.pathname}?${param}=${encodeURIComponent(id)}`;
}

/**
 * Wires up a copy button. The clipboard is refused in some browsers unless the
 * page is trusted, so a failure tells the visitor what to do instead rather
 * than failing silently.
 */
export function wireCopy(
  button: HTMLElement | null,
  label: HTMLElement | null,
  status: HTMLElement | null,
  getText: () => string,
): void {
  button?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(getText());
      if (label) label.textContent = 'Copied';
      if (status) status.textContent = 'Copied — paste it wherever you like.';
      setTimeout(() => {
        if (label) label.textContent = 'Copy';
      }, 2500);
    } catch {
      if (status) status.textContent = 'Press and hold the text above to copy it.';
    }
  });
}

/** Wires up the phone's own share sheet, which is where WhatsApp and Messages live. */
export function wireShare(
  button: HTMLElement | null,
  getPayload: () => { title: string; text: string; url: string },
): void {
  if (!navigator.share || !button) return;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.share(getPayload());
    } catch {
      /* Dismissing the share sheet rejects too; there is nothing to report. */
    }
  });
}

/**
 * Wires up a card deck: a scroll-snapping row swiped left and right.
 *
 * The swipe itself is the browser's own — the row simply scrolls — so a finger,
 * a trackpad and the arrow keys all work, and the cards still swipe if this
 * never runs. What this adds is the counter, the progress bar, and buttons that
 * step one card at a time.
 *
 * Used by both the timeline and the facts deck; the two differ only in what
 * they put on the cards and whether they shuffle them first.
 */
export function createDeck(refs: {
  deck: HTMLElement;
  prev?: HTMLElement | null;
  next?: HTMLElement | null;
  /** Element showing the current card's number. */
  position?: HTMLElement | null;
  /** Element whose width tracks progress through the deck. */
  bar?: HTMLElement | null;
  /** Called whenever the card in view changes, with its index. */
  onChange?: (index: number) => void;
}): void {
  const { deck, prev, next, position, bar, onChange } = refs;
  const count = deck.children.length;
  if (!count) return;

  /**
   * The distance from one card to the next, measured rather than assumed:
   * dividing the deck's scrollWidth by the card count folds in the padding and
   * the gaps, and drifts by several cards across a long deck.
   */
  let step = 0;
  function measure(): void {
    const first = deck.children[0] as HTMLElement | undefined;
    const second = deck.children[1] as HTMLElement | undefined;
    step =
      first && second
        ? second.offsetLeft - first.offsetLeft
        : (first?.offsetWidth ?? deck.clientWidth);
  }

  function currentIndex(): number {
    if (step <= 0) measure();
    if (step <= 0) return 0;
    return Math.min(count - 1, Math.max(0, Math.round(deck.scrollLeft / step)));
  }

  let shown = -1;
  function paint(): void {
    const index = currentIndex();
    if (position) position.textContent = String(index + 1);
    if (bar) bar.style.width = `${((index + 1) / count) * 100}%`;
    if (prev) (prev as HTMLButtonElement).disabled = index === 0;
    if (next) (next as HTMLButtonElement).disabled = index === count - 1;
    if (index !== shown) {
      shown = index;
      onChange?.(index);
    }
  }

  function go(to: number): void {
    const card = deck.children[Math.min(count - 1, Math.max(0, to))] as HTMLElement | undefined;
    // `scrollIntoView` would also scroll the page vertically; moving the deck's
    // own scrollLeft keeps the card where the reader is already looking.
    if (card) deck.scrollTo({ left: card.offsetLeft - deck.offsetLeft, behavior: 'smooth' });
  }

  /*
    Where the deck is heading, which is not the same as where it is. A smooth
    scroll takes a few hundred milliseconds, and somebody tapping Next twice
    quickly taps again before it has arrived — reading the live scroll position
    at that moment returns the card they are leaving, and the second tap is
    swallowed. Stepping from `target` instead means every tap counts.
  */
  let target = 0;
  let settle: ReturnType<typeof setTimeout>;

  function move(by: number): void {
    target = Math.min(count - 1, Math.max(0, target + by));
    go(target);
  }

  prev?.addEventListener('click', () => move(-1));
  next?.addEventListener('click', () => move(1));

  deck.addEventListener('keydown', (event) => {
    const key = (event as KeyboardEvent).key;
    if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;
    event.preventDefault();
    move(key === 'ArrowRight' ? 1 : -1);
  });

  // Scroll fires continuously while a finger is moving; one update a frame is
  // plenty and keeps the counter from thrashing.
  let pending = false;
  deck.addEventListener(
    'scroll',
    () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        paint();
        // Once the deck has come to rest — whether a finger or a button put it
        // there — that is where the next step counts from.
        clearTimeout(settle);
        settle = setTimeout(() => {
          target = currentIndex();
        }, 140);
      });
    },
    { passive: true },
  );

  window.addEventListener('resize', () => {
    measure();
    paint();
  });

  measure();
  paint();
}

/**
 * A shuffle that is the same every time for a given device, so the facts list
 * reads in a different order for different people but does not jump about when
 * one person reloads it. Fisher-Yates, driven by a seeded generator.
 */
export function stableShuffle<T>(items: T[], seed: number): T[] {
  const out = items.slice();
  let state = seed || 1;
  const next = () => {
    // xorshift32 — tiny, and good enough to order a list.
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 0x100000000;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** The seed this device shuffles by: kept if it can be, derived from the device if not. */
export function shuffleSeed(key: string): number {
  const stored = recall(key, (v) => /^\d+$/.test(v));
  if (stored) return Number(stored);
  const seed = randomIndex(0xffffff) + 1;
  remember(key, String(seed));
  if (recall(key, (v) => /^\d+$/.test(v))) return seed;
  return hash(deviceSignature());
}
