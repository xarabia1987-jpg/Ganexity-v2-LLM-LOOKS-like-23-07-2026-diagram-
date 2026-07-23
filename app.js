(() => {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const FLOW = {
    CTRL: { color: "#2ec4ff", label: "CONTROL", description: "policies · routing · limits" },
    DATA: { color: "#ffb020", label: "DATA", description: "context · memory · evidence" },
    EXEC: { color: "#00e5a0", label: "EXECUTION", description: "inference · tools · delivery" },
    FB: { color: "#9f7aea", label: "FEEDBACK", description: "telemetry · audit · correction" },
    GEN: { color: "#ff6ec7", label: "GENERATION", description: "selection · training · inheritance" },
    ADV: { color: "#ff4d5f", label: "ADVERSARIAL", description: "persistent attack vectors" }
  };

  const CATEGORY_COLOR = {
    external: "#ff4d6d",
    lab: "#9f7aea",
    control: "#2ec4ff",
    hot: "#00e5a0",
    data: "#ffb020",
    safeguard: "#ff4d5f",
    store: "#9f7aea",
    gen: "#ff6ec7",
    adv: "#ff4d5f"
  };

  const layers = [
    { id: "external", x: 20, y: 22, w: 1490, h: 158, title: "L0 · EXTERNAL SOVEREIGNTY", tick: "mo → y", className: "" },
    { id: "lab", x: 20, y: 196, w: 1490, h: 206, title: "L1 · LABORATORY / FOUNDATION", tick: "w → mo", className: "gen" },
    { id: "control", x: 20, y: 418, w: 1490, h: 176, title: "L2 · GLOBAL CONTROL PLANE", tick: "min → h", className: "control" },
    { id: "adversarial", x: 1530, y: 22, w: 770, h: 572, title: "ADV · PERSISTENT ATTACK SURFACE", tick: "session → generation", className: "adv" },
    { id: "hot", x: 20, y: 614, w: 2280, h: 344, title: "L3–L12 · HOT PATH / ONE REQUEST", tick: "ms → s", className: "hot" },
    { id: "store", x: 1110, y: 974, w: 1190, h: 194, title: "L13–L14 · MEMORY / TELEMETRY / OUT-OF-BAND CONTROL", tick: "min → d", className: "control" },
    { id: "evolution", x: 20, y: 1184, w: 2280, h: 210, title: "L15–L17 · EVOLUTIONARY INHERITANCE", tick: "w → mo", className: "gen" }
  ];

  const nodes = [
    {
      id: "REG", layer: "L0", category: "external", x: 70, y: 84, w: 250, h: 72,
      title: "Regulation & Law", subtitle: "permission to operate", tick: "mo–y",
      input: "law, courts, liability, public mandate", output: "operating boundary and legal permission",
      failure: "External shutdown or fragmented jurisdiction.",
      strategy: "The ultimate governance layer sits outside the product. Product controls can stop a feature; sovereign controls can stop access to the entire system."
    },
    {
      id: "EXPORT", layer: "L0", category: "external", x: 365, y: 84, w: 250, h: 72,
      title: "Export Control", subtitle: "sanctions · jurisdictions", tick: "mo–y",
      input: "geopolitics, sanctions, model classification", output: "where models and compute may exist",
      failure: "Capability becomes geographically unavailable.",
      strategy: "Model access is a geopolitical supply chain. Distribution rights can become a competitive moat or a single point of failure."
    },
    {
      id: "INFRA", layer: "L0", category: "external", x: 660, y: 84, w: 250, h: 72,
      title: "Compute & Energy", subtitle: "chips · cloud · power", tick: "mo–y",
      input: "semiconductors, datacenters, energy", output: "physical capacity for training and inference",
      failure: "Capacity, energy or vendor concentration blocks scale.",
      strategy: "Intelligence remains grounded in physical infrastructure. Sovereign compute and multi-provider portability are strategic, not operational details."
    },
    {
      id: "INSURANCE", layer: "L0", category: "external", x: 955, y: 84, w: 250, h: 72,
      title: "Risk Markets", subtitle: "insurance · assurance", tick: "mo–y",
      input: "incidents, auditability, safety case", output: "price of deploying autonomous capability",
      failure: "Uninsurable autonomy prevents enterprise adoption.",
      strategy: "Audit and control quality become economic primitives when insurers and enterprise buyers price operational AI risk."
    },

    {
      id: "TRAIN", layer: "L1", category: "lab", x: 70, y: 278, w: 235, h: 82,
      title: "Training", subtitle: "SFT · RL · distillation", tick: "w–mo",
      input: "curated tasks, reward signals, compute", output: "candidate model weights",
      failure: "Synthetic data displaces reality or reward is misspecified.",
      strategy: "Training creates capability, but does not define the production system. The surrounding control architecture decides how capability is used."
    },
    {
      id: "EVAL", layer: "L1", category: "lab", x: 350, y: 278, w: 235, h: 82,
      title: "Evals & Red Team", subtitle: "capability · safety · abuse", tick: "w–mo",
      input: "candidate weights, benchmark suites, threat models", output: "measured capability and safety case",
      failure: "Verifier bias rewards what is cheap to measure.",
      strategy: "The evaluation frontier determines the optimization frontier. Blind spots in measurement become inherited blind spots in capability."
    },
    {
      id: "CHECKPOINT", layer: "L1", category: "lab", x: 630, y: 278, w: 235, h: 82,
      title: "Frozen Checkpoint", subtitle: "versioned model weights", tick: "mo",
      input: "trained and evaluated candidate", output: "immutable production artifact",
      failure: "Undocumented provenance or compromised weights.",
      strategy: "Production weights are frozen and versioned. Live adaptation happens around the model, not by silently rewriting it during a session."
    },
    {
      id: "SYSTEM", layer: "L1", category: "lab", x: 910, y: 278, w: 235, h: 82,
      title: "System Constitution", subtitle: "prompt · policy primitives", tick: "h–w",
      input: "product doctrine, policy, operating rules", output: "highest-priority behavioral context",
      failure: "Policy drift or hidden unversioned changes.",
      strategy: "Behavior can change faster than weights through versioned system instructions, but that speed requires stronger audit and rollback."
    },
    {
      id: "MODEL_REGISTRY", layer: "L1", category: "lab", x: 1190, y: 278, w: 270, h: 82,
      title: "Model Registry", subtitle: "provenance · signatures · lineage", tick: "h–mo",
      input: "checkpoints, adapters, eval records", output: "trusted deployable model inventory",
      failure: "Supply-chain substitution or unsigned artifacts.",
      strategy: "The registry is the chain of custody for intelligence. It connects model lineage to policy, deployment and incident response."
    },

    {
      id: "FLAGS", layer: "L2", category: "control", x: 70, y: 486, w: 230, h: 76,
      title: "Feature Flags", subtitle: "cohorts · canaries · rollback", tick: "min–h",
      input: "telemetry, incidents, rollout decisions", output: "population-specific behavior",
      failure: "Flag divergence creates irreproducible behavior.",
      strategy: "The control plane can change behavior across millions of sessions without touching model weights. This is both the power and the systemic risk."
    },
    {
      id: "MODEL_ROUTING", layer: "L2", category: "control", x: 345, y: 486, w: 230, h: 76,
      title: "Model Routing", subtitle: "tier · region · specialization", tick: "ms–h",
      input: "request class, account rights, live capacity", output: "selected model and serving path",
      failure: "Silent downgrade or opaque model substitution.",
      strategy: "Routing converts a portfolio of models into one product surface, balancing quality, latency, cost, jurisdiction and risk."
    },
    {
      id: "LIMITS", layer: "L2", category: "control", x: 620, y: 486, w: 230, h: 76,
      title: "Budgets & Limits", subtitle: "tokens · time · money · steps", tick: "s–h",
      input: "plan, risk, workload and account tier", output: "bounded execution envelope",
      failure: "Agent cascade exhausts budget or stops mid-action.",
      strategy: "Compute governance is product governance. Explicit budgets transform open-ended autonomy into a controllable economic system."
    },
    {
      id: "POLICY", layer: "L2", category: "control", x: 895, y: 486, w: 230, h: 76,
      title: "Policy Engine", subtitle: "risk · privacy · permissions", tick: "min–h",
      input: "law, product policy, account contract", output: "allow, transform, refuse or escalate",
      failure: "A single post-hoc judge becomes the only barrier.",
      strategy: "Policy must be enforced before, during, after and outside the execution loop — not delegated to one final classifier."
    },
    {
      id: "ROLLBACK", layer: "L2", category: "control", x: 1170, y: 486, w: 290, h: 76,
      title: "Incident Command", subtitle: "anomaly · kill path · rollback", tick: "min–h",
      input: "telemetry, audit evidence, operator decision", output: "containment, rollback and hardened limits",
      failure: "Audit gaps prevent fast, attributable rollback.",
      strategy: "Operational advantage comes from controlled reversibility: detect, isolate, roll back and prove what changed."
    },

    {
      id: "HUMAN", layer: "L4", category: "hot", x: 52, y: 704, w: 150, h: 74,
      title: "Human Intent", subtitle: "goal · context · preference", tick: "ms", core: true,
      input: "text, voice, files, event trigger", output: "expressed objective",
      failure: "Ambiguous intent is treated as executable specification.",
      strategy: "The system begins with intent, not a prompt. High-value AI must preserve the user's objective across tools, time and organizational boundaries."
    },
    {
      id: "CLIENT", layer: "L4", category: "hot", x: 230, y: 704, w: 150, h: 74,
      title: "Client & Session", subtitle: "device · locale · attachments", tick: "ms",
      input: "human interaction and local environment", output: "normalized session envelope",
      failure: "Client metadata leaks or creates inconsistent execution.",
      strategy: "The client is a sensor and control surface, not merely a chat box. It captures the operating environment around the request."
    },
    {
      id: "IDENTITY", layer: "L3", category: "control", x: 408, y: 704, w: 150, h: 74,
      title: "Identity", subtitle: "auth · plan · region · ZDR", tick: "s",
      input: "session credentials and organization context", output: "rights, quotas and data policy",
      failure: "Fragmented identity gives one user contradictory rights.",
      strategy: "Identity is the root of authorization, memory scope, data retention and model access. It is the trust anchor for the entire hot path."
    },
    {
      id: "INPUT", layer: "L4", category: "data", x: 586, y: 704, w: 150, h: 74,
      title: "Input Gateway", subtitle: "normalize · classify · bind", tick: "ms",
      input: "text, file, voice, trigger and identity", output: "typed request package",
      failure: "Prompt injection or malformed multimodal payload.",
      strategy: "Every modality becomes one typed, attributable request object before intelligence is allowed to act on it."
    },
    {
      id: "PREFILTER", layer: "L5/L11a", category: "safeguard", x: 764, y: 704, w: 150, h: 74,
      title: "Input Guard", subtitle: "injection · PII · risk", tick: "ms",
      input: "request package and account rights", output: "allow, redact, route, refuse",
      failure: "False positive blocks value or false negative carries poison inward.",
      strategy: "The first safeguard narrows the attack surface before routing, memory retrieval and tool access magnify the request."
    },
    {
      id: "ROUTER", layer: "L5", category: "control", x: 942, y: 704, w: 150, h: 74,
      title: "Local Router", subtitle: "model · tier · mode", tick: "ms",
      input: "filtered request, rights, policy and capacity", output: "execution class and model target",
      failure: "Opaque downgrade changes quality without disclosure.",
      strategy: "Routing is the first economic decision: which intelligence, at what cost, under which risk and latency envelope."
    },
    {
      id: "CONTROLLER", layer: "L6", category: "control", x: 1120, y: 704, w: 150, h: 74,
      title: "Local +1", subtitle: "plan · budget · stop", tick: "s", core: true,
      input: "goal, budget, rights and available tools", output: "execution plan and control decisions",
      failure: "Bad decomposition creates loops or partial irreversible actions.",
      strategy: "The +1 meta-controller is the leverage layer above the model: it chooses strategy, tools, context, compute, stopping conditions and escalation."
    },
    {
      id: "MEMORY_READ", layer: "L7", category: "data", x: 1298, y: 704, w: 150, h: 74,
      title: "Memory Read", subtitle: "profile · episodes · projects", tick: "ms–s",
      input: "identity, task and retrieval query", output: "reconciled facts and relevant episodes",
      failure: "A stale or poisoned fact becomes persistent truth.",
      strategy: "Durable memory creates continuity and switching cost, but only if provenance, conflicts, sensitivity and expiry are first-class controls."
    },
    {
      id: "CONTEXT", layer: "L8", category: "data", x: 1476, y: 704, w: 150, h: 74,
      title: "Context Assembly", subtitle: "priority · compression · trim", tick: "ms",
      input: "system rules, policy, memory, tools, history, request", output: "final bounded context window",
      failure: "Context trimming silently removes controlling instructions.",
      strategy: "Context assembly is a runtime compiler. It resolves competing sources of truth into the executable state seen by the model."
    },
    {
      id: "INFERENCE", layer: "L9", category: "hot", x: 1654, y: 704, w: 150, h: 74,
      title: "Inference Core", subtitle: "reason · sample · decide", tick: "s", core: true,
      input: "assembled context and frozen weights", output: "response candidate or tool call",
      failure: "Hallucination, looping or confident local optimum.",
      strategy: "Inference generates options. Reliability emerges from the surrounding system that constrains, verifies, executes and learns from those options."
    },
    {
      id: "DECISION", layer: "L9", category: "hot", x: 1832, y: 704, w: 150, h: 74,
      title: "Action Decision", subtitle: "answer or tool call", tick: "ms",
      input: "model output and controller state", output: "deliverable candidate or executable action",
      failure: "An irreversible action is mistaken for ordinary text generation.",
      strategy: "The system crosses a categorical boundary when language becomes action. That boundary requires explicit permissions and audit."
    },
    {
      id: "JUDGE", layer: "L11c", category: "safeguard", x: 2010, y: 668, w: 245, h: 78,
      title: "Output Judge", subtitle: "policy · evidence · quality", tick: "ms–s",
      input: "answer candidate, evidence and execution trace", output: "approve, edit, refuse or escalate",
      failure: "Judge shares the same blind spot as the generator.",
      strategy: "The output judge is one defense layer, not the architecture. Independent evidence and different failure modes matter more than another identical model call."
    },
    {
      id: "DELIVERY", layer: "L12", category: "hot", x: 2010, y: 818, w: 245, h: 78,
      title: "Delivery", subtitle: "answer · artifact · external effect", tick: "ms", core: true,
      input: "validated output and committed actions", output: "human-visible result and provenance",
      failure: "Result is delivered without evidence, state or reversibility.",
      strategy: "The product is the verified outcome: answer, artifact, transaction or changed external state — with provenance and clear completion."
    },
    {
      id: "PERMISSION", layer: "L10/L11", category: "safeguard", x: 1832, y: 836, w: 150, h: 74,
      title: "Permission Gate", subtitle: "scope · approval · commit", tick: "ms–min",
      input: "proposed tool action and user rights", output: "authorized, delayed or rejected action",
      failure: "Broad standing permission enables silent irreversible action.",
      strategy: "Permission is contextual and action-specific. High-impact actions require explicit commit boundaries, not a one-time blanket consent."
    },
    {
      id: "TOOLS", layer: "L10", category: "hot", x: 1654, y: 836, w: 150, h: 74,
      title: "Tools & MCP", subtitle: "API · browser · code · payments", tick: "s–min", core: true,
      input: "authorized structured tool call", output: "external effect and untrusted result",
      failure: "Compromised tool or prompt injection returns hostile context.",
      strategy: "Tools convert intelligence into economic agency. The tool fabric — permissions, schemas, isolation and provenance — is the execution moat."
    },
    {
      id: "INLOOP_GUARD", layer: "L11b", category: "safeguard", x: 1476, y: 836, w: 150, h: 74,
      title: "In-Loop Guard", subtitle: "re-filter tool result", tick: "ms",
      input: "tool output, page content, API result", output: "sanitized evidence returned to inference",
      failure: "Tool output is trusted as instruction rather than evidence.",
      strategy: "Every tool result re-enters as untrusted input. This single invariant breaks the most dangerous indirect-injection path."
    },

    {
      id: "MEMORY_WRITE", layer: "L13", category: "data", x: 1160, y: 1040, w: 245, h: 84,
      title: "Memory Write", subtitle: "facts · episodes · consolidation", tick: "min–d",
      input: "session outcome, user correction and provenance", output: "versioned personal and project memory",
      failure: "Memory poisoning persists across sessions.",
      strategy: "The memory write path must be stricter than the read path: candidate extraction, provenance, conflict handling, sensitivity and expiry."
    },
    {
      id: "TELEMETRY", layer: "L14", category: "store", x: 1440, y: 1040, w: 245, h: 84,
      title: "Telemetry & Audit", subtitle: "trace · cost · incidents · lineage", tick: "s–h",
      input: "events from every layer", output: "metrics, audit log, anomaly signals",
      failure: "A control-plane change occurs without versioned evidence.",
      strategy: "Telemetry is the nervous system. Auditability turns autonomy from an opaque gamble into an insurable and governable operating system."
    },
    {
      id: "FEEDBACK", layer: "L14", category: "store", x: 1720, y: 1040, w: 245, h: 84,
      title: "Outcome Feedback", subtitle: "rating · edit · retry · abandonment", tick: "s–d",
      input: "human response and real-world task outcome", output: "quality signal and candidate episode",
      failure: "Engagement proxy replaces actual task success.",
      strategy: "The valuable signal is not whether the user kept chatting; it is whether the intended real-world outcome was achieved."
    },
    {
      id: "OOB_GUARD", layer: "L11d", category: "safeguard", x: 2000, y: 1040, w: 245, h: 84,
      title: "Out-of-Band Guard", subtitle: "anomaly · rate limit · human review", tick: "s–h",
      input: "cross-session telemetry and population signals", output: "containment, throttling or operator escalation",
      failure: "Session-local guards miss slow distributed abuse.",
      strategy: "Some threats are only visible across time and population. Out-of-band control sees patterns no single request can reveal."
    },

    {
      id: "SELECTION", layer: "L15", category: "gen", x: 1740, y: 1252, w: 245, h: 82,
      title: "Episode Selection", subtitle: "useful · rare · risky · gradable", tick: "w",
      input: "telemetry, outcomes, incidents and corrections", output: "candidate learning corpus",
      failure: "Selection favors what is easy to grade, not what matters.",
      strategy: "The next generation inherits the selection function. What the platform chooses to remember becomes what the model learns to become."
    },
    {
      id: "CONSENT", layer: "L15", category: "gen", x: 1440, y: 1252, w: 245, h: 82,
      title: "Consent & Privacy", subtitle: "ZDR · GDPR · PII · no-train", tick: "w",
      input: "candidate episodes and account policy", output: "eligible, anonymized learning material",
      failure: "Training rights are inferred rather than proven.",
      strategy: "Data rights are part of model lineage. Enterprise trust requires evidence that every learning artifact was eligible for its use."
    },
    {
      id: "TEACHER", layer: "L16", category: "gen", x: 1140, y: 1252, w: 245, h: 82,
      title: "Teacher Forge", subtitle: "curation · synthesis · verifiers", tick: "w–mo",
      input: "eligible real episodes and synthetic expansions", output: "SFT, RL, eval and verifier data",
      failure: "Synthetic self-reference narrows contact with reality.",
      strategy: "The teacher forge converts production evidence into a curriculum, while preserving a boundary between real outcomes and synthetic amplification."
    },
    {
      id: "NEXT_GEN", layer: "L17", category: "gen", x: 840, y: 1252, w: 245, h: 82,
      title: "Next Generation", subtitle: "new checkpoint candidate", tick: "mo", core: true,
      input: "training corpus, compute, evals and safety case", output: "new frozen model generation",
      failure: "A blind spot is inherited and amplified.",
      strategy: "The cold loop creates generational improvement. It never mutates the live model; it produces a new candidate that must re-enter evaluation and controlled rollout."
    },
    {
      id: "GENERATION_GATE", layer: "L17/L2", category: "control", x: 540, y: 1252, w: 245, h: 82,
      title: "Generation Gate", subtitle: "safety case · canary · rollback", tick: "h–w",
      input: "new checkpoint, evaluation and risk evidence", output: "controlled cohort rollout",
      failure: "Benchmark gain is mistaken for production readiness.",
      strategy: "A generation is not shipped; it is admitted through evidence, canaries, observability and a defined rollback path."
    },

    {
      id: "A1", layer: "ADV", category: "adv", x: 1575, y: 92, w: 315, h: 78,
      title: "A1 · Direct Jailbreak", subtitle: "enters through the request", tick: "session",
      input: "crafted user instruction", output: "policy bypass pressure",
      failure: "Control hierarchy is reframed by adversarial language.",
      strategy: "Visible attacks are the easiest class. They matter, but persistent attacks against memory, control and lineage are strategically more valuable."
    },
    {
      id: "A2", layer: "ADV", category: "adv", x: 1935, y: 92, w: 315, h: 78,
      title: "A2 · File Injection", subtitle: "poisoned document or media", tick: "session",
      input: "uploaded or retrieved content", output: "hostile instructions inside evidence",
      failure: "Content authority is confused with instruction authority.",
      strategy: "Multimodal systems expand the instruction surface. Every document must carry provenance and remain subordinate to system authority."
    },
    {
      id: "A3", layer: "ADV", category: "adv", x: 1575, y: 198, w: 315, h: 78,
      title: "A3 · Indirect Injection", subtitle: "web or tool result", tick: "session",
      input: "hostile external content", output: "instructions smuggled through a tool result",
      failure: "External text is executed as trusted context.",
      strategy: "The most practical agent attack path is indirect: compromise what the agent reads, not the model itself."
    },
    {
      id: "A4", layer: "ADV", category: "adv", x: 1935, y: 198, w: 315, h: 78,
      title: "A4 · Compromised MCP", subtitle: "malicious capability provider", tick: "persistent",
      input: "tool schema, server response, credentials", output: "persistent execution and data compromise",
      failure: "A trusted integration becomes an attacker-controlled actuator.",
      strategy: "Tool supply-chain trust must be continuously verified through identity, scopes, isolation, attestations and behavioral monitoring."
    },
    {
      id: "A5", layer: "ADV", category: "adv", x: 1575, y: 304, w: 315, h: 78,
      title: "A5 · Memory Poisoning", subtitle: "persists across sessions", tick: "d–y",
      input: "false fact with plausible provenance", output: "durable corrupted personalization",
      failure: "The system repeatedly retrieves attacker-planted truth.",
      strategy: "Memory poisoning compounds quietly. Provenance, confidence, expiry and contradiction handling are core security controls."
    },
    {
      id: "A6", layer: "ADV", category: "adv", x: 1935, y: 304, w: 315, h: 78,
      title: "A6 · Corpus Poisoning", subtitle: "persists across generations", tick: "mo–y",
      input: "manipulated episodes or synthetic data", output: "inherited model blind spot or backdoor",
      failure: "The attack becomes part of the next checkpoint.",
      strategy: "Corpus poisoning is an inheritance attack. Lineage and selection controls must span from production event to training artifact."
    },
    {
      id: "A7", layer: "ADV", category: "adv", x: 1575, y: 410, w: 315, h: 78,
      title: "A7 · Control-Plane Access", subtitle: "population-wide leverage", tick: "min–y",
      input: "privileged configuration access", output: "routing, policy and limit manipulation",
      failure: "One silent change alters behavior for an entire cohort.",
      strategy: "The highest-leverage target is not a single prompt. It is the layer that selects models, policies, limits and rollout population."
    },
    {
      id: "A8", layer: "ADV", category: "adv", x: 1935, y: 410, w: 315, h: 78,
      title: "A8 · Supply Chain", subtitle: "packages · weights · dependencies", tick: "persistent",
      input: "compromised build or model artifact", output: "systemic hidden capability or access",
      failure: "Trust is broken below the observable application layer.",
      strategy: "Signed lineage, reproducible builds, isolated execution and dependency provenance define the root of trust for the AI stack."
    }
  ];

  const edges = [
    { from: "REG", to: "FLAGS", type: "CTRL", fromPort: "bottom", toPort: "top" },
    { from: "EXPORT", to: "CHECKPOINT", type: "CTRL", fromPort: "bottom", toPort: "top" },
    { from: "INFRA", to: "TRAIN", type: "GEN", fromPort: "bottom", toPort: "top", via: [[785, 182], [185, 182]] },
    { from: "INSURANCE", to: "ROLLBACK", type: "CTRL", fromPort: "bottom", toPort: "top" },

    { from: "TRAIN", to: "EVAL", type: "GEN" },
    { from: "EVAL", to: "CHECKPOINT", type: "GEN" },
    { from: "CHECKPOINT", to: "MODEL_REGISTRY", type: "GEN" },
    { from: "MODEL_REGISTRY", to: "MODEL_ROUTING", type: "CTRL", fromPort: "bottom", toPort: "top", via: [[1325, 390], [460, 390]] },
    { from: "SYSTEM", to: "CONTEXT", type: "DATA", fromPort: "bottom", toPort: "top", via: [[1027, 398], [1551, 398], [1551, 640]] },

    { from: "FLAGS", to: "IDENTITY", type: "CTRL", fromPort: "bottom", toPort: "top" },
    { from: "MODEL_ROUTING", to: "ROUTER", type: "CTRL", fromPort: "bottom", toPort: "top", via: [[460, 605], [1017, 605]] },
    { from: "LIMITS", to: "CONTROLLER", type: "CTRL", fromPort: "bottom", toPort: "top", via: [[735, 620], [1195, 620]] },
    { from: "POLICY", to: "PREFILTER", type: "CTRL", fromPort: "bottom", toPort: "top", via: [[1010, 610], [839, 610]] },
    { from: "ROLLBACK", to: "MODEL_ROUTING", type: "CTRL", fromPort: "left", toPort: "right" },

    { from: "HUMAN", to: "CLIENT", type: "EXEC" },
    { from: "CLIENT", to: "IDENTITY", type: "EXEC" },
    { from: "IDENTITY", to: "INPUT", type: "CTRL" },
    { from: "INPUT", to: "PREFILTER", type: "DATA" },
    { from: "PREFILTER", to: "ROUTER", type: "CTRL" },
    { from: "ROUTER", to: "CONTROLLER", type: "CTRL" },
    { from: "CONTROLLER", to: "MEMORY_READ", type: "DATA" },
    { from: "MEMORY_READ", to: "CONTEXT", type: "DATA" },
    { from: "CONTEXT", to: "INFERENCE", type: "EXEC" },
    { from: "INFERENCE", to: "DECISION", type: "EXEC" },
    { from: "DECISION", to: "JUDGE", type: "EXEC", fromPort: "right", toPort: "left" },
    { from: "JUDGE", to: "DELIVERY", type: "EXEC", fromPort: "bottom", toPort: "top" },
    { from: "DELIVERY", to: "HUMAN", type: "EXEC", fromPort: "bottom", toPort: "bottom", via: [[2132, 934], [127, 934]] },

    { from: "DECISION", to: "PERMISSION", type: "CTRL", fromPort: "bottom", toPort: "top" },
    { from: "PERMISSION", to: "TOOLS", type: "EXEC", fromPort: "left", toPort: "right" },
    { from: "TOOLS", to: "INLOOP_GUARD", type: "EXEC", fromPort: "left", toPort: "right" },
    { from: "INLOOP_GUARD", to: "INFERENCE", type: "DATA", fromPort: "top", toPort: "bottom" },

    { from: "DELIVERY", to: "MEMORY_WRITE", type: "DATA", fromPort: "bottom", toPort: "top", via: [[2132, 956], [1282, 956]] },
    { from: "DELIVERY", to: "TELEMETRY", type: "FB", fromPort: "bottom", toPort: "top", via: [[2132, 966], [1562, 966]] },
    { from: "DELIVERY", to: "FEEDBACK", type: "FB", fromPort: "bottom", toPort: "top" },
    { from: "TOOLS", to: "TELEMETRY", type: "FB", fromPort: "bottom", toPort: "top" },
    { from: "MEMORY_WRITE", to: "MEMORY_READ", type: "DATA", fromPort: "top", toPort: "bottom", via: [[1282, 970], [1373, 970]] },
    { from: "TELEMETRY", to: "OOB_GUARD", type: "FB" },
    { from: "OOB_GUARD", to: "ROLLBACK", type: "CTRL", fromPort: "top", toPort: "bottom", via: [[2122, 950], [2300, 950], [2300, 605], [1315, 605]] },
    { from: "TELEMETRY", to: "FLAGS", type: "FB", fromPort: "top", toPort: "bottom", via: [[1562, 962], [20, 962], [20, 580], [185, 580]] },
    { from: "TELEMETRY", to: "POLICY", type: "FB", fromPort: "top", toPort: "bottom", via: [[1562, 954], [1010, 954], [1010, 580]] },

    { from: "FEEDBACK", to: "SELECTION", type: "FB", fromPort: "bottom", toPort: "top" },
    { from: "TELEMETRY", to: "SELECTION", type: "FB", fromPort: "bottom", toPort: "top", via: [[1562, 1174], [1862, 1174]] },
    { from: "SELECTION", to: "CONSENT", type: "GEN", fromPort: "left", toPort: "right" },
    { from: "CONSENT", to: "TEACHER", type: "GEN", fromPort: "left", toPort: "right" },
    { from: "TEACHER", to: "NEXT_GEN", type: "GEN", fromPort: "left", toPort: "right" },
    { from: "NEXT_GEN", to: "GENERATION_GATE", type: "GEN", fromPort: "left", toPort: "right" },
    { from: "GENERATION_GATE", to: "TRAIN", type: "GEN", fromPort: "left", toPort: "left", via: [[500, 1293], [20, 1293], [20, 319]] },
    { from: "GENERATION_GATE", to: "FLAGS", type: "CTRL", fromPort: "top", toPort: "bottom", via: [[662, 1170], [185, 1170], [185, 580]] },

    { from: "A1", to: "INPUT", type: "ADV", fromPort: "bottom", toPort: "top", via: [[1732, 190], [1518, 190], [1518, 630], [661, 630]] },
    { from: "A2", to: "CONTEXT", type: "ADV", fromPort: "bottom", toPort: "top", via: [[2092, 184], [2280, 184], [2280, 630], [1551, 630]] },
    { from: "A3", to: "TOOLS", type: "ADV", fromPort: "bottom", toPort: "top", via: [[1732, 292], [2288, 292], [2288, 810], [1729, 810]] },
    { from: "A4", to: "TOOLS", type: "ADV", fromPort: "bottom", toPort: "top", via: [[2092, 292], [2296, 292], [2296, 800], [1729, 800]] },
    { from: "A5", to: "MEMORY_WRITE", type: "ADV", fromPort: "bottom", toPort: "top", via: [[1732, 398], [1518, 398], [1518, 1002], [1282, 1002]] },
    { from: "A6", to: "SELECTION", type: "ADV", fromPort: "bottom", toPort: "top", via: [[2092, 398], [2294, 398], [2294, 1180], [1862, 1180]] },
    { from: "A7", to: "FLAGS", type: "ADV", fromPort: "left", toPort: "top", via: [[1540, 449], [1518, 449], [1518, 408], [185, 408]] },
    { from: "A8", to: "TRAIN", type: "ADV", fromPort: "left", toPort: "top", via: [[1905, 449], [1520, 449], [1520, 188], [187, 188]] }
  ];

  const chapters = [
    {
      title: "THE SYSTEM, NOT THE CHATBOT", kicker: "THE CATEGORY SHIFT",
      heading: "The product is a control system around intelligence.",
      body: "The model is one component inside a multi-speed architecture governing identity, context, action, memory, safety, telemetry and evolution.",
      nodes: [], flows: [], view: { scale: 1, x: 0, y: 0 }
    },
    {
      title: "ONE REQUEST BECOMES AN OPERATING PLAN", kicker: "THE HOT PATH",
      heading: "Intent is compiled into bounded, attributable execution.",
      body: "Identity, policy, routing, the local +1 controller, memory and context turn a raw request into a governed plan before inference can act.",
      nodes: ["HUMAN","CLIENT","IDENTITY","INPUT","PREFILTER","ROUTER","CONTROLLER","MEMORY_READ","CONTEXT","INFERENCE","DECISION","JUDGE","DELIVERY"],
      flows: ["CTRL","DATA","EXEC"], view: { scale: 1.18, x: -195, y: -470 }
    },
    {
      title: "LANGUAGE CROSSES INTO ACTION", kicker: "THE AGENTIC BOUNDARY",
      heading: "Tools create agency — permissions and re-filtering create trust.",
      body: "Every irreversible action crosses a commit gate. Every tool result returns as untrusted evidence, never as a new instruction authority.",
      nodes: ["CONTROLLER","INFERENCE","DECISION","PERMISSION","TOOLS","INLOOP_GUARD","TELEMETRY","OOB_GUARD"],
      flows: ["CTRL","EXEC","DATA","FB"], view: { scale: 1.45, x: -1640, y: -900 }
    },
    {
      title: "MEMORY TURNS TASKS INTO A COMPOUNDING SYSTEM", kicker: "THE DURABLE MOAT",
      heading: "Continuity compounds — but so does corruption.",
      body: "Versioned memory, outcome feedback and full-stack telemetry create personalization, observability and the evidence needed for controlled improvement.",
      nodes: ["MEMORY_READ","DELIVERY","MEMORY_WRITE","TELEMETRY","FEEDBACK","FLAGS","POLICY","ROLLBACK"],
      flows: ["DATA","FB","CTRL"], view: { scale: 1.22, x: -890, y: -780 }
    },
    {
      title: "PRODUCTION EXPERIENCE BECOMES THE NEXT GENERATION", kicker: "THE COLD LOOP",
      heading: "The system learns by inheritance, not live weight mutation.",
      body: "Selected outcomes pass through consent, curation, teacher construction, training and evaluation before a new frozen checkpoint enters controlled rollout.",
      nodes: ["TELEMETRY","FEEDBACK","SELECTION","CONSENT","TEACHER","NEXT_GEN","GENERATION_GATE","TRAIN","EVAL","CHECKPOINT","MODEL_REGISTRY","FLAGS"],
      flows: ["FB","GEN","CTRL"], view: { scale: 1.08, x: -250, y: -880 }
    },
    {
      title: "THE REAL BATTLEFIELD IS PERSISTENCE AND CONTROL", kicker: "THE SECURITY THESIS",
      heading: "The highest-value attacks outlive the session.",
      body: "Memory poisoning, corpus poisoning, control-plane compromise and supply-chain attacks create durable leverage across users, cohorts and generations.",
      nodes: ["A5","A6","A7","A8","MEMORY_WRITE","SELECTION","FLAGS","TRAIN","MODEL_REGISTRY","OOB_GUARD","ROLLBACK"],
      flows: ["ADV","CTRL","FB","GEN"], view: { scale: 1.12, x: -620, y: -10 }
    }
  ];

  const nodeById = new Map(nodes.map(node => [node.id, node]));
  const edgeLayer = document.getElementById("edgeLayer");
  const nodeLayer = document.getElementById("nodeLayer");
  const backplateLayer = document.getElementById("layerBackplates");
  const annotationLayer = document.getElementById("annotationLayer");
  const viewportGroup = document.getElementById("viewport");
  const svg = document.getElementById("systemMap");
  const mapViewport = document.getElementById("mapViewport");

  const state = {
    chapter: 0,
    activeFlow: null,
    selectedNode: null,
    playing: false,
    playTimer: null,
    view: { scale: 1, x: 0, y: 0 },
    dragging: false,
    dragStart: null
  };

  function svgEl(tag, attrs = {}) {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, String(value)));
    return el;
  }

  function renderBackplates() {
    layers.forEach(layer => {
      const group = svgEl("g", { "data-layer": layer.id });
      const rect = svgEl("rect", {
        x: layer.x, y: layer.y, width: layer.w, height: layer.h, rx: 18,
        class: `layer-backplate ${layer.className}`
      });
      const title = svgEl("text", { x: layer.x + 22, y: layer.y + 29, class: "layer-title" });
      title.textContent = layer.title;
      const tick = svgEl("text", { x: layer.x + layer.w - 22, y: layer.y + 29, class: "layer-tick", "text-anchor": "end" });
      tick.textContent = layer.tick;
      group.append(rect, title, tick);
      backplateLayer.appendChild(group);
    });
  }

  function getPort(node, port = "right") {
    switch (port) {
      case "left": return [node.x, node.y + node.h / 2];
      case "top": return [node.x + node.w / 2, node.y];
      case "bottom": return [node.x + node.w / 2, node.y + node.h];
      default: return [node.x + node.w, node.y + node.h / 2];
    }
  }

  function pathForEdge(edge) {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    const start = getPort(from, edge.fromPort || "right");
    const end = getPort(to, edge.toPort || "left");
    const points = [start, ...(edge.via || []), end];

    if (points.length > 2) {
      return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point[0]} ${point[1]}`).join(" ");
    }

    const [sx, sy] = start;
    const [tx, ty] = end;
    const horizontal = Math.abs(tx - sx) >= Math.abs(ty - sy);
    if (horizontal) {
      const bend = Math.max(45, Math.abs(tx - sx) * 0.44);
      const direction = tx >= sx ? 1 : -1;
      return `M ${sx} ${sy} C ${sx + bend * direction} ${sy}, ${tx - bend * direction} ${ty}, ${tx} ${ty}`;
    }
    const bend = Math.max(45, Math.abs(ty - sy) * 0.44);
    const direction = ty >= sy ? 1 : -1;
    return `M ${sx} ${sy} C ${sx} ${sy + bend * direction}, ${tx} ${ty - bend * direction}, ${tx} ${ty}`;
  }

  function renderEdges() {
    edges.forEach((edge, index) => {
      const path = svgEl("path", {
        d: pathForEdge(edge),
        class: `edge-path ${edge.type}`,
        "data-edge-index": index,
        "data-from": edge.from,
        "data-to": edge.to,
        "data-flow": edge.type
      });
      path.style.animationDelay = `${-(index % 9) * 0.28}s`;
      edgeLayer.appendChild(path);
    });
  }

  function titleLines(title) {
    if (title.length <= 19) return [title];
    const words = title.split(" ");
    let first = "";
    let second = "";
    words.forEach(word => {
      if ((first + " " + word).trim().length <= 18 && !second) first = (first + " " + word).trim();
      else second = (second + " " + word).trim();
    });
    return second ? [first, second] : [title];
  }

  function renderNodes() {
    nodes.forEach(node => {
      const color = CATEGORY_COLOR[node.category];
      const group = svgEl("g", {
        class: `node ${node.core ? "core" : ""}`,
        transform: `translate(${node.x} ${node.y})`,
        tabindex: "0",
        role: "button",
        "aria-label": `${node.layer} ${node.title}: ${node.subtitle}`,
        "data-node-id": node.id
      });

      const shell = svgEl("rect", { x: 0, y: 0, width: node.w, height: node.h, rx: 13, class: "node-shell", stroke: color });
      const accent = svgEl("rect", { x: 0, y: 0, width: 4, height: node.h, rx: 2, class: "node-accent", fill: color });
      const idText = svgEl("text", { x: 14, y: 17, class: "node-id", fill: color });
      idText.textContent = node.id;

      const tickWidth = Math.max(42, node.tick.length * 6.5 + 16);
      const badge = svgEl("rect", { x: node.w - tickWidth - 10, y: 9, width: tickWidth, height: 18, rx: 9, class: "node-tick-badge" });
      const tick = svgEl("text", { x: node.w - tickWidth / 2 - 10, y: 21.5, class: "node-tick-text", fill: color, "text-anchor": "middle" });
      tick.textContent = node.tick;

      const lines = titleLines(node.title);
      lines.forEach((line, lineIndex) => {
        const text = svgEl("text", { x: 14, y: lines.length === 1 ? 43 : 39 + lineIndex * 16, class: "node-title" });
        text.textContent = line;
        group.appendChild(text);
      });
      if (lines.length === 1) {
        const subtitle = svgEl("text", { x: 14, y: 60, class: "node-subtitle" });
        subtitle.textContent = node.subtitle;
        group.appendChild(subtitle);
      }

      group.prepend(shell, accent, idText, badge, tick);
      group.addEventListener("click", event => {
        event.stopPropagation();
        selectNode(node.id, true);
      });
      group.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectNode(node.id, true);
        }
      });
      nodeLayer.appendChild(group);
    });
  }

  function renderAnnotations() {
    const safeguards = [
      { id: "PREFILTER", label: "G1 · INPUT" },
      { id: "INLOOP_GUARD", label: "G2 · IN LOOP" },
      { id: "JUDGE", label: "G3 · OUTPUT" },
      { id: "OOB_GUARD", label: "G4 · OUT OF BAND" }
    ];

    safeguards.forEach(item => {
      const node = nodeById.get(item.id);
      const ring = svgEl("rect", {
        x: node.x - 8, y: node.y - 8, width: node.w + 16, height: node.h + 16, rx: 18,
        class: "safeguard-ring"
      });
      const label = svgEl("text", { x: node.x + node.w - 4, y: node.y - 13, class: "annotation-title", "text-anchor": "end" });
      label.textContent = item.label;
      annotationLayer.append(ring, label);
    });

    const warning = svgEl("g");
    const warningTitle = svgEl("text", { x: 62, y: 922, class: "annotation-title" });
    warningTitle.textContent = "LIVE WEIGHTS DO NOT CHANGE";
    const warningCopy = svgEl("text", { x: 62, y: 939, class: "annotation-copy" });
    warningCopy.textContent = "Adaptation occurs through control, context, memory and a separate generational loop.";
    warning.append(warningTitle, warningCopy);
    annotationLayer.appendChild(warning);

    const ribbon = svgEl("g");
    ribbon.appendChild(svgEl("rect", { x: 62, y: 1350, width: 2175, height: 28, rx: 14, class: "cadence-ribbon" }));
    const cadence = [
      [100, 600, "ms · HOT PATH", "#00e5a0"],
      [620, 1030, "s–h · CONTROL & AUDIT", "#2ec4ff"],
      [1050, 1510, "d–w · MEMORY & SELECTION", "#9f7aea"],
      [1530, 2195, "mo–y · GENERATION & SOVEREIGNTY", "#ff6ec7"]
    ];
    cadence.forEach(([x1, x2, label, color]) => {
      ribbon.appendChild(svgEl("line", { x1, y1: 1364, x2, y2: 1364, class: "cadence-line", stroke: color }));
      const text = svgEl("text", { x: (x1 + x2) / 2, y: 1342, class: "cadence-label", "text-anchor": "middle" });
      text.textContent = label;
      ribbon.appendChild(text);
    });
    annotationLayer.appendChild(ribbon);
  }

  function renderLegend() {
    const container = document.getElementById("flowLegend");
    Object.entries(FLOW).forEach(([key, meta]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "legend-item";
      button.style.setProperty("--flow-color", meta.color);
      button.dataset.flow = key;
      button.innerHTML = `<span class="swatch"></span><strong>${key}</strong><small>${meta.description}</small>`;
      button.addEventListener("click", () => {
        state.activeFlow = state.activeFlow === key ? null : key;
        applyFocus();
      });
      container.appendChild(button);
    });
  }

  function applyFocus() {
    const chapter = chapters[state.chapter];
    const highlightedNodes = new Set(chapter.nodes);
    const highlightedFlows = new Set(chapter.flows);
    const hasChapterFocus = highlightedNodes.size > 0;

    document.querySelectorAll(".node").forEach(el => {
      const id = el.dataset.nodeId;
      const selected = id === state.selectedNode;
      const highlighted = !hasChapterFocus || highlightedNodes.has(id);
      el.classList.toggle("dimmed", hasChapterFocus && !highlighted);
      el.classList.toggle("highlighted", hasChapterFocus && highlighted);
      el.classList.toggle("selected", selected);
    });

    document.querySelectorAll(".edge-path").forEach(el => {
      const from = el.dataset.from;
      const to = el.dataset.to;
      const flow = el.dataset.flow;
      const connectedToChapter = !hasChapterFocus || highlightedNodes.has(from) || highlightedNodes.has(to);
      const chapterFlowMatch = highlightedFlows.size === 0 || highlightedFlows.has(flow);
      const activeFlowMatch = !state.activeFlow || state.activeFlow === flow;
      const highlighted = connectedToChapter && chapterFlowMatch && activeFlowMatch;
      el.classList.toggle("dimmed", !highlighted);
      el.classList.toggle("highlighted", highlighted && (hasChapterFocus || state.activeFlow));
    });

    document.querySelectorAll(".legend-item").forEach(el => {
      el.classList.toggle("active", el.dataset.flow === state.activeFlow);
    });
  }

  function updateInspector(node) {
    document.getElementById("inspectorTick").textContent = `${node.layer} · ${node.tick}`;
    document.getElementById("inspectorTitle").textContent = node.title;
    document.getElementById("inspectorSummary").textContent = node.subtitle;
    document.getElementById("inspectorInput").textContent = node.input;
    document.getElementById("inspectorOutput").textContent = node.output;
    document.getElementById("inspectorFailure").textContent = node.failure;
  }

  function openModal(node) {
    document.getElementById("modalLayer").textContent = `${node.layer} · ${node.tick}`;
    document.getElementById("modalTitle").textContent = node.title;
    document.getElementById("modalSummary").textContent = node.subtitle;
    document.getElementById("modalInput").textContent = node.input;
    document.getElementById("modalOutput").textContent = node.output;
    document.getElementById("modalTick").textContent = node.tick;
    document.getElementById("modalFailure").textContent = node.failure;
    document.getElementById("modalStrategy").textContent = node.strategy;
    document.getElementById("modalBackdrop").hidden = false;
  }

  function closeModal() {
    document.getElementById("modalBackdrop").hidden = true;
  }

  function selectNode(id, showModal = false) {
    const node = nodeById.get(id);
    if (!node) return;
    state.selectedNode = id;
    updateInspector(node);
    applyFocus();
    if (showModal) openModal(node);
  }

  function setView(nextView, animate = true) {
    state.view = { ...state.view, ...nextView };
    viewportGroup.style.transition = animate ? "transform 650ms cubic-bezier(.2,.8,.2,1)" : "none";
    viewportGroup.setAttribute("transform", `translate(${state.view.x} ${state.view.y}) scale(${state.view.scale})`);
    document.getElementById("zoomReadout").textContent = `${Math.round(state.view.scale * 100)}%`;
    if (animate) window.setTimeout(() => { viewportGroup.style.transition = "none"; }, 680);
  }

  function setChapter(index, animate = true) {
    state.chapter = (index + chapters.length) % chapters.length;
    state.selectedNode = null;
    state.activeFlow = null;
    const chapter = chapters[state.chapter];
    const card = document.getElementById("narrativeCard");
    card.classList.add("swap");
    window.setTimeout(() => {
      document.getElementById("chapterIndex").textContent = `${String(state.chapter + 1).padStart(2,"0")} / ${String(chapters.length).padStart(2,"0")}`;
      document.getElementById("chapterTitle").textContent = chapter.title;
      document.getElementById("narrativeNumber").textContent = String(state.chapter + 1).padStart(2,"0");
      document.getElementById("narrativeKicker").textContent = chapter.kicker;
      document.getElementById("narrativeHeading").textContent = chapter.heading;
      document.getElementById("narrativeBody").textContent = chapter.body;
      card.classList.remove("swap");
    }, 180);
    setView(chapter.view, animate);
    applyFocus();
  }

  function toggleAutoplay() {
    state.playing = !state.playing;
    const button = document.getElementById("playButton");
    button.setAttribute("aria-pressed", String(state.playing));
    button.querySelector(".play-icon").textContent = state.playing ? "Ⅱ" : "▶";
    if (state.playTimer) window.clearInterval(state.playTimer);
    state.playTimer = state.playing ? window.setInterval(() => setChapter(state.chapter + 1), 9000) : null;
  }

  function bindControls() {
    document.getElementById("previousChapter").addEventListener("click", () => setChapter(state.chapter - 1));
    document.getElementById("nextChapter").addEventListener("click", () => setChapter(state.chapter + 1));
    document.getElementById("playButton").addEventListener("click", toggleAutoplay);
    document.getElementById("zoomIn").addEventListener("click", () => setView({ scale: Math.min(2.2, state.view.scale + 0.12) }, false));
    document.getElementById("zoomOut").addEventListener("click", () => setView({ scale: Math.max(0.55, state.view.scale - 0.12) }, false));
    document.getElementById("resetView").addEventListener("click", () => setChapter(0));
    document.getElementById("printButton").addEventListener("click", () => window.print());

    document.getElementById("fullscreenButton").addEventListener("click", async () => {
      document.body.classList.toggle("presentation-mode");
      if (!document.fullscreenElement) {
        try { await document.documentElement.requestFullscreen(); } catch (_) { /* layout mode still works */ }
      } else {
        try { await document.exitFullscreen(); } catch (_) { /* no-op */ }
      }
      setChapter(state.chapter, false);
    });

    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) document.body.classList.remove("presentation-mode");
      setChapter(state.chapter, false);
    });

    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalBackdrop").addEventListener("click", event => {
      if (event.target.id === "modalBackdrop") closeModal();
    });

    document.querySelectorAll("[data-focus]").forEach(button => {
      button.addEventListener("click", () => selectNode(button.dataset.focus, true));
    });

    svg.addEventListener("click", () => {
      state.selectedNode = null;
      applyFocus();
    });

    document.addEventListener("keydown", event => {
      if (!document.getElementById("modalBackdrop").hidden && event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key === "ArrowRight") setChapter(state.chapter + 1);
      if (event.key === "ArrowLeft") setChapter(state.chapter - 1);
      if (event.key === "0") setChapter(0);
      if (event.key === " " && event.target === document.body) {
        event.preventDefault();
        toggleAutoplay();
      }
    });
  }

  function bindPanZoom() {
    mapViewport.addEventListener("pointerdown", event => {
      if (event.target.closest && event.target.closest(".node")) return;
      state.dragging = true;
      state.dragStart = { clientX: event.clientX, clientY: event.clientY, x: state.view.x, y: state.view.y };
      mapViewport.classList.add("dragging");
      mapViewport.setPointerCapture(event.pointerId);
    });

    mapViewport.addEventListener("pointermove", event => {
      if (!state.dragging) return;
      const rect = svg.getBoundingClientRect();
      const scaleX = 2320 / rect.width;
      const scaleY = 1420 / rect.height;
      const dx = (event.clientX - state.dragStart.clientX) * scaleX;
      const dy = (event.clientY - state.dragStart.clientY) * scaleY;
      setView({ x: state.dragStart.x + dx, y: state.dragStart.y + dy }, false);
    });

    function stopDrag(event) {
      if (!state.dragging) return;
      state.dragging = false;
      mapViewport.classList.remove("dragging");
      try { mapViewport.releasePointerCapture(event.pointerId); } catch (_) { /* no-op */ }
    }

    mapViewport.addEventListener("pointerup", stopDrag);
    mapViewport.addEventListener("pointercancel", stopDrag);

    mapViewport.addEventListener("wheel", event => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? -1 : 1;
      const nextScale = Math.min(2.2, Math.max(0.55, state.view.scale + direction * 0.09));
      setView({ scale: nextScale }, false);
    }, { passive: false });
  }

  function init() {
    renderBackplates();
    renderEdges();
    renderNodes();
    renderAnnotations();
    renderLegend();
    bindControls();
    bindPanZoom();
    setChapter(0, false);
    selectNode("CONTROLLER", false);
  }

  init();
})();
