---
name: github-issue-state
description: Modify a GitHub issue workflow state for this repository using the GitHub MCP. Use when Codex is given an issue number and a requested state change of doing or done, needs to read the issue, move its status label between toDo/doing/done, create and switch to a local branch from dev for doing, or verify validation criteria before marking an issue done. This skill must not edit code.
---

# GitHub Issue State

## Overview

Move one GitHub issue between implementation states using exactly two inputs: an issue number and a target state (`doing` or `done`). Use the GitHub MCP for issue reads and updates, and do not edit source code or documentation as part of this workflow.

The workflow state is represented by labels. Exactly one of `toDo`, `doing`, or `done` should remain on the issue after a successful state change; preserve all other labels.

## Inputs

Require both parameters before taking action:

- `issue_number`: GitHub issue number, for example `1`.
- `target_state`: one of `doing` or `done`.

If either parameter is missing, ask one concise question. Reject any target state other than `doing` or `done`.

## Workflow

### 1. Read the Issue

Use `mcp__github.issue_read` with `method: get` to read the issue. Confirm:

- The issue exists.
- The issue is in the expected repository.
- The body contains enough description and validation criteria to evaluate the requested change.

If the issue cannot be read, stop and report the blocker.

### 2. Change to Doing

When `target_state` is `doing`:

1. Update the issue labels through the GitHub MCP so `doing` is present and `toDo`/`done` are absent.
2. Preserve all labels that are not workflow state labels.
3. Do not close the issue.
4. In the local repo, start from `dev`, update it from `origin/dev`, create a branch that includes the issue number, and switch the repo to it.

Preferred branch name:

```text
issue-<issue_number>
```

If that branch already exists locally, switch to it and report that it already existed. If it exists only on the remote, create a local tracking branch from the remote. Do not edit files after switching branches.

### 3. Change to Done

When `target_state` is `done`:

1. Read the issue body and extract its validation criteria.
2. Verify the criteria using the repository state, existing docs, PRs, tests, and checks as appropriate.
3. Do not edit code, docs, config, or tests to make validation pass.
4. If any criterion cannot be verified or fails, do not change labels; report what is missing.
5. If all criteria pass, update the issue labels through the GitHub MCP so `done` is present and `toDo`/`doing` are absent.
6. Preserve all labels that are not workflow state labels.
7. Do not close the issue unless the user explicitly asks for closure separately.

### 4. Update Labels

Use `mcp__github.issue_write` with `method: update` and `labels` set to:

- All current non-state labels.
- The target state label.

State labels are case-sensitive in this repository: `toDo`, `doing`, `done`.

## Constraints

- Use the GitHub MCP for issue reads and issue updates.
- Do not edit code or create commits.
- Do not open, close, merge, or update pull requests unless validation needs read-only PR inspection.
- Do not modify milestones, assignees, project fields, issue title, or issue body.
- Do not force-push, delete branches, or touch protected branches.

## Output

Report:

- Issue number and title.
- Requested state.
- Labels before and after, when changed.
- Branch name and current local branch for `doing`.
- Validation evidence for `done`.
- Whether any action was skipped and why.
