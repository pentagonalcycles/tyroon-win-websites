Continue from commit 43c766b on main.

Read `nextsteps.md` and `full-documentation.md` first, then verify current `barristersclerk` code against the latest client requests before making edits.

Project scope

- Work on `barristersclerk.co.uk` / `thebarristersclerk.com` only unless explicitly told otherwise.
- Do not change `taxclerk` unless explicitly requested.

Current live baseline (as of 13 April 2026)

- Resources page (`/resources`) replaced with "Guide to UK Tax Acronyms" content.
- Instagram icon removed from homepage Newsroom social links (LinkedIn only).
- Documentation synced to this state:
  - `nextsteps.md` current status dated 13 April 2026
  - `full-documentation.md` version 3.5, last updated 13 April 2026
- Production deploy is live on `.com` domain via Vercel.

When starting a new session, use this exact instruction to the assistant
"Please continue from commit 43c766b on main. First read `barristersclerkcontinue.md`, `nextsteps.md`, and `full-documentation.md`. Then review only `barristersclerk` for consistency with the latest documented state, list any mismatches, and wait for my approval before implementing changes."

Working method for future changes

1. Identify all impacted pages/components before editing.
2. Make targeted edits only.
3. Run lint/tests relevant to changed apps.
4. Update docs (`nextsteps.md`, `full-documentation.md`) in the same session when behavior/content changes.
5. Commit only requested changes; avoid unrelated/untracked files.

Git + deploy notes

- Commit style: conventional messages (`fix: ...`, `feat: ...`, `docs: ...`).
- Push to `main` triggers Vercel production deploy for this project.
- Domain is already configured; normal code/content updates do not require DNS changes.

Guardrails

- Do not commit local reference files unless explicitly requested (e.g. PDFs/DOCX/images in repo root).
- Do not use destructive git commands.
- Preserve existing navigation/legal wording unless a client revision requires updates.
