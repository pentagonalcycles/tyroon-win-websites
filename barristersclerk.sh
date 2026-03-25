#!/usr/bin/env bash

# Start barristersclerk.co.uk dev server on http://localhost:3000

export PATH="$HOME/.local/share/pnpm:$PATH"

cd "$(dirname "$0")"

echo "Starting barristersclerk.co.uk on http://localhost:3000 ..."
echo "Press Ctrl+C to stop."
echo ""

pnpm dev --filter=barristersclerk
