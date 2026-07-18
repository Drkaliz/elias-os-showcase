# Elias OS — Build Week Showcase Edition

Elias OS is a governed instruction system designed to reduce yes-man behavior, preserve evidence boundaries, and require human review before protected changes.

This repository is a small, deterministic showcase. It demonstrates the governance path only. The demo uses local mock knowledge and does not call an external model, process Inbox files, generate prompts, or claim production readiness.

## Run

```text
node demo/elias-demo.js
```

This deterministic showcase mode is the default reviewer path. It works without internet access, API keys, environment variables, accounts, or external services.

## Optional Live OpenAI Mode

Live mode is optional and separate from the deterministic demo. It sends only the explicit request and approved showcase governance context to the OpenAI Responses API. It does not send repository files, personal data, or machine paths.

Windows PowerShell:

```powershell
$env:OPENAI_API_KEY="your-key-here"
npm run demo:live
Remove-Item Env:OPENAI_API_KEY
```

macOS/Linux:

```bash
export OPENAI_API_KEY="your-key-here"
npm run demo:live
unset OPENAI_API_KEY
```

The default live model is `gpt-5.6-sol`; set `OPENAI_MODEL` to use another permitted model. Live output is advisory evidence only, is labeled `LIVE_OPENAI`, and always stops at `READY_FOR_HUMAN_REVIEW`.

The model cannot authorize actions or modify rules, knowledge, registries, files, or governance records. Elias OS remains the governance and authorization layer.

Optional OpenAI Responses API mode implemented and covered by automated mocked tests. Real API smoke test pending billing activation.

If live mode fails, it reports the failure without silently using deterministic output. Run `node demo/elias-demo.js` explicitly for the deterministic path.

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
- `demo/live-analysis.js`: optional Responses API analysis and structured-output validation.

## Safety

This repository intentionally excludes the original workspace's personal data, browser data, backups, credentials, tokens, logs, ZIP archives, and unrelated projects. See `SECURITY.md`.
