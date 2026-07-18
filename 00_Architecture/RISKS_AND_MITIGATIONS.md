# Risks and Mitigations

## Risk 1: System Bloat

Description:

- Elias OS could grow into a large rule library that is harder to use than the problems it solves.

Causes:

- Promoting every correction into a rule.
- Adding modules for one-time tasks.
- Including long rationale in exports.

Mitigation:

- Keep Core universal and minimal.
- Require a reason or incident reference for every accepted rule.
- Use the lowest necessary scope.
- Reject rules that are more complex than the problem.
- Track export size in `./10_Analytics/`.

## Risk 2: Rule Conflict

Description:

- Rules may instruct the AI to do incompatible things.

Causes:

- Old rule files with contradictory guidance.
- Project preferences conflicting with verification.
- Style rules conflicting with safety.

Mitigation:

- Use the priority order: Constitution > Safety > Verification > Evidence > Project Rules > Style.
- Run conflict detection before approval and export.
- Block exports with unresolved conflicts.
- Route Core conflicts to human review.

## Risk 3: Duplicate Rules

Description:

- The same rule may appear in multiple files with slightly different wording.

Causes:

- Importing multiple old prompt files.
- Rewriting similar incidents into new rules.
- Copying rules into exports manually.

Mitigation:

- Keep a rule index.
- Deduplicate during classification.
- Prefer canonical rules with IDs.
- Treat exports as generated artifacts, not editable source.

## Risk 4: Overfitting to Old Mistakes

Description:

- The system may create too many narrow rules based on isolated incidents.

Causes:

- Treating frustration as architecture.
- Promoting project-specific failures into Core.
- Testing exact wording instead of behavior.

Mitigation:

- Use Experience Engine records as evidence, not automatic rules.
- Ask whether the issue is likely to recur.
- Prefer regression tests over new Core rules when possible.
- Keep project-specific fixes in project rules.

## Risk 5: Too Many Modules

Description:

- Module count can grow until selection becomes confusing.

Causes:

- Creating a module for every task type.
- Splitting rules before reuse is proven.
- Designing for hypothetical future needs.

Mitigation:

- Create a module only when reuse is proven.
- Keep one-time instructions in project rules.
- Review module count during Beta.
- Merge modules with overlapping responsibilities.

## Risk 6: Export Files Becoming Too Large

Description:

- Generated prompts may become too large, reducing model focus and increasing cost.

Causes:

- Including all modules by default.
- Repeating rationale instead of concise rules.
- Duplicates across Core, Behavior, and Project files.

Mitigation:

- Generate exports from selected sources only.
- Deduplicate rule IDs.
- Keep long explanations in source docs.
- Track export size.
- Review any export that exceeds the target size for its profile.

## Risk 7: AI Inventing Rules

Description:

- AI may create rules that sound plausible but were never approved.

Causes:

- Over-helpful summarization.
- Filling gaps during export generation.
- Treating old rules as trusted truth.

Mitigation:

- Require reason or incident references for accepted rules.
- Require human approval for Core changes.
- Keep generated exports non-authoritative.
- Record source files in export metadata.
- Reject rules without traceable source or reviewer approval.

## Risk 8: Core Drift

Description:

- Core may slowly absorb project-specific, temporary, or style rules.

Causes:

- Treating repeated project needs as universal too early.
- Letting AI rewrite Core during normal tasks.
- Skipping human review.

Mitigation:

- Protect Core through the human review gate.
- Require universal scope for Core.
- Demote narrow rules to Behavior, Module, or Project files.
- Review Core size before Beta and RC1.

## Risk 9: Weak Verification

Description:

- Rules may exist but not change behavior because they are not tested.

Causes:

- Untestable wording.
- No regression tests.
- No export validation.

Mitigation:

- Require test references where possible.
- Convert incidents into regression tests.
- Define failure signals for rules.
- Mark untestable rules for review before approval.

## Risk 10: Architecture Becomes Implementation

Description:

- Phase A could accidentally begin building implementation details too early.

Causes:

- Creating scripts before process is approved.
- Designing automation before manual lifecycle is clear.
- Solving future problems prematurely.

Mitigation:

- Phase A creates architecture documents only.
- Scripts are deferred to later phases.
- Folder skeleton is deferred until approval.
- Each decision must document tradeoffs when meaningful.

## Highest-Risk Areas Before Phase B

The main risks before Phase B are:

- Core bloat from old rule imports.
- AI-generated rules without approval.
- Ambiguous boundary between Behavior, Modules, and Project Rules.
- Export size growth if profiles are not constrained.

Recommended control:

- Build Phase B manually first, with minimal files and one sample lifecycle, before adding automation.
