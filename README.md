# Elias OS — Build Week Showcase Edition

Elias OS is a governed instruction system designed to reduce yes-man behavior, preserve evidence boundaries, and require human review before protected changes.

This repository is a small, deterministic showcase. It demonstrates the governance path only. The demo uses local mock knowledge and does not call an external model, process Inbox files, generate prompts, or claim production readiness.

## Run

```text
node demo/elias-demo.js
```

## Test

```text
npm test
```

## Status

This is `Elias OS — Build Week Showcase Edition` version `0.1.0-showcase`. It is not production-ready.

## Structure

- `00_Architecture/`: approved architecture and governance.
- `01_Core/`: showcase Core summaries derived from the approved constitution and governance documents.
- `02_Behavior/`: showcase reasoning and anti-agreement boundaries.
- `06_Knowledge/`: approved IPTS reference examples only.
- `demo/`: deterministic local demonstration.
- `test/`: executable tests for the demo.

## Safety

This repository intentionally excludes the original workspace's personal data, browser data, backups, credentials, tokens, logs, ZIP archives, and unrelated projects. See `SECURITY.md`.
