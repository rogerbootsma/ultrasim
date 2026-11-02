# UltraSim deployment

Published 2 November 2026 at https://ultrasim.io/ using GitHub Pages and GitHub Actions from https://github.com/rogerbootsma/ultrasim.

The initial deployment succeeded: https://github.com/rogerbootsma/ultrasim/actions/runs/41426685043. The footer was subsequently corrected to the confirmed ASimulation project at https://asimulation.io/ in commit `a7beb9cb9762b6da9290f9fd95e2cbcab287f418`.

Namecheap host records were saved and verified after reloading the control panel:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | rogerbootsma.github.io |

Existing mail forwarding and SPF settings were preserved. The separately owned ultrasims.io domain remains unchanged.

The TLS certificate is active, Enforce HTTPS is enabled, and https://ultrasim.io/ returns HTTP 200 with normal certificate validation. The www hostname redirects to the primary domain. DNS propagation was verified with public resolvers and the local resolver. No certificate warning was bypassed.

Live browser verification: approved city hero and open-box mark loaded; all six world illustrations loaded; artwork dialog and Escape worked; no horizontal overflow or console warnings/errors. Signup remains a disabled design preview and collects no addresses.

Final social artwork is saved locally in the ignored `social/` directory. It was created with the built-in imagegen tool; exact prompts and original generated images are preserved. No social account uploads were performed.
