# Smoke Test Marker

This file is used to create a lightweight pull request that verifies:

- GitHub pull request webhook delivery to n8n
- Slack notification flow from `guest_pr_review_gate`
- End-to-end guest platform control-plane connectivity

Follow-up update: validate `pull_request.synchronize` webhook delivery after initial PR creation.
