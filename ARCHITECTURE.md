# Showcase Architecture

The showcase follows the approved Elias model:

```text
Input -> Governance -> Knowledge Lookup -> Conflict Detection -> Human Review Gate -> Verification -> Self Audit -> Audit Trail
```

The default demo is a deterministic slice of the larger architecture. An optional live adapter uses the official OpenAI JavaScript SDK and Responses API to produce structured advisory evidence. The adapter does not authorize actions or modify files, rules, knowledge, registries, or governance records.

Execution modes are deliberately separated:

- `DETERMINISTIC_SHOWCASE`: local mock data, no network or credentials, default reviewer path.
- `LIVE_OPENAI`: optional external analysis using `gpt-5.6-sol` by default, strict structured-output validation, explicit human review requirement, and failure without silent fallback.

Optional OpenAI Responses API mode implemented and covered by automated mocked tests. Real API smoke test pending billing activation.

Neither mode implements the full runtime engine, Inbox processing, export generation, or automatic promotion.

Authority remains in reviewed source documents. The demo output is generated evidence for the showcase and is not source of truth.
