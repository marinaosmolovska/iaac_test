#!/usr/bin/env python3
from pathlib import Path
from datetime import datetime
import sys

LOG_PATH = Path(__file__).parent.parent / 'change_log.md'

def append(entry: str):
    ts = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    with LOG_PATH.open('a', encoding='utf-8') as f:
        f.write(f"- [{ts}] {entry}\n")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        append(' '.join(sys.argv[1:]))
    else:
        append('Manual log entry (no message provided)')
    print(f"Appended to {LOG_PATH}")
