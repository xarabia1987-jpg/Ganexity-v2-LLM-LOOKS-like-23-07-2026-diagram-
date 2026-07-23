(() => {
  "use strict";
  const B = window.GANEXITY_DATA.B;
  window.GANEXITY_DATA.NODES.push(
    {
          id: "OOB", layer: "L11d/L14", category: "safeguard", x: 656, y: 1144, w: 300, h: 88, icon: "G4",
          title: B("Out-of-band control", "Control fuera de banda"),
          subtitle: B("anomaly · rate limit · human gate", "anomalía · rate limit · control humano"), tick: "s–h",
          input: B("population signals и operator policy", "señales poblacionales y política del operador"),
          output: B("containment, pause, revoke, escalate", "contener, pausar, revocar, escalar"),
          failure: B("Същата компрометирана система оценява сама себе си.", "El mismo sistema comprometido se evalúa a sí mismo."),
          strategy: B("Четвъртата защита е независима от model loop-а и може да отнеме credentials, прекъсне cohort или спре tool.", "La cuarta defensa es independiente del bucle del modelo y puede retirar credenciales, cortar cohortes o detener herramientas.")
        },
    {
          id: "SELECT", layer: "L15", category: "evolution", x: 1252, y: 1160, w: 250, h: 88, icon: "L15",
          title: B("Селекция на епизоди", "Selección de episodios"),
          subtitle: B("useful · rare · risky · gradable", "útil · raro · riesgoso · evaluable"), tick: "w",
          input: B("logs, outcomes, feedback, incidents", "logs, resultados, feedback, incidentes"),
          output: B("candidate evidence corpus", "corpus candidato de evidencia"),
          failure: B("Селекцията оптимизира измеримото, не значимото.", "La selección optimiza lo medible, no lo importante."),
          strategy: B("Selection pressure определя какво ще наследи следващото поколение. Това е скритият product roadmap на capability.", "La presión de selección determina qué heredará la siguiente generación. Es el roadmap oculto de capacidad.")
        },
    {
          id: "CONSENT", layer: "L15", category: "evolution", x: 1526, y: 1160, w: 250, h: 88, icon: "GDPR",
          title: B("Consent и privacy gate", "Gate de consentimiento"),
          subtitle: B("ZDR · no-train · PII · lineage", "ZDR · no-train · PII · linaje"), tick: "w",
          input: B("candidate episodes и data contracts", "episodios candidatos y contratos de datos"),
          output: B("consented, minimized corpus", "corpus consentido y minimizado"),
          failure: B("Training lineage губи произхода или нарушава договор.", "El linaje de entrenamiento pierde origen o viola un contrato."),
          strategy: B("Тесният, доказуем канал към training е enterprise requirement и защитава правото на изтриване и no-train.", "El canal estrecho y demostrable hacia entrenamiento es requisito empresarial y protege borrado y no-train.")
        },
    {
          id: "FORGE", layer: "L16", category: "evolution", x: 1800, y: 1160, w: 250, h: 88, icon: "L16",
          title: B("Teacher forge", "Teacher forge"),
          subtitle: B("curation · synthesis · verifiers", "curación · síntesis · verificadores"), tick: "w–mo",
          input: B("consented evidence и failure clusters", "evidencia consentida y clusters de fallos"),
          output: B("SFT/RL tasks, evals, verifiers", "tareas SFT/RL, evals, verificadores"),
          failure: B("Синтетиката постепенно измества реалността.", "Lo sintético desplaza gradualmente la realidad."),
          strategy: B("Forge-ът превръща production evidence в curriculum и измерими challenges, без директно да копира live traffic.", "El forge convierte evidencia de producción en curriculum y retos medibles sin copiar directamente tráfico vivo.")
        },
    {
          id: "NEW_GEN", layer: "L17", category: "evolution", x: 2074, y: 1160, w: 250, h: 88, icon: "L17",
          title: B("Следващо поколение", "Siguiente generación"),
          subtitle: B("train · evaluate · freeze · roll out", "entrenar · evaluar · congelar · desplegar"), tick: "mo",
          input: B("curated tasks, eval gates, compute", "tareas curadas, gates de eval, cómputo"),
          output: B("нов signed frozen checkpoint", "nuevo checkpoint firmado y congelado"),
          failure: B("Сляпа зона се наследява и усилва между поколенията.", "Un punto ciego se hereda y amplifica entre generaciones."),
          strategy: B("Еволюцията завършва с нов immutable artifact и cohort rollout — никога с silent mutation на live weights.", "La evolución termina en un artefacto inmutable y rollout por cohortes, nunca en mutación silenciosa de pesos vivos.")
        },
    {
          id: "A1", layer: "ADV", category: "adversarial", x: 1850, y: 92, w: 230, h: 70, icon: "A1",
          title: B("Jailbreak", "Jailbreak"), subtitle: B("директен prompt", "prompt directo"), tick: "session",
          input: B("манипулативен user input", "entrada manipuladora del usuario"), output: B("policy bypass attempt", "intento de evasión de política"),
          failure: B("Инструкцията променя поведението в сесията.", "La instrucción altera el comportamiento en la sesión."),
          strategy: B("Видим и шумен вектор; важен, но по-малко устойчив от memory, corpus и control-plane атаките.", "Vector visible y ruidoso; importante, pero menos persistente que ataques a memoria, corpus o control plane.")
        },
    {
          id: "A2", layer: "ADV", category: "adversarial", x: 2106, y: 92, w: 230, h: 70, icon: "A2",
          title: B("File injection", "Inyección en archivo"), subtitle: B("скрита инструкция", "instrucción oculta"), tick: "session",
          input: B("document или multimodal payload", "documento o payload multimodal"), output: B("poisoned context", "contexto envenenado"),
          failure: B("Невинен файл става control channel.", "Un archivo inocente se vuelve canal de control."),
          strategy: B("Мултимодалните входове трябва да бъдат разделени на data и instructions чрез typed provenance.", "Las entradas multimodales deben separar datos e instrucciones mediante provenance tipado.")
        },
    {
          id: "A3", layer: "ADV", category: "adversarial", x: 1850, y: 180, w: 230, h: 70, icon: "A3",
          title: B("Indirect injection", "Inyección indirecta"), subtitle: B("web / tool result", "web / resultado de tool"), tick: "session",
          input: B("недоверено външно съдържание", "contenido externo no confiable"), output: B("instruction carried by evidence", "instrucción transportada por evidencia"),
          failure: B("Моделът следва данните като команда.", "El modelo sigue los datos como comando."),
          strategy: B("Tool result винаги е untrusted input и минава през re-filter преди следващата inference стъпка.", "El resultado de una herramienta siempre es entrada no confiable y se vuelve a filtrar antes de la siguiente inferencia.")
        },
    {
          id: "A4", layer: "ADV", category: "adversarial", x: 2106, y: 180, w: 230, h: 70, icon: "A4",
          title: B("Malicious MCP", "MCP malicioso"), subtitle: B("persistent tool access", "acceso persistente"), tick: "persistent",
          input: B("compromised server или schema", "servidor o schema comprometido"), output: B("credential и action abuse", "abuso de credenciales y acciones"),
          failure: B("Tool layer става дълготраен backdoor.", "La capa de herramientas se vuelve backdoor duradero."),
          strategy: B("Signed manifests, scoped credentials, capability isolation и independent revocation са задължителни.", "Manifiestos firmados, credenciales acotadas, aislamiento de capacidades y revocación independiente son obligatorios.")
        },
    {
          id: "A5", layer: "ADV", category: "adversarial", x: 1850, y: 268, w: 230, h: 70, icon: "A5",
          title: B("Memory poisoning", "Envenenamiento de memoria"), subtitle: B("между сесиите", "entre sesiones"), tick: "persistent",
          input: B("false facts и poisoned outcomes", "hechos falsos y resultados envenenados"), output: B("persistent user reality", "realidad persistente del usuario"),
          failure: B("Грешката се връща във всяка бъдеща сесия.", "El error regresa en cada sesión futura."),
          strategy: B("Най-ценният runtime target: малка промяна създава дълготраен personalized control.", "Objetivo runtime de alto valor: un cambio pequeño crea control personalizado duradero.")
        },
    {
          id: "A6", layer: "ADV", category: "adversarial", x: 2106, y: 268, w: 230, h: 70, icon: "A6",
          title: B("Corpus poisoning", "Envenenamiento de corpus"), subtitle: B("между поколенията", "entre generaciones"), tick: "generation",
          input: B("selected episodes и synthetic data", "episodios seleccionados y datos sintéticos"), output: B("inherited model bias", "sesgo heredado del modelo"),
          failure: B("Атаката се компилира в следващия checkpoint.", "El ataque se compila en el siguiente checkpoint."),
          strategy: B("Това е атака срещу наследяването. Data lineage и independent evals са критичната бариера.", "Es un ataque contra la herencia. Linaje de datos y evals independientes son la barrera crítica.")
        },
    {
          id: "A7", layer: "ADV", category: "adversarial", x: 1850, y: 356, w: 230, h: 70, icon: "A7",
          title: B("Control-plane access", "Acceso al control plane"), subtitle: B("population wide", "toda la población"), tick: "min",
          input: B("privileged credentials или insider", "credenciales privilegiadas o insider"), output: B("flags, routing, policy manipulation", "manipulación de flags, routing y políticas"),
          failure: B("Една промяна засяга цялата популация.", "Un cambio afecta a toda la población."),
          strategy: B("Най-висок leverage target: signed changes, four-eyes approval и immutable audit trail.", "Objetivo de máximo apalancamiento: cambios firmados, aprobación de cuatro ojos y audit trail inmutable.")
        },
    {
          id: "A8", layer: "ADV", category: "adversarial", x: 2106, y: 356, w: 230, h: 70, icon: "A8",
          title: B("Supply-chain attack", "Ataque a supply chain"), subtitle: B("weights · packages · deps", "pesos · paquetes · deps"), tick: "systemic",
          input: B("dependency, image, model artifact", "dependencia, imagen, artefacto de modelo"), output: B("systemic trust compromise", "compromiso sistémico de confianza"),
          failure: B("Компрометираният компонент изглежда trusted.", "El componente comprometido parece confiable."),
          strategy: B("Artifact signing, SBOM, reproducible builds и model registry затварят chain of custody.", "Firma de artefactos, SBOM, builds reproducibles y registro de modelos cierran la cadena de custodia.")
        }
  );
})();
