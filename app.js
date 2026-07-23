(() => {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const { B, UI, FLOWS, CATEGORY, LAYERS, NODES, EDGES, INVARIANTS } = window.GANEXITY_DATA;


  function readStoredLanguage() {
    try {
      return localStorage.getItem("ganexity-map-lang") || "bg";
    } catch {
      return "bg";
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem("ganexity-map-lang", language);
    } catch {
      // Storage can be unavailable for local file previews; the map still works.
    }
  }

  const state = {
    lang: readStoredLanguage(),
    selected: "CONTROLLER",
    transform: { x: 0, y: 0, scale: 1 },
    drag: null
  };

  const byId = new Map(NODES.map((node) => [node.id, node]));
  const dom = {
    svg: document.getElementById("systemMap"),
    viewport: document.getElementById("viewport"),
    mapViewport: document.getElementById("mapViewport"),
    layers: document.getElementById("layerBackplates"),
    edges: document.getElementById("edgeLayer"),
    particles: document.getElementById("particleLayer"),
    nodes: document.getElementById("nodeLayer"),
    annotations: document.getElementById("annotationLayer"),
    legend: document.getElementById("flowLegend"),
    invariants: document.getElementById("invariantList"),
    inspectorLayer: document.getElementById("inspectorLayer"),
    inspectorTick: document.getElementById("inspectorTick"),
    inspectorName: document.getElementById("inspectorName"),
    inspectorSubtitle: document.getElementById("inspectorSubtitle"),
    inspectorInput: document.getElementById("inspectorInput"),
    inspectorOutput: document.getElementById("inspectorOutput"),
    inspectorFailure: document.getElementById("inspectorFailure"),
    inspectorStrategy: document.getElementById("inspectorStrategy"),
    modal: document.getElementById("nodeModal"),
    modalClose: document.getElementById("modalClose"),
    modalLayer: document.getElementById("modalLayer"),
    modalTitle: document.getElementById("modalTitle"),
    modalSubtitle: document.getElementById("modalSubtitle"),
    modalInput: document.getElementById("modalInput"),
    modalOutput: document.getElementById("modalOutput"),
    modalTick: document.getElementById("modalTick"),
    modalFailure: document.getElementById("modalFailure"),
    modalStrategy: document.getElementById("modalStrategy")
  };

  function text(value) {
    if (typeof value === "string") return value;
    return value?.[state.lang] ?? value?.bg ?? "";
  }

  function svgEl(tag, attrs = {}, content = null) {
    const element = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => {
      if (value !== undefined && value !== null) element.setAttribute(key, String(value));
    });
    if (content !== null) element.textContent = content;
    return element;
  }

  function clear(element) {
    while (element.firstChild) element.removeChild(element.firstChild);
  }

  function renderTranslations() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (UI[state.lang][key] !== undefined) element.textContent = UI[state.lang][key];
    });

    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.lang === state.lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderLegend() {
    clear(dom.legend);
    Object.entries(FLOWS).forEach(([id, flow]) => {
      const item = document.createElement("div");
      item.className = "flow-item";
      item.style.setProperty("--flow-color", flow.color);
      item.innerHTML = `
        <span class="flow-swatch" aria-hidden="true"></span>
        <span><strong>${text(flow.label)}</strong><small>${text(flow.description)}</small></span>
      `;
      dom.legend.appendChild(item);
    });
  }

  function renderInvariants() {
    clear(dom.invariants);
    INVARIANTS[state.lang].forEach((value) => {
      const li = document.createElement("li");
      li.textContent = value;
      dom.invariants.appendChild(li);
    });
  }

  function renderLayers() {
    clear(dom.layers);
    LAYERS.forEach((layer) => {
      const group = svgEl("g");
      const plate = svgEl("rect", {
        x: layer.x, y: layer.y, width: layer.w, height: layer.h,
        class: `layer-backplate ${layer.className}`
      });
      const title = svgEl("text", {
        x: layer.x + 24,
        y: layer.y + 34,
        class: `layer-title ${layer.className ? `accent-${layer.className}` : ""}`
      }, text(layer.title));
      const tick = svgEl("text", {
        x: layer.x + layer.w - 24,
        y: layer.y + 34,
        class: "layer-tick",
        "text-anchor": "end"
      }, layer.tick);
      group.append(plate, title, tick);
      dom.layers.appendChild(group);
    });

    const coreHalo = svgEl("ellipse", {
      cx: 2072, cy: 787, rx: 156, ry: 126, class: "core-halo", opacity: ".42"
    });
    const ringOne = svgEl("ellipse", {
      cx: 2072, cy: 787, rx: 132, ry: 104, class: "core-ring"
    });
    const ringTwo = svgEl("ellipse", {
      cx: 2072, cy: 787, rx: 164, ry: 76, class: "core-ring alt",
      transform: "rotate(28 2072 787)"
    });
    dom.layers.append(coreHalo, ringOne, ringTwo);
  }

  function nodePortPosition(node, side) {
    if (side === "left") return { x: node.x, y: node.y + node.h / 2 };
    if (side === "right") return { x: node.x + node.w, y: node.y + node.h / 2 };
    if (side === "top") return { x: node.x + node.w / 2, y: node.y };
    return { x: node.x + node.w / 2, y: node.y + node.h };
  }

  function edgeEndpoints(edge) {
    const source = byId.get(edge.from);
    const target = byId.get(edge.to);
    if (!source || !target) throw new Error(`Unknown edge endpoint: ${edge.from} -> ${edge.to}`);

    if (edge.vertical) {
      return {
        source: nodePortPosition(source, "bottom"),
        target: nodePortPosition(target, "top")
      };
    }

    const targetIsRight = target.x >= source.x + source.w * 0.45;
    const sourceIsAbove = target.y > source.y + source.h && Math.abs(target.x - source.x) < 260;

    if (sourceIsAbove) {
      return {
        source: nodePortPosition(source, "bottom"),
        target: nodePortPosition(target, "top")
      };
    }

    return targetIsRight
      ? { source: nodePortPosition(source, "right"), target: nodePortPosition(target, "left") }
      : { source: nodePortPosition(source, "left"), target: nodePortPosition(target, "right") };
  }

  function buildPath(edge) {
    const { source, target } = edgeEndpoints(edge);
    const dx = target.x - source.x;
    const dy = target.y - source.y;

    if (edge.vertical || (Math.abs(dx) < 90 && Math.abs(dy) > 70)) {
      const midY = source.y + dy * 0.5;
      return {
        d: `M ${source.x} ${source.y} C ${source.x} ${midY}, ${target.x} ${midY}, ${target.x} ${target.y}`,
        label: { x: source.x + 34, y: midY }
      };
    }

    if (edge.bend !== undefined) {
      const bendY = edge.bend;
      const routeY = dy >= 0
        ? Math.max(source.y, target.y) + bendY
        : Math.min(source.y, target.y) + bendY;
      const startOffset = dx >= 0 ? 58 : -58;
      const endOffset = dx >= 0 ? -58 : 58;
      const d = [
        `M ${source.x} ${source.y}`,
        `C ${source.x + startOffset} ${source.y}, ${source.x + startOffset} ${routeY}, ${source.x + startOffset * 1.45} ${routeY}`,
        `L ${target.x + endOffset * 1.45} ${routeY}`,
        `C ${target.x + endOffset} ${routeY}, ${target.x + endOffset} ${target.y}, ${target.x} ${target.y}`
      ].join(" ");
      return {
        d,
        label: { x: (source.x + target.x) / 2, y: routeY - 8 }
      };
    }

    const control = Math.max(70, Math.abs(dx) * 0.42);
    const direction = dx >= 0 ? 1 : -1;
    return {
      d: `M ${source.x} ${source.y} C ${source.x + control * direction} ${source.y}, ${target.x - control * direction} ${target.y}, ${target.x} ${target.y}`,
      label: { x: (source.x + target.x) / 2, y: (source.y + target.y) / 2 - 9 }
    };
  }

  function renderEdges() {
    clear(dom.edges);
    clear(dom.particles);

    EDGES.forEach((edge, index) => {
      const flow = FLOWS[edge.type];
      const geometry = buildPath(edge);
      const pathId = `flow-path-${index}`;

      const path = svgEl("path", {
        id: pathId,
        d: geometry.d,
        class: `edge-path ${edge.secondary ? "secondary" : ""} ${edge.feedback ? "feedback" : ""}`,
        style: `--edge-color:${flow.color};--edge-marker:url(#arrow-${edge.type})`
      });
      dom.edges.appendChild(path);

      if (edge.label && !edge.secondary) {
        const labelText = text(edge.label);
        const estimatedWidth = Math.max(48, labelText.length * 5.8 + 18);
        const bg = svgEl("rect", {
          x: geometry.label.x - estimatedWidth / 2,
          y: geometry.label.y - 12,
          width: estimatedWidth,
          height: 20,
          class: "edge-label-bg",
          style: `--edge-color:${flow.color}`
        });
        const label = svgEl("text", {
          x: geometry.label.x,
          y: geometry.label.y + 2,
          class: "edge-label",
          style: `--edge-color:${flow.color}`
        }, labelText);
        dom.edges.append(bg, label);
      }

      const particleCount = edge.secondary ? 1 : (edge.type === "EXEC" ? 2 : 1);
      for (let particleIndex = 0; particleIndex < particleCount; particleIndex += 1) {
        const radius = edge.type === "EXEC" ? 4.2 : 3.4;
        const particle = svgEl("circle", {
          r: radius,
          class: "flow-particle",
          style: `--edge-color:${flow.color}`
        });
        const animate = svgEl("animateMotion", {
          dur: `${flow.duration + (index % 3) * 0.75}s`,
          begin: `${-((index * 0.71 + particleIndex * 2.2) % flow.duration)}s`,
          repeatCount: "indefinite",
          rotate: "auto"
        });
        animate.appendChild(svgEl("mpath", { href: `#${pathId}` }));
        particle.appendChild(animate);

        const halo = svgEl("circle", {
          r: radius + 3.6,
          class: "flow-particle-halo",
          style: `--edge-color:${flow.color}`
        });
        const haloAnimate = svgEl("animateMotion", {
          dur: `${flow.duration + (index % 3) * 0.75}s`,
          begin: `${-((index * 0.71 + particleIndex * 2.2) % flow.duration)}s`,
          repeatCount: "indefinite",
          rotate: "auto"
        });
        haloAnimate.appendChild(svgEl("mpath", { href: `#${pathId}` }));
        halo.appendChild(haloAnimate);

        dom.particles.append(halo, particle);
      }
    });
  }

  function renderNodes() {
    clear(dom.nodes);

    NODES.forEach((node) => {
      const color = CATEGORY[node.category];
      const group = svgEl("g", {
        class: `node ${state.selected === node.id ? "is-selected" : ""}`,
        tabindex: "0",
        role: "button",
        "aria-label": `${node.layer} ${text(node.title)}`,
        "data-node-id": node.id,
        style: `--node-color:${color}`
      });

      const shell = svgEl("rect", {
        x: node.x, y: node.y, width: node.w, height: node.h, class: "node-shell"
      });
      const side = svgEl("rect", {
        x: node.x, y: node.y + 13, width: 4, height: node.h - 26, rx: 2, class: "node-side"
      });
      const iconRing = svgEl("circle", {
        cx: node.x + 27, cy: node.y + 29, r: 15, class: "node-icon-ring"
      });
      const icon = svgEl("text", {
        x: node.x + 27, y: node.y + 33.5, class: "node-icon"
      }, node.icon);
      const layer = svgEl("text", {
        x: node.x + 50, y: node.y + 19, class: "node-layer"
      }, node.layer);
      const title = svgEl("text", {
        x: node.x + 50, y: node.y + 42, class: "node-title"
      }, text(node.title));
      const subtitle = svgEl("text", {
        x: node.x + 50, y: node.y + 61, class: "node-subtitle"
      }, text(node.subtitle));
      const tick = svgEl("text", {
        x: node.x + node.w - 12, y: node.y + 19, class: "node-tick"
      }, node.tick);
      const portLeft = svgEl("circle", {
        cx: node.x, cy: node.y + node.h / 2, r: 3.1, class: "node-port"
      });
      const portRight = svgEl("circle", {
        cx: node.x + node.w, cy: node.y + node.h / 2, r: 3.1, class: "node-port"
      });

      group.append(shell, side, iconRing, icon, layer, title, subtitle, tick, portLeft, portRight);
      group.addEventListener("click", () => selectNode(node.id, window.innerWidth < 900));
      group.addEventListener("dblclick", () => openModal(node));
      group.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectNode(node.id, true);
        }
      });
      dom.nodes.appendChild(group);
    });
  }

  function renderAnnotations() {
    clear(dom.annotations);

    const title = svgEl("text", {
      x: 62, y: 1026, class: "map-annotation-title"
    }, text(B("Един request. Три скорости. Една доказуема система.", "Una petición. Tres velocidades. Un sistema demostrable.")));
    const copy = svgEl("text", {
      x: 62, y: 1046, class: "map-annotation-copy"
    }, text(B("HOT PATH ms–s  /  CONTROL min–h  /  EVOLUTION w–mo", "HOT PATH ms–s  /  CONTROL min–h  /  EVOLUTION w–mo")));

    const advLine = svgEl("line", {
      x1: 1838, y1: 462, x2: 2342, y2: 462, class: "map-annotation-line"
    });
    const advTitle = svgEl("text", {
      x: 1852, y: 492, class: "map-annotation-title"
    }, text(B("Persistence > prompt attack", "Persistencia > ataque de prompt")));
    const advCopy = svgEl("text", {
      x: 1852, y: 516, class: "map-annotation-copy"
    }, text(B("A5 · A6 · A7 имат най-висок leverage", "A5 · A6 · A7 concentran el mayor apalancamiento")));

    dom.annotations.append(title, copy, advLine, advTitle, advCopy);
  }

  function updateInspector(node) {
    dom.inspectorLayer.textContent = node.layer;
    dom.inspectorTick.textContent = node.tick;
    dom.inspectorName.textContent = text(node.title);
    dom.inspectorSubtitle.textContent = text(node.subtitle);
    dom.inspectorInput.textContent = text(node.input);
    dom.inspectorOutput.textContent = text(node.output);
    dom.inspectorFailure.textContent = text(node.failure);
    dom.inspectorStrategy.textContent = text(node.strategy);
  }

  function selectNode(id, openOnMobile = false) {
    state.selected = id;
    const node = byId.get(id);
    if (!node) return;
    updateInspector(node);
    document.querySelectorAll(".node").forEach((element) => {
      element.classList.toggle("is-selected", element.dataset.nodeId === id);
    });
    if (openOnMobile) openModal(node);
  }

  function openModal(node) {
    dom.modalLayer.textContent = `${node.layer} · ${node.tick}`;
    dom.modalTitle.textContent = text(node.title);
    dom.modalSubtitle.textContent = text(node.subtitle);
    dom.modalInput.textContent = text(node.input);
    dom.modalOutput.textContent = text(node.output);
    dom.modalTick.textContent = node.tick;
    dom.modalFailure.textContent = text(node.failure);
    dom.modalStrategy.textContent = text(node.strategy);
    dom.modal.hidden = false;
    document.body.style.overflow = "hidden";
    dom.modalClose.focus();
  }

  function closeModal() {
    dom.modal.hidden = true;
    document.body.style.overflow = "";
  }

  function applyTransform() {
    const { x, y, scale } = state.transform;
    dom.viewport.setAttribute("transform", `translate(${x} ${y}) scale(${scale})`);
  }

  function resetView() {
    state.transform = { x: 0, y: 0, scale: 1 };
    applyTransform();
  }

  function setupViewportControls() {
    dom.mapViewport.addEventListener("pointerdown", (event) => {
      if (event.target.closest?.(".node")) return;
      dom.mapViewport.setPointerCapture(event.pointerId);
      dom.mapViewport.classList.add("is-dragging");
      state.drag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: state.transform.x,
        originY: state.transform.y
      };
    });

    dom.mapViewport.addEventListener("pointermove", (event) => {
      if (!state.drag || state.drag.pointerId !== event.pointerId) return;
      const rect = dom.mapViewport.getBoundingClientRect();
      const unitX = 2400 / rect.width;
      const unitY = 1500 / rect.height;
      state.transform.x = state.drag.originX + (event.clientX - state.drag.startX) * unitX;
      state.transform.y = state.drag.originY + (event.clientY - state.drag.startY) * unitY;
      applyTransform();
    });

    const stopDrag = (event) => {
      if (!state.drag || state.drag.pointerId !== event.pointerId) return;
      state.drag = null;
      dom.mapViewport.classList.remove("is-dragging");
    };

    dom.mapViewport.addEventListener("pointerup", stopDrag);
    dom.mapViewport.addEventListener("pointercancel", stopDrag);

    dom.mapViewport.addEventListener("wheel", (event) => {
      event.preventDefault();
      const oldScale = state.transform.scale;
      const nextScale = Math.min(2.5, Math.max(.72, oldScale * (event.deltaY > 0 ? .9 : 1.1)));
      if (nextScale === oldScale) return;

      const rect = dom.mapViewport.getBoundingClientRect();
      const svgX = ((event.clientX - rect.left) / rect.width) * 2400;
      const svgY = ((event.clientY - rect.top) / rect.height) * 1500;
      const ratio = nextScale / oldScale;

      state.transform.x = svgX - (svgX - state.transform.x) * ratio;
      state.transform.y = svgY - (svgY - state.transform.y) * ratio;
      state.transform.scale = nextScale;
      applyTransform();
    }, { passive: false });

    dom.mapViewport.addEventListener("dblclick", (event) => {
      if (!event.target.closest?.(".node")) resetView();
    });
  }

  function setupActions() {
    document.querySelectorAll(".language-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.lang = button.dataset.lang;
        storeLanguage(state.lang);
        renderAll();
      });
    });

    document.getElementById("printButton").addEventListener("click", () => window.print());

    document.getElementById("fullscreenButton").addEventListener("click", async () => {
      const target = document.querySelector(".architecture-card");
      try {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        } else {
          await target.requestFullscreen();
        }
      } catch (error) {
        console.warn("Fullscreen unavailable", error);
      }
    });

    dom.modalClose.addEventListener("click", closeModal);
    dom.modal.addEventListener("click", (event) => {
      if (event.target === dom.modal) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !dom.modal.hidden) closeModal();
      if (event.key === "0" && dom.modal.hidden) resetView();
    });
  }

  function renderAll() {
    renderTranslations();
    renderLegend();
    renderInvariants();
    renderLayers();
    renderEdges();
    renderNodes();
    renderAnnotations();
    updateInspector(byId.get(state.selected) || byId.get("CONTROLLER"));
    applyTransform();
  }

  setupViewportControls();
  setupActions();
  renderAll();

})();
