# pull-request-target-needs-exception

If you can, prefer using `pull_request` or other triggers instead of `pull_request_target`. The
tl;dr here motivation is that workflows run from `pull_request_target` have (by default) read/write
acesss to the repository and access to the secrets, even when run from a fork. If the workflow then
checks out and runs the untrusted code from the PR, this is a problem.

GitHub has a really good writeup of the perils here:
https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/

For now, this rule is just a warning. It will eventually require an exception to use once we get
that process working.
