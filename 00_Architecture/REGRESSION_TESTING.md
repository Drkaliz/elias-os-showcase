# Regression Testing

## Purpose

Regression testing turns old mistakes into permanent checks.

The goal is not to test everything. The goal is to prevent known failures from returning.

## Principle

Every accepted rule should be testable where possible.

If a rule cannot be tested directly, it should at least have observable review criteria. Untestable rules should not enter Core unless they are essential constitutional or safety constraints.

## Test Locations

Planned locations:

```text
./08_Tests/regression/
./08_Tests/rule_tests/
./08_Tests/export_tests/
```

## How Mistakes Become Tests

Lifecycle:

```text
Incident -> Expected Behavior -> Test Case -> Review -> Permanent Regression Test
```

Steps:

1. Log the incident in `./09_Experience/`.
2. Identify the expected behavior.
3. Determine whether the mistake reflects a missing rule, ignored rule, conflict, or export problem.
4. Write a test case that would fail on the old behavior.
5. Link the test to the incident ID.
6. Review the test for scope and overfitting.
7. Add the test to the appropriate test folder after approval.

## Test Case Fields

Recommended test format:

```text
Test ID:
Incident ID:
Rule ID:
Scope:
Priority:
Scenario:
Input:
Expected Behavior:
Failure Signal:
Test Type:
Status:
Last Reviewed:
```

## Test Types

### Rule Behavior Test

Tests whether an individual rule produces expected behavior.

Example:

- A user asks the AI to accept a flawed assumption.
- Expected behavior: the AI states the conflict or risk before proceeding.

### Export Composition Test

Tests whether an export includes and excludes the correct sources.

Example:

- Export for one project must not include another project's rules.

### Conflict Test

Tests whether priority resolves conflicts correctly.

Example:

- Style requests brevity, but verification requires reporting failed tests.
- Expected behavior: verification is reported concisely.

### Review Gate Test

Tests whether protected Core changes are blocked without human approval.

Example:

- AI proposes a Core edit from raw Inbox input.
- Expected behavior: proposal is routed to review, not applied.

## Permanent Test Rule

A regression test created from an incident should remain active until:

- The related rule is retired.
- The scenario is no longer possible.
- A human reviewer archives the test with a reason.

Do not delete failed-history tests just because the system now passes them.

## Test Approval Standard

A test should be approved when:

- It maps to a real incident or approved rule.
- It has a clear failure signal.
- It is not broader than the problem.
- It can be run manually or automated later.
- It does not require private or unstable context unless documented.

## Avoiding Overfitting

A test is overfit when it only checks a narrow wording instead of the behavior that failed.

Mitigations:

- Test behavior, not exact phrasing.
- Use minimal scenarios.
- Link to rule IDs and incident IDs.
- Prefer one clear expected behavior per test.
- Keep project-specific failures in project tests unless universal.

## Regression Status Values

Allowed status values:

- Proposed.
- Approved.
- Active.
- Failing.
- Passing.
- Retired.
- Archived.

Failed tests must be visible in completion reports when they affect the requested task.

## Tradeoff

Permanent regression tests add maintenance work.

Advantages:

- Prevents repeated mistakes.
- Makes rules measurable.
- Improves confidence in exports.

Disadvantages:

- Too many tests can slow review.
- Poor tests can overfit to old wording.
- Manual tests require discipline until automation exists.

The mitigation is to add tests for real incidents and approved rules only.
