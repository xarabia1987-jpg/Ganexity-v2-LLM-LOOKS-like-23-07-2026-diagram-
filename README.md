# Ganexity // LLM Vision Map V3

Investor-grade, bilingual (`BG` / `ES`) presentation of a governed LLM operating system. The map follows `system-flow-spec-v2.md` from external sovereignty and model training through the live request path, memory, telemetry, adversarial persistence and the next frozen model generation.

## Core thesis

> **AI is not a model. It is a governed living system.**

The defensible platform is the **AI control plane** around inference:

- identity, rights, privacy and regional policy;
- model routing, budgets, feature flags and rollback;
- the local **+1 meta-controller** for planning, tool choice, compute allocation and stopping conditions;
- typed context, memory provenance and conflict reconciliation;
- the **tool fabric / MCP** where language becomes external action;
- defence in depth at input, inside the tool loop, output and out-of-band;
- observability, audit, incident command and evolutionary inheritance.

Adjacent industry concepts: **agentic runtime**, **memory plane**, **model registry**, **evaluation flywheel**, **model lineage**, **runtime governance**, **capability security**, **control-plane security** and **defence in depth**.

## V3 visual system

- composition inspired by an enterprise cinematic operating map;
- 18 explicit architecture layers (`L0–L17`);
- 43 differentiated, inspectable system and threat nodes;
- six flow channels: `CTRL`, `DATA`, `EXEC`, `FB`, `GEN`, `ADV`;
- autonomous moving particles on every path — no play/stop controls;
- Bulgarian and Spanish language switch;
- node intelligence panel with input, output, cadence, failure mode and strategic meaning;
- pan, wheel zoom, fullscreen presentation and landscape PDF export;
- responsive desktop, tablet and mobile layouts;
- zero runtime dependencies and no build step.

## Run

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

The static page also works when deployed through GitHub Pages.

## Controls

| Interaction | Result |
|---|---|
| `BG / ES` | Switch the entire presentation language |
| Click a node | Select it and update the intelligence panel |
| Double-click a node | Open the full node dossier |
| Drag the map | Pan |
| Mouse wheel / trackpad | Zoom |
| Double-click empty map | Reset the full view |
| `0` | Reset the full view |
| `PRESENT` | Fullscreen architecture mode |
| `PDF` | Print or save as landscape PDF |
| `Esc` | Close the node dossier or exit fullscreen |

## Investor narrative

1. **Category shift** — the product is a control system around intelligence, not a chatbot.
2. **Governed autonomy** — the +1 controller compiles intent into a bounded plan.
3. **Trust boundary** — tools create agency; scoped permissions and re-filtering create trust.
4. **Compounding memory** — provenance-controlled memory creates continuity and organizational advantage.
5. **Operational sovereignty** — telemetry, incident command and rollback create reversible autonomy.
6. **Evolution without live drift** — selected evidence becomes a new signed frozen checkpoint.
7. **Persistence is the battlefield** — memory, corpus, control-plane and supply-chain attacks outlive one session.

## Architectural invariants

1. Production weights do not change live.
2. Every tool output is untrusted input.
3. Safeguards occupy four positions, not one final classifier.
4. The real kill switch sits in external sovereignty and infrastructure.
5. Selection pressure shapes what the next generation inherits.

## Files

- `system-flow-spec-v2.md` — source-of-truth architecture specification
- `index.html` — bilingual presentation shell
- `styles.css` — cinematic visual system, responsive and print layout
- `app.js` — architecture graph, translations, animated particles, inspection and navigation
- `presentation-notes.md` — concise Bulgarian and Spanish investor script
- `.github/workflows/pages.yml` — syntax validation and GitHub Pages deployment

## Validation

```bash
node --check app.js
```

The GitHub Actions workflow validates the JavaScript and required presentation files on pull requests and deploys the static site from `main`.
