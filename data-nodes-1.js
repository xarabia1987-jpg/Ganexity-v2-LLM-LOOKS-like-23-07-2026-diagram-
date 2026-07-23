(() => {
  "use strict";
  const B = window.GANEXITY_DATA.B;
  window.GANEXITY_DATA.NODES = [
    {
          id: "REG", layer: "L0", category: "external", x: 62, y: 86, w: 260, h: 76, icon: "§",
          title: B("Регулация и право", "Regulación y derecho"),
          subtitle: B("разрешение за съществуване", "permiso para operar"), tick: "mo–y",
          input: B("закони, съд, отговорност, обществен мандат", "leyes, tribunales, responsabilidad, mandato público"),
          output: B("граници на действие и правно разрешение", "límites operativos y permiso legal"),
          failure: B("Външно спиране или фрагментирана юрисдикция.", "Cierre externo o jurisdicción fragmentada."),
          strategy: B("Последният governance слой е извън продукта. Продуктът спира функция; суверенният слой може да спре достъпа до цялата система.", "La última capa de gobierno está fuera del producto. El producto detiene una función; la soberanía puede detener el acceso al sistema completo.")
        },
    {
          id: "EXPORT", layer: "L0", category: "external", x: 348, y: 86, w: 260, h: 76, icon: "↗",
          title: B("Export control", "Control de exportación"),
          subtitle: B("санкции · юрисдикции", "sanciones · jurisdicciones"), tick: "mo–y",
          input: B("геополитика, санкции, класификация на модели", "geopolítica, sanciones, clasificación de modelos"),
          output: B("къде могат да съществуват моделът и compute-ът", "dónde pueden existir el modelo y el cómputo"),
          failure: B("Capability става географски недостъпна.", "La capacidad queda geográficamente inaccesible."),
          strategy: B("Достъпът до модели е геополитическа supply chain. Правото на разпространение може да е moat или single point of failure.", "El acceso a modelos es una cadena de suministro geopolítica. El derecho de distribución puede ser una ventaja o un punto único de fallo.")
        },
    {
          id: "INFRA", layer: "L0", category: "external", x: 634, y: 86, w: 260, h: 76, icon: "⚡",
          title: B("Compute и енергия", "Cómputo y energía"),
          subtitle: B("чипове · cloud · мощност", "chips · cloud · potencia"), tick: "mo–y",
          input: B("полупроводници, datacenter-и, енергия", "semiconductores, centros de datos, energía"),
          output: B("физически капацитет за training и inference", "capacidad física para entrenamiento e inferencia"),
          failure: B("Капацитетът или vendor концентрацията блокират scale.", "La capacidad o la concentración de proveedores bloquea la escala."),
          strategy: B("Интелектът остава заземен във физическа инфраструктура. Multi-provider portability е стратегическа, не оперативна подробност.", "La inteligencia sigue anclada en infraestructura física. La portabilidad multiproveedor es estratégica, no un detalle operativo.")
        },
    {
          id: "RISK_MARKET", layer: "L0", category: "external", x: 920, y: 86, w: 260, h: 76, icon: "◇",
          title: B("Рискови пазари", "Mercados de riesgo"),
          subtitle: B("застраховане · assurance", "seguros · assurance"), tick: "mo–y",
          input: B("инциденти, auditability, safety case", "incidentes, auditabilidad, safety case"),
          output: B("цената на автономното внедряване", "precio de desplegar autonomía"),
          failure: B("Незастрахуема автономия спира enterprise adoption.", "La autonomía no asegurable frena la adopción empresarial."),
          strategy: B("Одитът и контролът стават икономически примитиви, когато enterprise купувачите ценообразуват AI риска.", "La auditoría y el control se vuelven primitivas económicas cuando las empresas ponen precio al riesgo de IA.")
        },
    {
          id: "TRAIN", layer: "L1", category: "foundation", x: 62, y: 286, w: 250, h: 86, icon: "Σ",
          title: B("Тренировка", "Entrenamiento"),
          subtitle: B("SFT · RL · distillation", "SFT · RL · destilación"), tick: "w–mo",
          input: B("курирани задачи, reward сигнали, compute", "tareas curadas, señales de recompensa, cómputo"),
          output: B("кандидат model weights", "pesos candidatos del modelo"),
          failure: B("Синтетичните данни изместват реалността или reward-ът е грешен.", "Los datos sintéticos desplazan la realidad o la recompensa está mal definida."),
          strategy: B("Training създава capability, но не дефинира production системата. Архитектурата около модела решава как се използва.", "El entrenamiento crea capacidad, pero no define el sistema de producción. La arquitectura alrededor del modelo decide cómo se usa.")
        },
    {
          id: "EVAL", layer: "L1", category: "foundation", x: 332, y: 286, w: 250, h: 86, icon: "✓",
          title: B("Evals и red team", "Evals y red team"),
          subtitle: B("capability · safety · abuse", "capacidad · seguridad · abuso"), tick: "w–mo",
          input: B("кандидат weights, benchmark-и, threat models", "pesos candidatos, benchmarks, modelos de amenaza"),
          output: B("измерена capability и safety case", "capacidad medida y safety case"),
          failure: B("Verifier bias награждава само евтиното за измерване.", "El sesgo del verificador premia solo lo fácil de medir."),
          strategy: B("Границата на evals определя границата на оптимизацията. Слепите петна в измерването се наследяват.", "La frontera de evaluación determina la frontera de optimización. Los puntos ciegos de medición se heredan.")
        },
    {
          id: "CHECKPOINT", layer: "L1", category: "foundation", x: 602, y: 286, w: 250, h: 86, icon: "⬡",
          title: B("Frozen checkpoint", "Checkpoint congelado"),
          subtitle: B("версионирани weights", "pesos versionados"), tick: "mo",
          input: B("трениран и оценен кандидат", "candidato entrenado y evaluado"),
          output: B("immutable production artifact", "artefacto inmutable de producción"),
          failure: B("Неясен provenance или компрометирани weights.", "Provenance opaco o pesos comprometidos."),
          strategy: B("Production weights са frozen и versioned. Live адаптацията се случва около модела, не чрез тиха промяна по време на сесия.", "Los pesos de producción están congelados y versionados. La adaptación en vivo ocurre alrededor del modelo, no reescribiéndolo durante una sesión.")
        },
    {
          id: "CONSTITUTION", layer: "L1", category: "foundation", x: 872, y: 286, w: 250, h: 86, icon: "≡",
          title: B("System constitution", "Constitución del sistema"),
          subtitle: B("prompt · policy primitives", "prompt · primitivas de política"), tick: "h–w",
          input: B("продуктова доктрина, политика, operating rules", "doctrina de producto, política, reglas operativas"),
          output: B("най-висок приоритет в контекста", "contexto de máxima prioridad"),
          failure: B("Policy drift или скрити неверсионирани промени.", "Deriva de políticas o cambios ocultos sin versión."),
          strategy: B("Поведението може да се променя по-бързо от weights чрез versioned instructions, но това изисква строг audit и rollback.", "El comportamiento puede cambiar más rápido que los pesos mediante instrucciones versionadas, pero exige auditoría y rollback estrictos.")
        },
    {
          id: "REGISTRY", layer: "L1", category: "foundation", x: 1142, y: 286, w: 280, h: 86, icon: "⌘",
          title: B("Model registry", "Registro de modelos"),
          subtitle: B("provenance · signatures · lineage", "provenance · firmas · linaje"), tick: "h–mo",
          input: B("checkpoints, adapters, eval записи", "checkpoints, adaptadores, registros de evals"),
          output: B("trusted deployable inventory", "inventario desplegable de confianza"),
          failure: B("Supply-chain подмяна или unsigned artifacts.", "Sustitución en la supply chain o artefactos sin firma."),
          strategy: B("Registry-то е chain of custody за интелекта и свързва lineage с policy, deployment и incident response.", "El registro es la cadena de custodia de la inteligencia y conecta el linaje con políticas, despliegue y respuesta a incidentes.")
        },
    {
          id: "FLAGS", layer: "L2", category: "control", x: 62, y: 510, w: 250, h: 86, icon: "⚑",
          title: B("Feature flags", "Feature flags"),
          subtitle: B("кохорти · canary · rollback", "cohortes · canary · rollback"), tick: "min–h",
          input: B("телеметрия, инциденти, rollout решения", "telemetría, incidentes, decisiones de rollout"),
          output: B("поведение по популация", "comportamiento por población"),
          failure: B("Flag divergence създава невъзпроизводимо поведение.", "La divergencia de flags crea comportamiento irreproducible."),
          strategy: B("Control plane-ът променя поведението на милиони сесии без промяна на weights — едновременно мощност и системен риск.", "El control plane cambia el comportamiento de millones de sesiones sin tocar los pesos: poder y riesgo sistémico a la vez.")
        },
    {
          id: "MODEL_ROUTING", layer: "L2", category: "control", x: 332, y: 510, w: 250, h: 86, icon: "⇄",
          title: B("Model routing", "Routing de modelos"),
          subtitle: B("tier · регион · специализация", "tier · región · especialización"), tick: "ms–h",
          input: B("клас на заявката, права, live capacity", "clase de petición, derechos, capacidad en vivo"),
          output: B("избран модел и serving path", "modelo y ruta de serving seleccionados"),
          failure: B("Тих downgrade или opaque model substitution.", "Downgrade silencioso o sustitución opaca del modelo."),
          strategy: B("Routing превръща портфолио от модели в един продукт, балансирайки качество, latency, цена, юрисдикция и риск.", "El routing convierte una cartera de modelos en un producto, equilibrando calidad, latencia, coste, jurisdicción y riesgo.")
        },
    {
          id: "LIMITS", layer: "L2", category: "control", x: 602, y: 510, w: 250, h: 86, icon: "⌁",
          title: B("Бюджети и лимити", "Presupuestos y límites"),
          subtitle: B("токени · време · пари · стъпки", "tokens · tiempo · dinero · pasos"), tick: "s–h",
          input: B("план, риск, workload, account tier", "plan, riesgo, carga, nivel de cuenta"),
          output: B("bounded execution envelope", "envolvente de ejecución limitada"),
          failure: B("Agent cascade изчерпва бюджета или спира по средата.", "Una cascada de agentes agota el presupuesto o se detiene a mitad."),
          strategy: B("Compute governance е product governance. Ясните бюджети превръщат отворената автономия в контролируема икономическа система.", "La gobernanza de cómputo es gobernanza de producto. Los presupuestos explícitos convierten la autonomía abierta en un sistema económico controlable.")
        },
    {
          id: "POLICY", layer: "L2", category: "control", x: 872, y: 510, w: 250, h: 86, icon: "◆",
          title: B("Policy engine", "Motor de políticas"),
          subtitle: B("риск · privacy · permissions", "riesgo · privacidad · permisos"), tick: "min–h",
          input: B("закон, product policy, account contract", "ley, política de producto, contrato de cuenta"),
          output: B("allow · transform · refuse · escalate", "permitir · transformar · rechazar · escalar"),
          failure: B("Един post-hoc judge се превръща в единствена бариера.", "Un único juez post-hoc se convierte en la única barrera."),
          strategy: B("Policy се прилага преди, по време, след и извън execution loop-а — не само в последния classifier.", "La política se aplica antes, durante, después y fuera del bucle de ejecución, no solo en un clasificador final.")
        },
    {
          id: "INCIDENT", layer: "L2", category: "control", x: 1142, y: 510, w: 280, h: 86, icon: "!",
          title: B("Incident command", "Mando de incidentes"),
          subtitle: B("аномалия · kill path · rollback", "anomalía · kill path · rollback"), tick: "min–h",
          input: B("телеметрия, audit evidence, operator decision", "telemetría, evidencia de auditoría, decisión del operador"),
          output: B("containment, rollback, hardened limits", "contención, rollback, límites reforzados"),
          failure: B("Audit gaps блокират бързия и доказуем rollback.", "Los huecos de auditoría impiden un rollback rápido y demostrable."),
          strategy: B("Оперативното предимство е контролирана обратимост: detect, isolate, rollback и доказване на всяка промяна.", "La ventaja operativa es la reversibilidad controlada: detectar, aislar, revertir y demostrar cada cambio.")
        },
    {
          id: "HUMAN", layer: "L4", category: "runtime", x: 56, y: 744, w: 180, h: 86, icon: "H",
          title: B("Човешко намерение", "Intención humana"),
          subtitle: B("цел · контекст · предпочитание", "objetivo · contexto · preferencia"), tick: "ms",
          input: B("текст, глас, файл, event trigger", "texto, voz, archivo, evento"),
          output: B("изразена цел", "objetivo expresado"),
          failure: B("Двусмисленото намерение се приема за изпълнима спецификация.", "La intención ambigua se trata como especificación ejecutable."),
          strategy: B("Системата започва с намерение, не с prompt. Целта трябва да оцелее през инструменти, време и организационни граници.", "El sistema empieza con intención, no con un prompt. El objetivo debe sobrevivir a herramientas, tiempo y límites organizativos.")
        }
  ];
})();
