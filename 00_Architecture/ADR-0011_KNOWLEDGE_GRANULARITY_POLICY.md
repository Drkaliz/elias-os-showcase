# ADR-0011 Knowledge Granularity Policy

## Status

Accepted

## Purpose

Define when approved knowledge deserves its own file.

## Decision

Knowledge files must be atomic but not fragmented.

Rules:

- One principle per Knowledge file.
- Examples belong inside the related Knowledge unless independently reusable.
- Avoid creating one Knowledge file per example.
- Prefer merging closely related examples.
- Keep Knowledge atomic but not fragmented.

## Rationale

Over-fragmented knowledge creates registry noise and weakens review quality.

Over-merged knowledge makes evidence, scope, and revision history unclear.

The correct unit is a reusable knowledge concept with clear scope and evidence.

## Consequences

- Closely related examples should be grouped.
- Standalone examples need independent reusable value.
- Future knowledge reviews must check whether a new file is justified.

