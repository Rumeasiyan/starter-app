# Pull Request

## Pull Request Title

IMPORTANT: The PR title must match your branch name exactly.

- Current branch name: $(git rev-parse --abbrev-ref HEAD)
- Example: If branch is `feature/homepage-hero`, PR title should be `feature/homepage-hero`

## Issue and Ticket

- [ ] The branch name follows the convention (e.g., `feature/<name>` or `fix/<name>`)
- [ ] The PR title matches the branch name exactly
- [ ] Ticket or issue is linked to this PR (if applicable)
  - Link:

## Summary

-

## Motivation and Context

-

## Changes

-

## How to Test

- `bun run lint`
- `bun run build`
- `bun run dev` and verify the change in browser (if applicable)

## Screenshots / Logs (if applicable)

-

## Code Quality

### General

- [ ] I performed a self-review
- [ ] The code follows project standards and best practices
- [ ] No sensitive data is included in commits (API keys, passwords, tokens)

### Linting and Formatting

- [ ] `bun run lint` (or `npm run lint` / `pnpm run lint` / `yarn lint`)

### Testing

- [ ] Tests added or updated where necessary
- [ ] Tests executed (if applicable)

## Documentation

- [ ] README updated if needed
- [ ] `docs/` updated if needed

## Security

- [ ] Security best practices are followed
- [ ] Inputs are validated and sanitized (where applicable)
- [ ] Permissions and roles are configured correctly (if applicable)

---

## Pre-merge Checklist

- [ ] PR title matches branch name
- [ ] Automated checks are passing
- [ ] Required reviewers assigned (if applicable)
- [ ] Documentation updated
- [ ] Changes tested in a development environment

---

## Additional Notes

-
