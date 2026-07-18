# Human Review Gate

## Purpose

The human review gate prevents Codex, ChatGPT, or any AI system from automatically modifying Core rules.

Core rules shape the whole operating system. They must not drift because an AI over-optimizes for a single task, old file, or recent correction.

## Protected Core Area

Protected Core files are planned as:

```text
./01_Core/CONSTITUTION.md
./01_Core/SAFETY.md
./01_Core/VERIFICATION.md
./01_Core/CORE_RULE_INDEX.md
```

No AI may directly modify these files without explicit human approval for that specific change.

## What AI May Do

AI systems may:

- Extract candidate rules from raw input.
- Classify candidate rules.
- Detect duplicates and conflicts.
- Propose Core change requests.
- Draft review packets.
- Suggest regression tests.
- Explain advantages and disadvantages.

AI systems may not:

- Automatically approve Core rules.
- Directly add rules to Core from Inbox.
- Rewrite Core to fit a project preference.
- Remove Core rules because they are inconvenient.
- Treat a generated export as authority over Core.

## Core Change Request

Any proposed Core change must be recorded as a review packet before approval.

Required fields:

```text
Change Request ID:
Proposed Rule ID:
Target File:
Current Rule, if replacing:
Proposed Rule:
Priority:
Scope:
Reason or Incident:
Source Material:
Conflict Check:
Expected Behavior:
Test Reference:
Advantages:
Disadvantages:
Reviewer:
Decision:
Decision Date:
```

The change is not active until a human decision is recorded.

## Approval Standard

A Core rule may be approved only when:

- It is universal.
- It is clear.
- It is durable.
- It has a reason or incident reference.
- It does not duplicate an existing rule.
- It does not conflict with higher-priority Core rules.
- It is testable where possible.
- It is simpler than the problem it solves.

If these conditions are not met, the rule must be rejected, narrowed, demoted, or returned for clarification.

## Review Outcomes

Allowed outcomes:

- Approved for Core.
- Approved for Behavior instead.
- Approved for Project Rules instead.
- Approved as Module rule instead.
- Rejected.
- Needs rewrite.
- Archived as context.

The reviewer must record the reason for the outcome.

## Enforcement Design

Phase A defines the gate as a governance rule. Later phases may add tooling to support it.

Minimum enforcement rules:

- Core is never changed from raw Inbox input.
- Core change requests are reviewed separately from normal project rules.
- Exports are regenerated from Core, not used to rewrite Core.
- Every Core rule has traceable approval metadata.
- Any AI-generated Core proposal remains inactive until approved by a human.

Future tooling should enforce:

- Protected file checks.
- Required metadata validation.
- Conflict report before Core changes.
- Regression test reference before approval when practical.

## Emergency Changes

Emergency Core changes still require human approval.

If a safety issue requires immediate correction, the reviewer may approve a narrow temporary rule with:

- Explicit expiration or review date.
- Incident reference.
- Test reference if possible.
- Follow-up review requirement.

Temporary rules must not become permanent without normal review.

## Tradeoff

The human gate slows Core changes.

Advantages:

- Prevents Core drift.
- Stops AI from inventing authority.
- Protects universal rules from project-specific pressure.

Disadvantages:

- Urgent improvements take longer.
- Review packets add manual work.
- Some useful rules may remain inactive until reviewed.

The tradeoff is accepted because Core stability is more important than fast rule promotion.

