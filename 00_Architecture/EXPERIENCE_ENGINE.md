# Experience Engine

## Purpose

The Experience Engine records what Elias OS learns from real use.

It covers both failures and successful outputs. Elias must learn from mistakes, but it should also preserve repeatable patterns that produced strong results.

The Experience Engine does not automatically create rules. It creates evidence for review.

## Core Rule

Experience does not automatically become Core.

An experience record can produce:

- A lesson.
- A pattern.
- A knowledge proposal.
- A rule proposal.
- A regression test.
- A project-specific rule.
- A Core change request.
- No action, if the experience is not generalizable.

## Planned Location

Planned folder:

```text
./09_Experience/
```

Planned files:

```text
./09_Experience/INCIDENT_LOG.md
./09_Experience/SUCCESS_CASES.md
./09_Experience/EXPERIENCE_TEMPLATE.md
./09_Experience/lessons/
./09_Experience/patterns/
./09_Experience/regression_links/
```

## Experience Types

### Incidents

Failures, regressions, violations, or weak outputs that need analysis.

Examples:

- Yes-man behavior.
- Invented rule.
- Missed conflict.
- Skipped verification.
- Path or scope violation.
- Unauthorized Core change.
- Over-complex solution.
- Ignored user constraint.
- Unsafe action.
- Export included wrong rule.
- Export omitted required rule.

### Success Cases

Outputs that should be preserved as examples of correct behavior.

Examples:

- A model correctly challenged a false assumption.
- A project export included the right rules and excluded irrelevant ones.
- A review packet explained tradeoffs clearly.
- A regression test caught a repeated failure.

Success cases should not become style theater. They are useful only when they reveal a repeatable pattern.

### Lessons

Human-reviewed conclusions from incidents or success cases.

A lesson explains what should be learned, but it is not automatically a rule.

### Patterns

Reusable decision or reasoning structures extracted from repeated experience.

Patterns may become approved knowledge under `./06_Knowledge/` if they are useful but not mandatory rules.

### Regression Tests

Tests created from incidents or approved rules to prevent known failures from returning.

Regression tests live under:

```text
./08_Tests/
```

The Experience Engine links experience records to tests, but tests remain in the test layer.

## Required Incident Fields

Each incident must include:

```text
Incident ID:
Date:
Project:
Model:
Error Category:
Severity:
Expected Behavior:
Root Cause:
Affected Files:
Fix Status:
Regression Test:
```

## Required Success Case Fields

Each success case must include:

```text
Success Case ID:
Date:
Project:
Model:
Successful Behavior:
Why It Worked:
Reusable Pattern:
Affected Files:
Knowledge Proposal:
Regression or Validation Test:
Review Status:
```

## Field Rules

### ID Format

Recommended formats:

```text
INC-YYYYMMDD-001
SUC-YYYYMMDD-001
```

### Date

Use exact dates, not relative wording.

### Project

Use the affected project name. Use `Global` only when the experience is not project-specific.

### Model

Record the model, AI surface, or agent involved.

Examples:

- Codex.
- ChatGPT.
- Other AI agent.

### Severity

Incident severity:

```text
S1 Critical: caused unsafe or destructive behavior, or corrupted Core governance.
S2 High: violated a hard constraint or produced a materially wrong result.
S3 Medium: caused rework, weak reasoning, or missed verification.
S4 Low: minor style or process issue.
```

Severity measures impact, not frustration.

### Root Cause

Root cause must be evidence-based.

Allowed values include:

- Missing rule.
- Missing knowledge.
- Conflicting rules.
- Rule existed but was ignored.
- Evidence was insufficient.
- Export omitted required module.
- Prompt too large.
- Instruction priority unclear.
- User instruction misunderstood.
- Unknown.

Do not invent root cause when evidence is insufficient.

### Fix Status

Allowed values:

- New.
- Under Review.
- Knowledge Proposed.
- Rule Proposed.
- Pattern Proposed.
- Test Proposed.
- Approved.
- Fixed.
- Rejected.
- Archived.

## Review Flow

```text
Experience Logged -> Root Cause or Success Analysis -> Lesson or Pattern Proposal -> Human Review -> Knowledge, Rule, or Test Decision
```

If an experience suggests a Core change, it must pass the human review gate.

## Proposal Standard

An Experience Engine proposal must include:

- Experience ID.
- Proposed output type: Knowledge, Rule, Pattern, Test, or No Action.
- Proposed destination.
- Evidence.
- Expected behavior.
- Test reference if applicable.
- Advantages.
- Disadvantages.

The proposal must be rejected or narrowed if it overfits to one case.

## Overfitting Control

Before creating a rule from experience, ask:

- Is this likely to recur?
- Is the expected behavior already covered?
- Is the issue project-specific?
- Is this better stored as knowledge or a pattern?
- Would the new rule increase prompt size more than it improves behavior?
- Can a test solve the problem without adding a rule?

If the answer favors knowledge, a pattern, or a test, do not promote it to Core.

## Experience Engine Outputs

The Experience Engine may produce:

- Incident record.
- Success case record.
- Lesson note.
- Pattern proposal.
- Knowledge proposal.
- Candidate rule.
- Conflict report.
- Regression test proposal.
- Export validation requirement.

The Experience Engine must not directly produce:

- Approved Core rules.
- Approved exports.
- Automatic rule promotions.

