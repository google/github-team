var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"GitHub Source Solutions","text":"<ul> <li>Google Specifc SemGrep Rules</li> </ul>"},{"location":"code-of-conduct.html","title":"Code of Conduct","text":""},{"location":"code-of-conduct.html#our-pledge","title":"Our Pledge","text":"<p>In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>"},{"location":"code-of-conduct.html#our-standards","title":"Our Standards","text":"<p>Examples of behavior that contributes to creating a positive environment include:</p> <ul> <li>Using welcoming and inclusive language</li> <li>Being respectful of differing viewpoints and experiences</li> <li>Gracefully accepting constructive criticism</li> <li>Focusing on what is best for the community</li> <li>Showing empathy towards other community members</li> </ul> <p>Examples of unacceptable behavior by participants include:</p> <ul> <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li> <li>Trolling, insulting/derogatory comments, and personal or political attacks</li> <li>Public or private harassment</li> <li>Publishing others' private information, such as a physical or electronic address, without explicit   permission</li> <li>Disrespecting the community's time by sending spam or other unsolicited commercial messages</li> <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li> </ul>"},{"location":"code-of-conduct.html#our-responsibilities","title":"Our Responsibilities","text":"<p>Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.</p> <p>Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.</p>"},{"location":"code-of-conduct.html#scope","title":"Scope","text":"<p>This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.</p> <p>This Code of Conduct also applies outside the project spaces when the Project Steward has a reasonable belief that an individual's behavior may have a negative impact on the project or its community.</p>"},{"location":"code-of-conduct.html#conflict-resolution","title":"Conflict Resolution","text":"<p>We do not believe that all conflict is bad; healthy debate and disagreement often yield positive results. However, it is never okay to be disrespectful or to engage in behavior that violates the project\u2019s code of conduct.</p> <p>If you see someone violating the code of conduct, you are encouraged to address the behavior directly with those involved. Many issues can be resolved quickly and easily, and this gives people more control over the outcome of their dispute. If you are unable to resolve the matter for any reason, or if the behavior is threatening or harassing, report it. We are dedicated to providing an environment where participants feel welcome and safe.</p> <p>Reports should be directed to [PROJECT STEWARD NAME(s) AND EMAIL(s)], the Project Steward(s) for [PROJECT NAME]. It is the Project Steward\u2019s duty to receive and address reported violations of the code of conduct. They will then work with a committee consisting of representatives from the Open Source Programs Office and the Google Open Source Strategy team. If for any reason you are uncomfortable reaching out to the Project Steward, please email opensource@google.com.</p> <p>We will investigate every complaint, but you may not receive a direct response. We will use our discretion in determining when and how to follow up on reported incidents, which may range from not taking action to permanent expulsion from the project and project-sponsored spaces. We will notify the accused of the report and provide them an opportunity to discuss it before any action is taken. The identity of the reporter will be omitted from the details of the report supplied to the accused. In potentially harmful situations, such as ongoing harassment or threats to anyone's safety, we may take action without notice.</p>"},{"location":"code-of-conduct.html#attribution","title":"Attribution","text":"<p>This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at https://www.contributor-covenant.org/version/1/4/code-of-conduct/</p>"},{"location":"contributing.html","title":"How to Contribute","text":"<p>We would love to accept your patches and contributions to this project.</p>"},{"location":"contributing.html#before-you-begin","title":"Before you begin","text":""},{"location":"contributing.html#sign-our-contributor-license-agreement","title":"Sign our Contributor License Agreement","text":"<p>Contributions to this project must be accompanied by a Contributor License Agreement (CLA). You (or your employer) retain the copyright to your contribution; this simply gives us permission to use and redistribute your contributions as part of the project.</p> <p>If you or your current employer have already signed the Google CLA (even if it was for a different project), you probably don't need to do it again.</p> <p>Visit https://cla.developers.google.com/ to see your current agreements or to sign a new one.</p>"},{"location":"contributing.html#review-our-community-guidelines","title":"Review our Community Guidelines","text":"<p>This project follows Google's Open Source Community Guidelines.</p>"},{"location":"contributing.html#contribution-process","title":"Contribution process","text":""},{"location":"contributing.html#code-reviews","title":"Code Reviews","text":"<p>All submissions, including submissions by project members, require review. We use GitHub pull requests for this purpose.</p>"},{"location":"semgrep-rules/index.html","title":"Index","text":""},{"location":"semgrep-rules/index.html#google-specifc-semgrep-rules","title":"Google Specifc SemGrep Rules","text":"<p>These are the custom rules we've developed to help keep our enterprise safe on GitHub.</p> <ul> <li>pull-request-target-needs-exception</li> </ul>"},{"location":"semgrep-rules/pull-request-target-needs-exception.html","title":"pull-request-target-needs-exception","text":"<p>If you can, prefer using <code>pull_request</code> or other triggers instead of <code>pull_request_target</code>. The tl;dr here motivation is that workflows run from <code>pull_request_target</code> have (by default) read/write acesss to the repository and access to the secrets, even when run from a fork. If the workflow then checks out and runs the untrusted code from the PR, this is a problem.</p> <p>GitHub has a really good writeup of the perils here: https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/</p> <p>For now, this rule is just a warning. It will eventually require an exception to use once we get that process working.</p>"}]}