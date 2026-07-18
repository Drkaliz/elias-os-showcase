# Elias OS Showcase Manifest

Project: Elias OS - Build Week Showcase Edition

Version: 0.1.0-showcase

Current status: Showcase prototype, not production-ready.

Source policy: Curated approved Elias architecture, governance, schemas, knowledge examples, and PB-009 review records only.

Demo: Deterministic local Node.js demonstration; optional LIVE_OPENAI analysis mode.

External services: None in deterministic mode; optional OpenAI Responses API in live mode.

Runtime scope: Request intake, governance check, knowledge lookup, conflict detection, human review gate, verification, self-audit, and audit trail output.

Explicit exclusions: Inbox processing, automatic promotion, Core mutation, prompt export generation in deterministic mode, production logging, and production dataset processing.

Test command: `npm test`

Automated tests: 14 passed, 0 failed.

Live integration status: Optional OpenAI Responses API mode implemented and covered by automated mocked tests. Real API smoke test pending billing activation.

Live governance: Model output is advisory evidence only. It cannot authorize actions or modify rules, knowledge, registries, files, or governance records. Elias OS remains the governance and authorization layer.

Publication status: Published.

Visibility: Public.

Repository URL: https://github.com/Drkaliz/elias-os-showcase

Default branch: `main`

Edition: Build Week Showcase Edition.

Production limitation: This is a showcase prototype, not a production-ready autonomous system.
