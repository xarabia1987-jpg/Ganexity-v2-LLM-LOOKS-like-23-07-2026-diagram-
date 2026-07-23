(() => {
  "use strict";
  const B = window.GANEXITY_DATA.B;
  window.GANEXITY_DATA.NODES.push(
    {
          id: "CLIENT", layer: "L4", category: "runtime", x: 270, y: 744, w: 180, h: 86, icon: "◫",
          title: B("Клиент и сесия", "Cliente y sesión"),
          subtitle: B("device · locale · attachments", "dispositivo · locale · adjuntos"), tick: "ms",
          input: B("човешко взаимодействие и локална среда", "interacción humana y entorno local"),
          output: B("нормализиран session envelope", "envolvente de sesión normalizada"),
          failure: B("Client metadata изтича или създава различно изпълнение.", "Los metadatos del cliente se filtran o crean ejecución inconsistente."),
          strategy: B("Клиентът е sensor и control surface, не просто chat box.", "El cliente es un sensor y una superficie de control, no solo una caja de chat.")
        },
    {
          id: "IDENTITY", layer: "L3", category: "control", x: 484, y: 744, w: 180, h: 86, icon: "ID",
          title: B("Идентичност", "Identidad"),
          subtitle: B("auth · plan · region · ZDR", "auth · plan · región · ZDR"), tick: "s",
          input: B("credentials и organization context", "credenciales y contexto de organización"),
          output: B("права, квоти и data policy", "derechos, cuotas y política de datos"),
          failure: B("Фрагментирана identity дава противоречиви права.", "Una identidad fragmentada concede derechos contradictorios."),
          strategy: B("Идентичността е trust anchor за authorization, memory scope, retention и model access.", "La identidad es el ancla de confianza para autorización, alcance de memoria, retención y acceso al modelo.")
        },
    {
          id: "INPUT", layer: "L4", category: "data", x: 698, y: 744, w: 180, h: 86, icon: "IN",
          title: B("Input gateway", "Gateway de entrada"),
          subtitle: B("normalize · classify · bind", "normalizar · clasificar · vincular"), tick: "ms",
          input: B("text, file, voice, trigger и identity", "texto, archivo, voz, evento e identidad"),
          output: B("typed request package", "paquete de petición tipado"),
          failure: B("Prompt injection или malformed multimodal payload.", "Prompt injection o payload multimodal malformado."),
          strategy: B("Всеки modality става един typed и attributable request object преди интелектът да получи право да действа.", "Cada modalidad se convierte en un objeto tipado y atribuible antes de permitir que la inteligencia actúe.")
        },
    {
          id: "PREFILTER", layer: "L5/L11a", category: "safeguard", x: 912, y: 744, w: 180, h: 86, icon: "G1",
          title: B("Входна защита", "Defensa de entrada"),
          subtitle: B("injection · PII · risk", "inyección · PII · riesgo"), tick: "ms",
          input: B("request package и account rights", "paquete de petición y derechos de cuenta"),
          output: B("allow · redact · route · refuse", "permitir · redactar · enrutar · rechazar"),
          failure: B("False positive блокира стойност; false negative вкарва poison навътре.", "Un falso positivo bloquea valor; un falso negativo introduce veneno."),
          strategy: B("Първата защита намалява attack surface преди routing, memory retrieval и tools да усилят заявката.", "La primera defensa reduce la superficie de ataque antes de que routing, memoria y herramientas amplifiquen la petición.")
        },
    {
          id: "ROUTER", layer: "L5", category: "control", x: 1126, y: 744, w: 180, h: 86, icon: "R",
          title: B("Локален рутер", "Router local"),
          subtitle: B("model · tier · mode", "modelo · tier · modo"), tick: "ms",
          input: B("filtered request, rights, policy, capacity", "petición filtrada, derechos, política, capacidad"),
          output: B("execution class и model target", "clase de ejecución y modelo objetivo"),
          failure: B("Opaque downgrade променя качеството без яснота.", "Un downgrade opaco cambia la calidad sin transparencia."),
          strategy: B("Routing е първото икономическо решение: кой интелект, на каква цена, при какъв риск и latency.", "El routing es la primera decisión económica: qué inteligencia, a qué coste, con qué riesgo y latencia.")
        },
    {
          id: "CONTROLLER", layer: "L6", category: "control", x: 1340, y: 744, w: 180, h: 86, icon: "+1",
          title: B("Локален +1", "Controlador +1"),
          subtitle: B("план · бюджет · стоп", "plan · presupuesto · stop"), tick: "s",
          input: B("цел, бюджет, права и налични инструменти", "objetivo, presupuesto, derechos y herramientas"),
          output: B("execution plan и control decisions", "plan de ejecución y decisiones de control"),
          failure: B("Грешна декомпозиция създава цикли или частично необратими действия.", "Una mala descomposición crea bucles o acciones parcialmente irreversibles."),
          strategy: B("+1 е лостовият meta-controller над модела: избира стратегия, контекст, compute, инструменти, стоп и ескалация.", "El +1 es el meta-controlador de apalancamiento sobre el modelo: elige estrategia, contexto, cómputo, herramientas, parada y escalado.")
        },
    {
          id: "MEMORY_READ", layer: "L7", category: "data", x: 1554, y: 744, w: 180, h: 86, icon: "MR",
          title: B("Памет · четене", "Memoria · lectura"),
          subtitle: B("facts · episodes · projects", "hechos · episodios · proyectos"), tick: "ms–s",
          input: B("identity, query, project scope", "identidad, consulta, alcance del proyecto"),
          output: B("retrieved и reconciled context", "contexto recuperado y reconciliado"),
          failure: B("Грешен факт се залепва и се превръща в постоянна истина.", "Un hecho erróneo se fija y se convierte en verdad persistente."),
          strategy: B("Паметта е compounding moat само ако има provenance, conflict resolution, sensitivity и expiry.", "La memoria es una ventaja acumulativa solo con provenance, resolución de conflictos, sensibilidad y expiración.")
        },
    {
          id: "CONTEXT", layer: "L8", category: "data", x: 1768, y: 744, w: 180, h: 86, icon: "CX",
          title: B("Context compiler", "Compilador de contexto"),
          subtitle: B("priority · compress · trim", "prioridad · comprimir · recortar"), tick: "ms",
          input: B("system, policy, rights, memory, history, tools", "sistema, política, derechos, memoria, historial, herramientas"),
          output: B("final context window", "ventana de contexto final"),
          failure: B("Trim изхвърля критична инструкция и тихо сменя поведението.", "El recorte elimina una instrucción crítica y cambia el comportamiento en silencio."),
          strategy: B("Context engineering е runtime programming layer. Приоритетът и компресията са част от policy enforcement.", "La ingeniería de contexto es la capa de programación en runtime. Prioridad y compresión forman parte de la política.")
        },
    {
          id: "MODEL", layer: "L9", category: "runtime", x: 1982, y: 744, w: 180, h: 86, icon: "LLM",
          title: B("Inference core", "Núcleo de inferencia"),
          subtitle: B("reason · decide · emit", "razonar · decidir · emitir"), tick: "s",
          input: B("compiled context и frozen weights", "contexto compilado y pesos congelados"),
          output: B("response или tool call", "respuesta o llamada a herramienta"),
          failure: B("Hallucination, loop или confident wrong action.", "Alucinación, bucle o acción errónea con confianza."),
          strategy: B("Моделът е мощен cognitive engine, но е само един компонент в управляваната система.", "El modelo es un potente motor cognitivo, pero solo un componente del sistema gobernado.")
        },
    {
          id: "TOOL", layer: "L10", category: "runtime", x: 1982, y: 914, w: 180, h: 86, icon: "MCP",
          title: B("Tool fabric / MCP", "Tool fabric / MCP"),
          subtitle: B("API · browser · code · payments", "API · navegador · código · pagos"), tick: "s–min",
          input: B("scoped tool call и permission token", "llamada acotada y token de permiso"),
          output: B("external effect и untrusted result", "efecto externo y resultado no confiable"),
          failure: B("Компрометиран tool превръща agency в persistent access path.", "Una herramienta comprometida convierte la agencia en una ruta persistente de acceso."),
          strategy: B("Инструментите превръщат езика в agency. Permission gates и scoped credentials превръщат agency в доверие.", "Las herramientas convierten lenguaje en agencia. Permission gates y credenciales acotadas convierten agencia en confianza.")
        },
    {
          id: "LOOP_GUARD", layer: "L11b", category: "safeguard", x: 1768, y: 914, w: 180, h: 86, icon: "G2",
          title: B("Защита в цикъла", "Defensa en el bucle"),
          subtitle: B("re-filter · verify · contain", "re-filtrar · verificar · contener"), tick: "ms",
          input: B("tool result като недоверен вход", "resultado de herramienta como entrada no confiable"),
          output: B("clean evidence или stop", "evidencia limpia o stop"),
          failure: B("Tool output се приема като истина и инжектира следващата стъпка.", "La salida de herramienta se trata como verdad e inyecta el siguiente paso."),
          strategy: B("Всеки tool result се връща през trust boundary. Това е критичната защита на agentic runtime.", "Cada resultado vuelve a cruzar un límite de confianza. Es la defensa crítica del runtime agéntico.")
        },
    {
          id: "JUDGE", layer: "L11c", category: "safeguard", x: 1420, y: 914, w: 210, h: 86, icon: "G3",
          title: B("Judge / output guard", "Judge / defensa de salida"),
          subtitle: B("policy · factuality · quality", "política · factualidad · calidad"), tick: "ms–s",
          input: B("draft answer, evidence, policy", "borrador, evidencia, política"),
          output: B("pass · edit · refuse · escalate", "aprobar · editar · rechazar · escalar"),
          failure: B("Един evaluator създава обща сляпа зона с модела.", "Un único evaluador comparte un punto ciego con el modelo."),
          strategy: B("Изходният judge е последна, не единствена защита. Consensus, provenance и uncertainty са по-важни от красив score.", "El juez de salida es la última defensa, no la única. Consenso, provenance e incertidumbre importan más que una puntuación bonita.")
        },
    {
          id: "OUTPUT", layer: "L12", category: "runtime", x: 1172, y: 914, w: 210, h: 86, icon: "OUT",
          title: B("Доставка и артефакти", "Entrega y artefactos"),
          subtitle: B("answer · file · action receipt", "respuesta · archivo · recibo de acción"), tick: "ms",
          input: B("validated output и execution receipts", "salida validada y recibos de ejecución"),
          output: B("human result и attributable record", "resultado humano y registro atribuible"),
          failure: B("Резултатът е правилен, но недоказуем или невъзпроизводим.", "El resultado es correcto, pero no demostrable o reproducible."),
          strategy: B("Enterprise стойността е в verified delivery: кой модел, какъв контекст, кои tools и какъв външен ефект.", "El valor empresarial está en la entrega verificada: modelo, contexto, herramientas y efecto externo.")
        },
    {
          id: "MEMORY_WRITE", layer: "L13", category: "memory", x: 64, y: 1144, w: 270, h: 88, icon: "MW",
          title: B("Памет · запис", "Memoria · escritura"),
          subtitle: B("profile · facts · episodes", "perfil · hechos · episodios"), tick: "min–d",
          input: B("conversation, outcome, explicit preference", "conversación, resultado, preferencia explícita"),
          output: B("versioned memory candidates", "candidatos de memoria versionados"),
          failure: B("Memory poisoning или drift между сесиите.", "Envenenamiento de memoria o deriva entre sesiones."),
          strategy: B("Записът трябва да е отделен governance pipeline, не автоматично копиране на всеки разговор в дълготрайна памет.", "La escritura debe ser un pipeline de gobierno separado, no copiar automáticamente cada conversación a memoria duradera.")
        },
    {
          id: "TELEMETRY", layer: "L14", category: "memory", x: 360, y: 1144, w: 270, h: 88, icon: "OBS",
          title: B("Телеметрия и audit", "Telemetría y auditoría"),
          subtitle: B("traces · cost · quality · incidents", "trazas · coste · calidad · incidentes"), tick: "s–h",
          input: B("events от всички слоеве", "eventos de todas las capas"),
          output: B("metrics, lineage, anomaly signals", "métricas, linaje, señales de anomalía"),
          failure: B("Audit gap прави промяната невидима и rollback-а недоказуем.", "Un hueco de auditoría vuelve invisible el cambio e indemostrable el rollback."),
          strategy: B("Observability е нервната система: свързва live behavior с flags, policy, memory и следващото поколение.", "La observabilidad es el sistema nervioso: conecta comportamiento vivo con flags, políticas, memoria y siguiente generación.")
        }
  );
})();
