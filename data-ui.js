(() => {
  "use strict";
  const B = (bg, es) => ({ bg, es });
  const UI = {
    bg: {
      headerThesis: "ОТ НАМЕРЕНИЕ ДО СЛЕДВАЩО ПОКОЛЕНИЕ",
      export: "PDF",
      present: "ПРЕЗЕНТАЦИЯ",
      heroKicker: "ИНВЕСТИТОРСКА КАРТА НА УПРАВЛЯВАН AI",
      heroTitleStrong: "ТОВА НЕ Е МОДЕЛ.",
      heroTitleLight: "ТОВА Е ЖИВА ОПЕРАЦИОННА СИСТЕМА.",
      heroSummary: "Ganexity превръща един LLM в контролирана цифрова организация: идентичност, памет, инструменти, защити, телеметрия и еволюция работят като една система.",
      metricLayers: "СЛОЯ",
      metricFlows: "ПОТОКА",
      metricGuards: "ЗАЩИТНИ ПОЗИЦИИ",
      metricThreats: "ВЕКТОРА НА АТАКА",
      metricAutonomy: "УПРАВЛЯВАНА АВТОНОМИЯ",
      mapKicker: "ВИЗУАЛНА ОПЕРАЦИОННА КАРТА",
      mapTitle: "Пълна архитектура: от входа до наследяването",
      mapMode: "LIVE SYSTEM FLOW",
      mapHint: "избери елемент за детайл",
      legendTitle: "ПОТОЦИ",
      tempoTitle: "СИСТЕМЕН ТАКТ",
      tempoCopy: "Ключовият риск е разминаването между машинната скорост на промяна и човешката скорост на надзор.",
      thesisTitle: "ИНВЕСТИЦИОННА ТЕЗА",
      thesisCopy: "Победителят няма да притежава само най-силния модел. Ще притежава control plane-а около интелекта.",
      dragHint: "Плъзни за навигация · скрол за мащаб · двоен клик за пълния изглед",
      particlesLive: "ПОТОЦИТЕ СА АКТИВНИ",
      inspectorTitle: "ИНТЕЛИГЕНТНОСТ НА ЕЛЕМЕНТА",
      inputLabel: "ВХОД",
      outputLabel: "ИЗХОД",
      cadenceLabel: "ТАКТ",
      failureLabel: "ОСНОВЕН РЕЖИМ НА ОТКАЗ",
      strategicLabel: "СТРАТЕГИЧЕСКО ЗНАЧЕНИЕ",
      invariantsTitle: "НЕПРОМЕНИМИ ПРАВИЛА",
      moatTitle: "КОМПАУНДИРАЩ МОАТ",
      moatCopy: "Всяка завършена задача подобрява оркестрацията, оценката и бъдещото поколение — без live промяна на production weights.",
      whyNowKicker: "ЗАЩО СЕГА",
      whyNowTitle: "Моделите се комодитизират. Контролът, паметта и изпълнението се превръщат в платформата.",
      pointOneTitle: "Управлявана автономия",
      pointOneCopy: "Отворената агентивност се превръща в измерима, обратима и бюджетирана операция.",
      pointTwoTitle: "Натрупващ се контекст",
      pointTwoCopy: "Паметта и резултатите създават непрехвърляемо организационно предимство.",
      pointThreeTitle: "Еволюционен flywheel",
      pointThreeCopy: "Телеметрията се превръща в evals, политики и следващо поколение без риск от live weight drift.",
      sourceLabel: "ИЗТОЧНИК",
      footerThesis: "GANEXITY // CONTROL PLANE-ЪТ ОКОЛО ИНТЕЛЕКТА",
      versionLabel: "ВЕРСИЯ"
    },
    es: {
      headerThesis: "DE LA INTENCIÓN A LA SIGUIENTE GENERACIÓN",
      export: "PDF",
      present: "PRESENTAR",
      heroKicker: "MAPA PARA INVERSORES DE IA GOBERNADA",
      heroTitleStrong: "NO ES UN MODELO.",
      heroTitleLight: "ES UN SISTEMA OPERATIVO VIVO.",
      heroSummary: "Ganexity convierte un LLM en una organización digital controlada: identidad, memoria, herramientas, defensas, telemetría y evolución operan como un único sistema.",
      metricLayers: "CAPAS",
      metricFlows: "FLUJOS",
      metricGuards: "POSICIONES DE DEFENSA",
      metricThreats: "VECTORES DE ATAQUE",
      metricAutonomy: "AUTONOMÍA GOBERNADA",
      mapKicker: "MAPA OPERATIVO VISUAL",
      mapTitle: "Arquitectura completa: de la entrada a la herencia",
      mapMode: "LIVE SYSTEM FLOW",
      mapHint: "selecciona un elemento para ver el detalle",
      legendTitle: "FLUJOS",
      tempoTitle: "CADENCIA DEL SISTEMA",
      tempoCopy: "El riesgo clave es el desfase entre la velocidad de cambio de la máquina y la velocidad humana de supervisión.",
      thesisTitle: "TESIS DE INVERSIÓN",
      thesisCopy: "El ganador no poseerá solo el modelo más potente. Poseerá el control plane alrededor de la inteligencia.",
      dragHint: "Arrastra para navegar · rueda para ampliar · doble clic para vista completa",
      particlesLive: "FLUJOS ACTIVOS",
      inspectorTitle: "INTELIGENCIA DEL ELEMENTO",
      inputLabel: "ENTRADA",
      outputLabel: "SALIDA",
      cadenceLabel: "CADENCIA",
      failureLabel: "FALLO PRINCIPAL",
      strategicLabel: "SIGNIFICADO ESTRATÉGICO",
      invariantsTitle: "REGLAS INMUTABLES",
      moatTitle: "VENTAJA ACUMULATIVA",
      moatCopy: "Cada tarea completada mejora la orquestación, la evaluación y la siguiente generación, sin modificar los pesos de producción en vivo.",
      whyNowKicker: "POR QUÉ AHORA",
      whyNowTitle: "Los modelos se comoditizan. El control, la memoria y la ejecución se convierten en la plataforma.",
      pointOneTitle: "Autonomía gobernada",
      pointOneCopy: "La agencia abierta se transforma en una operación medible, reversible y presupuestada.",
      pointTwoTitle: "Contexto acumulativo",
      pointTwoCopy: "La memoria y los resultados crean una ventaja organizativa difícil de transferir.",
      pointThreeTitle: "Flywheel evolutivo",
      pointThreeCopy: "La telemetría se convierte en evals, políticas y una nueva generación sin riesgo de deriva de pesos en vivo.",
      sourceLabel: "FUENTE",
      footerThesis: "GANEXITY // EL CONTROL PLANE ALREDEDOR DE LA INTELIGENCIA",
      versionLabel: "VERSIÓN"
    }
  };
  const FLOWS = {
    CTRL: {
      color: "#39d0ff",
      label: B("CONTROL", "CONTROL"),
      description: B("политики · рутинг · лимити", "políticas · routing · límites"),
      duration: 6.6
    },
    DATA: {
      color: "#ffb454",
      label: B("ДАННИ", "DATOS"),
      description: B("контекст · памет · доказателства", "contexto · memoria · evidencia"),
      duration: 7.4
    },
    EXEC: {
      color: "#26f2ae",
      label: B("ИЗПЪЛНЕНИЕ", "EJECUCIÓN"),
      description: B("инференс · инструменти · доставка", "inferencia · herramientas · entrega"),
      duration: 4.2
    },
    FB: {
      color: "#9f88ff",
      label: B("ОБРАТНА ВРЪЗКА", "FEEDBACK"),
      description: B("телеметрия · одит · корекция", "telemetría · auditoría · corrección"),
      duration: 8.4
    },
    GEN: {
      color: "#ff72c7",
      label: B("ПОКОЛЕНИЕ", "GENERACIÓN"),
      description: B("селекция · тренировка · наследяване", "selección · entrenamiento · herencia"),
      duration: 10.2
    },
    ADV: {
      color: "#ff5d6c",
      label: B("ПРОТИВНИК", "ADVERSARIO"),
      description: B("устойчиви вектори на атака", "vectores de ataque persistentes"),
      duration: 5.6
    }
  };
  const CATEGORY = {
    external: "#ff7a86",
    foundation: "#9f88ff",
    control: "#39d0ff",
    runtime: "#26f2ae",
    data: "#ffb454",
    safeguard: "#ff5d6c",
    memory: "#ffc266",
    evolution: "#ff72c7",
    adversarial: "#ff5d6c"
  };
  const LAYERS = [
    {
      id: "external", x: 28, y: 26, w: 1770, h: 164, className: "",
      title: B("L0 · ВЪНШЕН СУВЕРЕНИТЕТ", "L0 · SOBERANÍA EXTERNA"), tick: "mo → y"
    },
    {
      id: "foundation", x: 28, y: 210, w: 1770, h: 204, className: "foundation",
      title: B("L1 · ЛАБОРАТОРИЯ / FOUNDATION", "L1 · LABORATORIO / FOUNDATION"), tick: "w → mo"
    },
    {
      id: "control", x: 28, y: 434, w: 1770, h: 204, className: "control",
      title: B("L2 · ГЛОБАЛЕН CONTROL PLANE", "L2 · CONTROL PLANE GLOBAL"), tick: "min → h"
    },
    {
      id: "adversarial", x: 1822, y: 26, w: 548, h: 612, className: "adversarial",
      title: B("ADV · УСТОЙЧИВА АТАКУЕМА ПОВЪРХНОСТ", "ADV · SUPERFICIE DE ATAQUE PERSISTENTE"), tick: "session → generation"
    },
    {
      id: "runtime", x: 28, y: 660, w: 2342, h: 402, className: "runtime",
      title: B("L3–L12 · ГОРЕЩ ПЪТ / ЕДНА ЗАДАЧА", "L3–L12 · HOT PATH / UNA TAREA"), tick: "ms → s"
    },
    {
      id: "memory", x: 28, y: 1084, w: 1168, h: 188, className: "memory",
      title: B("L13–L14 · ПАМЕТ / ТЕЛЕМЕТРИЯ / OOB", "L13–L14 · MEMORIA / TELEMETRÍA / OOB"), tick: "min → d"
    },
    {
      id: "evolution", x: 1216, y: 1084, w: 1154, h: 388, className: "evolution",
      title: B("L15–L17 · ЕВОЛЮЦИОННО НАСЛЕДЯВАНЕ", "L15–L17 · HERENCIA EVOLUTIVA"), tick: "w → mo"
    }
  ];
  window.GANEXITY_DATA = { B, UI, FLOWS, CATEGORY, LAYERS, NODES: [], EDGES: [], INVARIANTS: {} };
})();
