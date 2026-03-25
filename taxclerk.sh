#!/usr/bin/env bash

# Start taxclerk.co.uk dev server on http://localhost:3001

export PATH="$HOME/.local/share/pnpm:$PATH"

cd "$(dirname "$0")"

echo "Starting taxclerk.co.uk on http://localhost:3001 ..."
echo "Press Ctrl+C to stop."
echo ""

pnpm dev --filter=taxclerk
