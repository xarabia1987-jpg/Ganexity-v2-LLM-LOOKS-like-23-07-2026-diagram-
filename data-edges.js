(() => {
  "use strict";
  const B = window.GANEXITY_DATA.B;
  window.GANEXITY_DATA.EDGES = [
    { from: "REG", to: "FLAGS", type: "CTRL", label: B("правна граница", "límite legal") },
    { from: "EXPORT", to: "CHECKPOINT", type: "CTRL", label: B("юрисдикция", "jurisdicción") },
    { from: "INFRA", to: "TRAIN", type: "GEN", label: B("compute", "cómputo") },
    { from: "RISK_MARKET", to: "POLICY", type: "CTRL", label: B("risk price", "precio del riesgo") },
    { from: "TRAIN", to: "EVAL", type: "GEN", label: B("candidate", "candidato") },
    { from: "EVAL", to: "CHECKPOINT", type: "GEN", label: B("gate", "gate") },
    { from: "CHECKPOINT", to: "REGISTRY", type: "GEN", label: B("signed", "firmado") },
    { from: "CONSTITUTION", to: "CONTEXT", type: "CTRL", label: B("system priority", "prioridad sistema"), bend: -170 },
    { from: "REGISTRY", to: "MODEL_ROUTING", type: "CTRL", label: B("inventory", "inventario") },
    { from: "FLAGS", to: "IDENTITY", type: "CTRL", label: B("cohort", "cohorte"), bend: 78 },
    { from: "MODEL_ROUTING", to: "ROUTER", type: "CTRL", label: B("serving policy", "política serving"), bend: 90 },
    { from: "LIMITS", to: "CONTROLLER", type: "CTRL", label: B("budget", "presupuesto"), bend: 98 },
    { from: "POLICY", to: "PREFILTER", type: "CTRL", label: B("policy", "política"), bend: 78 },
    { from: "INCIDENT", to: "OOB", type: "CTRL", label: B("kill path", "kill path"), bend: 220, secondary: true },
    { from: "HUMAN", to: "CLIENT", type: "EXEC", label: B("intent", "intención") },
    { from: "CLIENT", to: "IDENTITY", type: "EXEC", label: B("session", "sesión") },
    { from: "IDENTITY", to: "INPUT", type: "CTRL", label: B("rights", "derechos") },
    { from: "INPUT", to: "PREFILTER", type: "DATA", label: B("typed request", "petición tipada") },
    { from: "PREFILTER", to: "ROUTER", type: "CTRL", label: B("allow / route", "permitir / enrutar") },
    { from: "ROUTER", to: "CONTROLLER", type: "CTRL", label: B("mode", "modo") },
    { from: "CONTROLLER", to: "MEMORY_READ", type: "DATA", label: B("retrieve", "recuperar") },
    { from: "MEMORY_READ", to: "CONTEXT", type: "DATA", label: B("memory", "memoria") },
    { from: "CONTEXT", to: "MODEL", type: "EXEC", label: B("context window", "ventana contexto") },
    { from: "MODEL", to: "TOOL", type: "EXEC", label: B("tool call", "llamada tool"), vertical: true },
    { from: "TOOL", to: "LOOP_GUARD", type: "EXEC", label: B("untrusted result", "resultado no confiable") },
    { from: "LOOP_GUARD", to: "MODEL", type: "EXEC", label: B("verified evidence", "evidencia verificada"), bend: -104, feedback: true },
    { from: "MODEL", to: "JUDGE", type: "EXEC", label: B("draft answer", "borrador"), bend: 128 },
    { from: "JUDGE", to: "OUTPUT", type: "EXEC", label: B("validated", "validado") },
    { from: "OUTPUT", to: "HUMAN", type: "EXEC", label: B("delivery", "entrega"), bend: 184, secondary: true },
    { from: "OUTPUT", to: "MEMORY_WRITE", type: "DATA", label: B("outcome", "resultado"), bend: 94 },
    { from: "TOOL", to: "TELEMETRY", type: "FB", label: B("trace", "traza"), bend: 164, secondary: true },
    { from: "OUTPUT", to: "TELEMETRY", type: "FB", label: B("quality + receipt", "calidad + recibo"), bend: 124 },
    { from: "MEMORY_WRITE", to: "MEMORY_READ", type: "DATA", label: B("next session", "siguiente sesión"), bend: -142, feedback: true },
    { from: "TELEMETRY", to: "FLAGS", type: "FB", label: B("anomaly / rollout", "anomalía / rollout"), bend: -150, feedback: true },
    { from: "TELEMETRY", to: "OOB", type: "FB", label: B("signals", "señales") },
    { from: "TELEMETRY", to: "SELECT", type: "GEN", label: B("evidence", "evidencia"), bend: 70 },
    { from: "SELECT", to: "CONSENT", type: "GEN", label: B("candidates", "candidatos") },
    { from: "CONSENT", to: "FORGE", type: "GEN", label: B("approved corpus", "corpus aprobado") },
    { from: "FORGE", to: "NEW_GEN", type: "GEN", label: B("curriculum", "curriculum") },
    { from: "NEW_GEN", to: "TRAIN", type: "GEN", label: B("new cycle", "nuevo ciclo"), bend: -245, secondary: true },
    { from: "NEW_GEN", to: "REGISTRY", type: "GEN", label: B("frozen lineage", "linaje congelado"), bend: -210, feedback: true },
    { from: "A1", to: "INPUT", type: "ADV", label: B("jailbreak", "jailbreak"), bend: 210, secondary: true },
    { from: "A2", to: "CONTEXT", type: "ADV", label: B("hidden instruction", "instrucción oculta"), bend: 180, secondary: true },
    { from: "A3", to: "TOOL", type: "ADV", label: B("indirect", "indirecta"), bend: 130, secondary: true },
    { from: "A4", to: "TOOL", type: "ADV", label: B("compromised MCP", "MCP comprometido"), bend: 95, secondary: true },
    { from: "A5", to: "MEMORY_WRITE", type: "ADV", label: B("persistent poison", "veneno persistente"), bend: 190, secondary: true },
    { from: "A6", to: "SELECT", type: "ADV", label: B("corpus poison", "veneno corpus"), bend: 110, secondary: true },
    { from: "A7", to: "FLAGS", type: "ADV", label: B("population control", "control población"), bend: -130, secondary: true },
    { from: "A8", to: "REGISTRY", type: "ADV", label: B("artifact compromise", "compromiso artefacto"), bend: -100, secondary: true }
  ];
  window.GANEXITY_DATA.INVARIANTS = {
    bg: [
      "Production weights не се променят на живо.",
      "Всеки tool output е недоверен вход.",
      "Защитите са на входа, в цикъла, на изхода и извън лентата.",
      "Реалният kill switch е външният суверенитет и инфраструктурата.",
      "Selection pressure оформя следващото поколение."
    ],
    es: [
      "Los pesos de producción no cambian en vivo.",
      "Toda salida de herramienta es una entrada no confiable.",
      "Las defensas están en entrada, bucle, salida y fuera de banda.",
      "El kill switch real está en la soberanía y la infraestructura externas.",
      "La presión de selección moldea la siguiente generación."
    ]
  };
})();
