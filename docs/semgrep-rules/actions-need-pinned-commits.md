# actions-need-pinned-commits

For actions that look like:

```
uses: actions/checkout@v4
```

GitHub uses the underlying git label v4 to fetch the action to run. As seen in the [tj-actions/changed-files](https://semgrep.dev/blog/2025/popular-github-action-tj-actionschanged-files-is-compromised/) vulnerabilty, these lables are not immutable and trivially changeable. So what you think is a nice stable safe version, an attacker has changed behind your back to something nefarious.

We are strongly encouraging use to use the full git commit hash instead to prevent this type of attacks.

## Ratchet

[Ratchet](https://github.com/sethvargo/ratchet) provides an easy way to do this.

You can pin all your workflow files like this:

```
ratchet pin .github/workflows/*
```

And upgrade them (as needed, under your control and not someone elses):

```
ratchet upgrade .github/workflows/action_to_upgrade.yml
```
