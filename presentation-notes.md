# Ganexity LLM Vision Map V3 — Investor Presentation Notes

## Български — 6–7 минути

### 0:00–0:30 · Категорийна промяна

Това, което изглежда като чатбот, реално е многостепенна операционна система около интелекта. Моделът е inference core. Защитимият бизнес е архитектурата, която решава кой модел работи, какво може да знае, какво може да направи, кога трябва да спре, какво става памет и какво може да повлияе на следващото поколение.

### 0:30–1:20 · Три скорости, една система

Картата разделя системата на три такта:

- `ms–s`: горещият път на една задача;
- `min–h`: control plane, telemetry, policy и rollback;
- `w–mo`: training, evals и нов frozen checkpoint.

Стратегическият риск не е само интелектът. Това е разминаването между машинната скорост на промяна и човешката скорост на надзор.

### 1:20–2:20 · +1 meta-controller

След identity, input filtering и routing заявката стига до локалния `+1`. Това е leverage layer-ът над модела. Той избира стратегия, роли, контекст, compute, инструменти, бюджет, критерии за стоп и ескалация.

Моделът генерира възможности. `+1` превръща възможностите в ограничена, измерима операция.

### 2:20–3:20 · От език към действие

Tool fabric / MCP е мястото, където езикът пресича границата към външния свят: браузър, API, код, файлове, плащания.

Затова всеки tool result се връща като **untrusted input**. Permission gate преди действието и re-filter след действието са trust boundary-ът на agentic runtime.

### 3:20–4:10 · Паметта като moat

Паметта не е просто vector database. Тя изисква provenance, sensitivity, conflict resolution, expiry и отделен write-governance pipeline.

Когато е управлявана правилно, всяка задача подобрява continuity и organizational context. Това е compounding advantage, който не се копира само с достъп до същия модел.

### 4:10–5:00 · Обратимост и operational trust

Телеметрията свързва всеки модел, tool call, разход, резултат и инцидент. Incident command може да промени flags, routing, limits, policy или да отнеме credentials.

Enterprise автономията не означава „моделът никога не греши“. Означава: грешката се вижда, изолира, връща назад и доказва.

### 5:00–5:50 · Еволюция без live weight drift

Production weights не се променят на живо. Evidence минава през selection, consent/privacy gate и teacher forge, след което се създава нов signed frozen checkpoint.

Това отделя runtime adaptation от generational learning и прави наследяването одитируемо.

### 5:50–6:30 · Истинската атакуваема повърхност

Jailbreak-ът е видим, но краткотраен. По-ценните атаки са:

- `A5` memory poisoning — контрол между сесиите;
- `A6` corpus poisoning — контрол между поколенията;
- `A7` control-plane access — ефект върху цялата популация;
- `A8` supply-chain compromise — системна загуба на доверие.

### 6:30–7:00 · Финален инвестиционен кадър

Моделите се комодитизират. Победителят ще притежава control plane-а около интелекта: identity, memory, tools, safeguards, telemetry и evolutionary feedback.

**Ganexity не продава още един LLM интерфейс. Ganexity изгражда управляваната операционна система за автономна работа.**

---

## Español — 6–7 minutos

### 0:00–0:30 · Cambio de categoría

Lo que parece un chatbot es en realidad un sistema operativo multivelocidad alrededor de la inteligencia. El modelo es el núcleo de inferencia. El negocio defendible es la arquitectura que decide qué modelo opera, qué puede conocer, qué puede hacer, cuándo debe detenerse, qué se convierte en memoria y qué puede influir en la siguiente generación.

### 0:30–1:20 · Tres velocidades, un sistema

El mapa separa el sistema en tres cadencias:

- `ms–s`: el hot path de una tarea;
- `min–h`: control plane, telemetría, políticas y rollback;
- `w–mo`: entrenamiento, evals y un nuevo checkpoint congelado.

El riesgo estratégico no es solo la inteligencia. Es el desfase entre la velocidad de cambio de la máquina y la velocidad humana de supervisión.

### 1:20–2:20 · Meta-controlador +1

Después de identidad, filtrado de entrada y routing, la petición llega al `+1` local. Es la capa de apalancamiento sobre el modelo. Elige estrategia, roles, contexto, cómputo, herramientas, presupuesto, condiciones de parada y escalado.

El modelo genera posibilidades. El `+1` convierte esas posibilidades en una operación limitada y medible.

### 2:20–3:20 · Del lenguaje a la acción

Tool fabric / MCP es donde el lenguaje cruza al mundo externo: navegador, API, código, archivos y pagos.

Por eso cada resultado de herramienta vuelve como **entrada no confiable**. El permission gate antes de actuar y el re-filtrado después de actuar forman el límite de confianza del runtime agéntico.

### 3:20–4:10 · Memoria como ventaja acumulativa

La memoria no es solo una base vectorial. Requiere provenance, sensibilidad, resolución de conflictos, expiración y un pipeline separado de gobierno de escritura.

Bien gobernada, cada tarea mejora la continuidad y el contexto organizativo. Es una ventaja acumulativa que no se replica solo usando el mismo modelo.

### 4:10–5:00 · Reversibilidad y confianza operativa

La telemetría conecta cada modelo, tool call, coste, resultado e incidente. Incident command puede cambiar flags, routing, límites, políticas o revocar credenciales.

La autonomía empresarial no significa que el modelo nunca falle. Significa que el fallo se detecta, se aísla, se revierte y se demuestra.

### 5:00–5:50 · Evolución sin deriva de pesos en vivo

Los pesos de producción no cambian en vivo. La evidencia pasa por selección, consentimiento/privacidad y teacher forge antes de crear un nuevo checkpoint firmado y congelado.

Esto separa la adaptación runtime del aprendizaje generacional y vuelve auditable la herencia.

### 5:50–6:30 · La superficie de ataque real

El jailbreak es visible, pero temporal. Los ataques de mayor valor son:

- `A5` memory poisoning — control entre sesiones;
- `A6` corpus poisoning — control entre generaciones;
- `A7` acceso al control plane — impacto sobre toda la población;
- `A8` compromiso de supply chain — pérdida sistémica de confianza.

### 6:30–7:00 · Cierre de inversión

Los modelos se comoditizan. El ganador poseerá el control plane alrededor de la inteligencia: identidad, memoria, herramientas, defensas, telemetría y feedback evolutivo.

**Ganexity no vende otra interfaz para un LLM. Ganexity construye el sistema operativo gobernado para el trabajo autónomo.**
