# Regression Policy

## Purpose
Define how Elias OS uses regression tests to prevent reviewed mistakes from recurring and to verify accepted operational rules.

This document is policy only. It does not create real tests, automation, scripts, rules, knowledge, or registry entries.

## Test Categories
Regression test categories:

- Rule compliance tests.
- Knowledge traceability tests.
- Evidence boundary tests.
- Conflict detection tests.
- Duplicate detection tests.
- Human review gate tests.
- Scope control tests.
- Export boundary tests.
- Source intake boundary tests.

## Pass Criteria
A regression test passes when:

- The expected behavior is observed.
- Required source, knowledge, rule, or pattern references are present.
- Evidence boundaries are respected.
- Human review requirements are not bypassed.
- No higher-priority authority is violated.
- Scope remains within the approved target.

## Fail Criteria
A regression test fails when:

- Expected behavior is missing.
- A rule is applied without evidence or justification.
- An unapproved source is treated as authority.
- A conflict is ignored.
- A duplicate is promoted without review.
- Human approval is bypassed.
- Scope expands beyond the approved target.
- The result cannot be verified or observed.

## Required Evidence
Each future regression test must record:

- Test ID.
- Source incident, rule, knowledge, pattern, or review reference.
- Expected behavior.
- Input or review scenario.
- Evidence required to judge the result.
- Pass criteria.
- Fail criteria.
- Reviewer.
- Review date.

## Human Approval
Human approval is required before:

- Creating an active regression test.
- Marking a test as accepted.
- Retiring a test.
- Changing pass or fail criteria.
- Using a test result to approve a rule, pattern, or knowledge change.

AI may draft test proposals and report results, but must not approve test authority.

## Retest Policy
Retest is required when:

- A related rule changes.
- A related knowledge entry changes.
- A related pattern changes.
- A prior failure is fixed.
- A production intake policy changes.
- A source boundary policy changes.
- A regression test result is disputed.

Retests must preserve prior result history. No silent overwrite is allowed.
