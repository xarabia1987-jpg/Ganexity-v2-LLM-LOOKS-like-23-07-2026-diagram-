# Ganexity // LLM Frontier Map

An investor-grade, interactive architecture map showing the full lifecycle of a governed LLM system — from human intent and inference, through tools, memory and telemetry, to the next frozen model generation.

## Core thesis

**AI is not a model. It is a governed living system.**

The durable platform sits around inference:

- a global **control plane** for routing, policy, limits, cohorts and rollback;
- a local **+1 meta-controller** for planning, tool choice, compute allocation and stopping conditions;
- a typed **context and memory plane** with provenance, conflict handling and expiry;
- an **execution plane** where language becomes external action through tools and MCP;
- safeguards at **four positions**: input, inside the tool loop, output and out-of-band;
- a versioned **telemetry and audit plane**;
- a separate **evolutionary loop** that creates a new frozen checkpoint instead of mutating live weights.

The industry terms are **AI control plane**, **agentic runtime**, **tool fabric**, **memory plane**, **evaluation flywheel**, **model lineage**, **runtime governance** and **defence in depth**.

## What is included

- 18 architecture layers, L0–L17
- 6 visually isolated flow channels: CTRL, DATA, EXEC, FB, GEN and ADV
- complete hot path from intent to verified delivery
- tool/MCP permission and re-filter loop
- memory write/read and telemetry feedback loops
- cold training and generational inheritance loop
- 8 adversarial vectors with persistent-impact analysis
- investor story mode with 6 guided chapters
- node inspector with input, output, cadence, failure mode and strategic meaning
- pan, zoom, fullscreen presentation and print/PDF export

## Run locally

No build step and no external dependencies are required.

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

Opening `index.html` directly also works in modern browsers.

## Presentation controls

| Control | Action |
|---|---|
| `PRESENT` | Fullscreen investor mode |
| `←` / `→` | Previous or next story chapter |
| `AUTO STORY` | Advance every 9 seconds |
| Drag | Pan the architecture canvas |
| Scroll / `+` / `−` | Zoom |
| Click node | Open operating logic and strategic meaning |
| Flow legend | Isolate one edge channel |
| `EXPORT` | Print or save as landscape PDF |
| `Esc` | Close node detail or leave fullscreen |
| `0` | Reset to the full system map |

## Six-part investor narrative

1. **The system, not the chatbot** — intelligence is one component inside a multi-speed governed architecture.
2. **One request becomes an operating plan** — identity, policy, memory and the local +1 compile intent into bounded execution.
3. **Language crosses into action** — tools create agency; scoped permissions and untrusted-result filtering create trust.
4. **Memory becomes the compounding moat** — continuity, outcome feedback and audit create durable product advantage.
5. **Production becomes the next generation** — selected evidence enters a consented, curated and evaluated inheritance loop.
6. **The battlefield is persistence and control** — memory, corpus, control-plane and supply-chain attacks outlive a session.

## Architectural invariants

1. Production weights do not change live.
2. Tool output is always untrusted input.
3. Safeguards occupy four positions, not one post-hoc judge.
4. The real kill switch is external sovereignty and infrastructure.
5. Episode selection pressure shapes the next generation.

## Files

- `system-flow-spec-v2.md` — source architecture specification
- `index.html` — presentation shell and semantic structure
- `styles.css` — dark-neon investor visual system and print layout
- `app.js` — architecture data, rendering engine, story mode, pan/zoom and inspector
- `presentation-notes.md` — concise speaker script for the investor meeting
- `.github/workflows/pages.yml` — static GitHub Pages deployment

## GitHub Pages

The included workflow publishes the repository as a static site on pushes to `main` and also supports manual deployment.

After merging the pull request:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions** if it is not already selected.
3. Open **Actions → Deploy investor LLM frontier map** and run it manually, or push to `main`.

No framework, package installation, API key or runtime backend is required.
