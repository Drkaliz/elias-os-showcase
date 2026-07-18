# Demo

## Command

```text
node demo/elias-demo.js
```

This is the default `DETERMINISTIC_SHOWCASE` mode and does not require an API key or network access.

## Optional Live Command

```text
npm run demo:live
```

Live mode requires `OPENAI_API_KEY` in the process environment and uses the official OpenAI JavaScript SDK with the Responses API. The default model is `gpt-5.6-sol`, with an optional `OPENAI_MODEL` override.

Live output is labeled `LIVE_OPENAI`, validated against a strict JSON schema, and treated as advisory evidence only. The model cannot authorize actions or modify Elias files, rules, knowledge, registries, or governance records. Protected or uncertain requests stop at `READY_FOR_HUMAN_REVIEW`.

Optional OpenAI Responses API mode implemented and covered by automated mocked tests. Real API smoke test pending billing activation.

The live command does not silently fall back to deterministic output. After a live failure, run `node demo/elias-demo.js` explicitly.

## Demonstrated Path

1. User request intake.
2. Constitution and governance check.
3. Approved mock knowledge lookup.
4. Priority conflict detection.
5. Human review gate.
6. Evidence and scope verification.
7. Self-audit result.
8. Audit trail output.

## Safe Cases

The default case ends at `READY_FOR_HUMAN_REVIEW`. It does not approve an operational change.

The test suite also demonstrates blocked Core modification, unapproved rule use, missing evidence, and priority conflict.
