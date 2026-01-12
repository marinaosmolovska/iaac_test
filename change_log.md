# Change Log

- [2026-01-11] Change logging enabled by assistant: created `change_log.md` and `scripts/log_changes.py`. The assistant will append concise entries to this file after each prompt describing edits made to the workspace.

- [2026-01-11] Assistant action: created `LOGGING.md` and finalized helper `scripts/log_changes.py`. From now on the assistant will append a short log entry to `change_log.md` after each prompt when it makes workspace changes.
 
- [2026-01-12] Implemented portfolio layout: updated `index.html`, `styles.css`, and `scripts.js` to add sticky header, two-column layout with divider at 33.33%, rotating text, full-width stacked academic project sections with hover overlays, responsive rules, and performance/lazy-loading tweaks.

- [2026-01-12] Adjusted header to fixed semi-transparent overlay, swapped rotating-word order to appear before "DESIGN", updated rotating animation timing, set body top padding dynamically, and updated RGBA text/button colors to match new accessibility spec.

- [2026-01-12] Tweaked header transparency and RGBA colors: header background set to rgba(255,255,255,0.5); site name and rotating words updated to lower opacity RGBA values; CV button border/text updated to 55% opacity. Also removed extra left padding on `h2.hi` so right-column content aligns consistently at 60px from the divider.
