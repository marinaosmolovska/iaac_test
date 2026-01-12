Assistant-driven change logging

- Purpose: The assistant will append concise, timestamped entries to `change_log.md` after each prompt whenever it makes changes to the workspace (file creations, edits, deletions).
- Where: `change_log.md` at the repository root.
- Helper: `scripts/log_changes.py` can be used locally to append entries manually:

Usage examples (from workspace root):

```bash
python scripts/log_changes.py "Edited index.html: fixed title"
```

- Note: The assistant will manage the log entries automatically in its responses; you can also run the helper script yourself.
