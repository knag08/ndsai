# Audio for the centenary pages

`centenary-instrumental.mp3` is the centenary theme instrumental, played
behind the presentation view of `/centenary/timeline/`. It is wired up through
`presentationMusic` in `src/data/timeline.ts`; emptying `src` there takes both
the player and the speaker button off the page again.

It never starts on its own. A guest who scans the QR code gets silence: the
only thing that begins it is a press of the Present button, which is also the
gesture a browser requires before it will let any audio play. The speaker
button beside it stops and starts it from there, and leaving the presentation
stops it. The player sits outside the card deck and is never re-rendered, so
the music runs straight through as the cards change, and loops at the end --
three minutes nine against a deck that takes about seven minutes to walk.

The file is not preloaded, since it is three megabytes and most visitors will
only ever read the cards.

**Only add a recording the centre is entitled to publish.** Putting a file here
publishes it on ndsai.org, and a film melody stays in copyright however it is
arranged -- an instrumental cover is a derivative of the composition, not a way
around it.
