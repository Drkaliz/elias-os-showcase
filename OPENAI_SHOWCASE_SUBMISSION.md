# OpenAI Build Week Showcase Submission

## 1. Project Title

Elias OS - Build Week Showcase Edition

## 2. Tagline

Evidence before agreement. Human review before authorization.

## 3. Short Description

A deterministic showcase of a governed AI instruction system that checks evidence, conflicts, verification, uncertainty, and human approval before an action is treated as authorized.

## 4. Full Project Description

Elias OS is a modular governance architecture for improving AI reasoning discipline and reducing yes-man behavior. This Build Week Showcase Edition demonstrates a local request flow through governance checks, approved mock knowledge lookup, conflict detection, human review, verification, self-audit, and audit-trail generation.

## 5. Problem Being Solved

AI systems can agree without evidence, apply conflicting instructions, hide uncertainty, or make changes without accountable review. Elias OS defines explicit boundaries for evidence, authority, verification, and human approval.

## 6. Target Users

AI application builders, technical teams designing governed instruction systems, architecture reviewers, and organizations requiring traceable human-in-the-loop workflows.

## 7. Main Use Cases

- Review an AI-related request against governance boundaries.
- Look up approved knowledge.
- Detect priority conflicts.
- Require human review for protected actions.
- Verify evidence and scope.
- Produce an auditable result.

## 8. Capabilities Demonstrated

User intake, governance checking, knowledge lookup, conflict detection, human review gating, evidence verification, self-audit, uncertainty communication, and audit-trail output.

## 9. Technical Architecture

The showcase implements a deterministic slice of the Elias flow:

`Input -> Governance -> Knowledge Lookup -> Conflict Detection -> Human Review Gate -> Verification -> Self Audit -> Audit Trail`

The output remains a review result and does not authorize operational changes.

## 10. Tech Stack

Node.js 20+, JavaScript ES modules, Node's built-in test runner, Markdown documentation, and local deterministic mock data.

## 11. OpenAI Products, Models, and APIs Used

Codex was used for development and repository preparation. The default deterministic showcase runtime does not call an OpenAI model or API. An optional `LIVE_OPENAI` mode uses the official OpenAI JavaScript SDK and Responses API with `gpt-5.6-sol` as the default model. It requires `OPENAI_API_KEY` from the process environment and has not been real-API smoke-tested for this release unless separately verified by the owner.

Optional OpenAI Responses API mode implemented and covered by automated mocked tests. Real API smoke test pending billing activation.

## 12. How Codex Was Used

Codex helped structure the architecture, curate the showcase repository, implement the deterministic demo, create executable tests, perform repository safety checks, and prepare the documentation.

## 13. How the Project Was Built

The project was built from the approved Elias architecture and governance documentation. Only curated architecture, governance, schema, knowledge examples, approved review records, demo code, and tests were included.

## 14. Project Origin Story and Timeline

Elias OS began as an architecture-first effort to prevent unverified agreement and uncontrolled rule changes. The project progressed through architecture, foundation, knowledge governance, experience tracking, cognitive architecture, runtime flow, pilot intake, production-readiness review, and showcase preparation. The current public repository is the Build Week Showcase Edition, not the complete Elias runtime.

## 15. Why the Project Is Different

It treats governance, evidence boundaries, human review, verification, and self-audit as explicit stages before authorization. The showcase also clearly separates executable behavior from simulated components.

## 16. GitHub Repository URL

https://github.com/Drkaliz/elias-os-showcase

## 17. Setup and Run Instructions

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/Drkaliz/elias-os-showcase.git
cd elias-os-showcase
node demo/elias-demo.js
npm test
```

Optional live mode:

Windows PowerShell:

```powershell
$env:OPENAI_API_KEY="your-key-here"
npm run demo:live
Remove-Item Env:OPENAI_API_KEY
```

macOS/Linux:

```bash
export OPENAI_API_KEY="your-key-here"
npm run demo:live
unset OPENAI_API_KEY
```

Live mode is optional and never replaces the deterministic reviewer path.

## 18. Demo Explanation

The default demo runs a local request through governance, approved mock knowledge lookup, conflict detection, a required human review gate, verification, self-audit, and audit-trail generation. It ends with `READY_FOR_HUMAN_REVIEW`; it does not approve changes. The optional live demo sends a clearly delimited request and approved showcase governance context to the Responses API, validates the structured result, labels it `LIVE_OPENAI`, and also ends at `READY_FOR_HUMAN_REVIEW`.

The live model output is advisory evidence only. It cannot authorize actions or modify rules, knowledge, registries, files, or governance records. Elias OS remains the governance and authorization layer.

## 19. Test Results

`npm test` passed with 14 tests, 0 failures, 0 skipped, and 0 cancellations.

Covered behavior includes approval-required actions, conflict detection, rule priority, audit-trail generation, rejection of unapproved actions, and rejection of missing evidence.

## 20. Security and Privacy Approach

The default showcase is local and deterministic. Optional live mode requires an explicit environment key, sends no repository files or personal data, and never stores or prints the key. The repository contains no real key. The live integration has not been real-API smoke-tested for this release unless separately verified by the owner.

## 21. Known Limitations

- Not production-ready.
- Does not implement the full Elias runtime.
- Uses hard-coded mock knowledge.
- Verification is deterministic and simulated.
- Does not process production datasets or Inbox files.
- Does not implement automatic rule promotion, prompt export generation, or external model access.
- Live mode is optional and depends on network access, account authorization, model availability, rate limits, and a valid API key.
- Automated tests mock the SDK and do not prove live service availability.

## 22. Author

Khalil Rizq

## 23. Suggested Cover Image Concept

Human input placeholder: Create a clean technical flow diagram showing a request passing through Evidence, Conflict Detection, Human Review, Verification, and Audit Trail gates. Label the visual clearly as a showcase architecture.

## 24. Suggested 30-45 Second Video Narrative

Human media placeholder:

- 0-5s: Show the title, Elias OS - Build Week Showcase Edition.
- 5-12s: Introduce the problem: AI can agree without evidence or bypass review.
- 12-22s: Run the demo and show the request moving through governance, knowledge lookup, and conflict detection.
- 22-30s: Highlight the required human review gate and verification result.
- 30-38s: Show the audit trail and test result: 14 passing tests.
- 38-45s: State the limitation: this is a deterministic showcase prototype, not a production autonomous system.

## 25. Human-Only Submission Fields

- Final author profile and contact details: `[HUMAN INPUT REQUIRED]`
- Exact submission-form OpenAI attribution: `[HUMAN INPUT REQUIRED]`
- Cover image upload: `[HUMAN MEDIA REQUIRED]`
- Video upload or hosted video URL: `[HUMAN MEDIA REQUIRED]`
- Final project category and tags: `[HUMAN INPUT REQUIRED]`
- Rights confirmation for submitted media and repository content: `[HUMAN CONFIRMATION REQUIRED]`
- Final submission consent and owner attestation: `[HUMAN CONFIRMATION REQUIRED]`
