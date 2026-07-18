# Security

The default showcase is local and deterministic. The optional live mode calls the OpenAI Responses API only when `OPENAI_API_KEY` is explicitly provided in the process environment. No key is stored, printed, logged, or committed.

## Repository Boundary

Only curated Elias architecture, governance, schema, approved knowledge examples, approved PB-009 records, demo code, and tests belong here. Private data, tokens, passwords, browser profiles, backups, logs, ZIP files, and unrelated projects are excluded.

## Demo Limitations

The demo uses hard-coded mock knowledge records and simulated verification. It is not an authorization system, production intake processor, or security boundary.

## Live Mode Boundaries

Live mode sends only the explicit user request and approved showcase governance context. It does not send repository files, personal data, machine paths, browser data, or local workspace contents. Structured output is advisory evidence only; the local Elias governance layer keeps the human review gate and does not accept model authorization.

Optional OpenAI Responses API mode implemented and covered by automated mocked tests. Real API smoke test pending billing activation.

Use `.env.example` only as a placeholder reference. Never create or commit a real `.env` file. Remove the environment variable after a local run.

Report suspected security issues privately to the project owner. Do not commit secrets or personal data.
