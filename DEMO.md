# Demo

## Command

```text
node demo/elias-demo.js
```

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
