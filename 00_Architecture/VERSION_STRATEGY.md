# Version Strategy

## Purpose

Versioning keeps Elias OS changes understandable and reviewable.

The version strategy is intentionally simple. Elias OS does not need complex release management before the system exists.

## Version Stages

### Elias OS Alpha

Purpose:

- Establish architecture.
- Create folder skeleton after approval.
- Define initial Core and Behavior drafts.
- Manually process a small number of old rules.
- Validate the lifecycle without automation.

Exit criteria:

- Core draft exists.
- Human review gate is active as a manual process.
- At least one rule lifecycle example is completed.
- At least one incident-derived regression test is defined.

### Elias OS Beta

Purpose:

- Add repeatable rule ingestion and export preparation.
- Create initial module and project structures.
- Add validation rules for metadata, priority, and conflicts.
- Begin controlled export generation.

Exit criteria:

- Approved rules can produce task-specific exports.
- Conflict detection process is repeatable.
- Export metadata is complete.
- Regression tests are tracked consistently.

### Elias OS RC1

Purpose:

- Stabilize the system before version 1.0.
- Freeze Core except for approved critical fixes.
- Validate exports against known tests.
- Remove duplicate or unused rules.

Exit criteria:

- No unresolved high-priority conflicts.
- Core has complete reason or incident references.
- Export strategy has been tested with real project profiles.
- Experience Engine records are linked to tests or review decisions.

### Elias OS 1.0

Purpose:

- Mark the first stable governed version.
- Use Elias OS for normal project prompt exports.
- Require review for Core changes.
- Maintain changelog and architecture decision history.

Exit criteria:

- Core is stable and minimal.
- Human review gate is enforced.
- Rule lifecycle is documented and followed.
- Regression suite covers known critical mistakes.
- Exports are reproducible from approved sources.

## Change Categories

Recommended categories:

- Architecture.
- Core Rule.
- Behavior Rule.
- Module Rule.
- Project Rule.
- Export.
- Test.
- Experience.
- Knowledge.
- Documentation.

## CHANGELOG.md

Planned location:

```text
./00_Architecture/CHANGELOG.md
```

Purpose:

- Record meaningful changes across versions.
- Explain what changed, why it changed, and what risk was addressed.

Recommended entry format:

```text
## Elias OS <version> - <date>

### Added
- ...

### Changed
- ...

### Removed
- ...

### Fixed
- ...

### Governance
- ...
```

Rules:

- Do not log every minor edit.
- Do log Core changes.
- Do log architecture changes.
- Do log export strategy changes.
- Do log rule lifecycle changes.
- Link changes to incident IDs or architecture decisions where possible.

## ARCHITECTURE_DECISIONS.md

Planned location:

```text
./00_Architecture/ARCHITECTURE_DECISIONS.md
```

Purpose:

- Record architecture decisions that affect system structure, governance, or tradeoffs.

Recommended decision format:

```text
## ADR-YYYYMMDD-001: <Decision Title>

Status:
Date:
Context:
Decision:
Advantages:
Disadvantages:
Consequences:
Related Files:
```

Decisions that should be recorded:

- Folder architecture changes.
- Priority model changes.
- Human review gate changes.
- Export assembly changes.
- Version strategy changes.
- Any decision with meaningful tradeoffs.

## Initial Architecture Decisions

### Use Current Workspace as Project Root

Decision:

- Elias OS uses `<Project Root>` and relative paths instead of machine-specific absolute paths.

Advantages:

- Portable across operating systems and editors.
- Easier to store in Git.
- Safer for exports and documentation.

Disadvantages:

- Requires correct workspace selection.
- Future scripts must resolve root paths carefully.

### Keep Core Minimal and Protected

Decision:

- Core contains only universal rules and requires human review for changes.

Advantages:

- Prevents rule sprawl.
- Protects foundational behavior.
- Makes exports more predictable.

Disadvantages:

- Some good rules wait longer before promotion.
- More manual review is required.

### Treat Old Rules as Raw Input

Decision:

- Old rule files enter through Inbox and must pass extraction, classification, conflict detection, and human review.

Advantages:

- Prevents bad old instructions from becoming policy.
- Preserves traceability.
- Makes duplicate and emotional rules visible.

Disadvantages:

- Migration is slower.
- Some old intent may require human clarification.

## Version Naming Rule

Use the named stages for major maturity:

```text
Elias OS Alpha
Elias OS Beta
Elias OS RC1
Elias OS 1.0
```

Patch-level detail may be added later only if needed. Do not introduce complex release numbering until the project has enough activity to justify it.
