(function () {
  const portada = document.getElementById("portada");
  const app = document.getElementById("app");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const btnMenu = document.getElementById("btn-menu");
  const btnEmpezar = document.getElementById("btn-empezar");
  const rutaModulo = document.getElementById("ruta-modulo");
  const rutaLeccion = document.getElementById("ruta-leccion");
  const barraGlobal = document.getElementById("barra-global");
  const progresoTexto = document.getElementById("progreso-texto");

  const unidades = Array.from(document.querySelectorAll(".unidad"));
  const navBotones = Array.from(document.querySelectorAll(".nav-leccion"));
  const total = unidades.length;

  const STORAGE_KEY = "curso-progreso-v1";
  let estado = cargarEstado();

  function cargarEstado() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { unidad: 0, steps: {}, completadas: {} };
  }
  function guardarEstado() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(estado)); } catch (e) {}
  }

  // Construye segmentos de progreso por step dentro de cada unidad
  unidades.forEach((u) => {
    const totalSteps = parseInt(u.dataset.totalSteps, 10);
    const barra = u.querySelector(".unidad-progreso-barra");
    for (let i = 0; i < totalSteps; i++) {
      const seg = document.createElement("div");
      seg.className = "seg";
      seg.innerHTML = "<i></i>";
      barra.appendChild(seg);
    }
  });

  function mostrarUnidad(index, opts) {
    opts = opts || {};
    index = Math.max(0, Math.min(total - 1, index));
    unidades.forEach((u, i) => u.classList.toggle("activa", i === index));
    navBotones.forEach((b) => b.classList.toggle("activa", parseInt(b.dataset.unidad, 10) === index));

    estado.unidad = index;
    const stepGuardado = opts.step != null ? opts.step : (estado.steps[index] || 0);
    mostrarStep(index, stepGuardado);

    const activo = navBotones[index];
    if (activo) {
      const li = activo.closest("li");
      if (li) li.scrollIntoView({ block: "nearest" });
      const modulo = activo.closest(".nav-modulo").querySelector("h3").textContent;
      rutaModulo.textContent = modulo;
      rutaLeccion.textContent = activo.querySelector(".nav-titulo").textContent;
    }

    guardarEstado();
    actualizarProgresoGlobal();
    window.scrollTo(0, 0);
    const main = document.querySelector(".contenido");
    if (main) main.scrollTop = 0;
    cerrarSidebarMovil();
  }

  function mostrarStep(unidadIndex, stepIndex) {
    const unidad = unidades[unidadIndex];
    const steps = Array.from(unidad.querySelectorAll(".step"));
    const totalSteps = steps.length;
    stepIndex = Math.max(0, Math.min(totalSteps - 1, stepIndex));

    steps.forEach((s, i) => s.classList.toggle("activo", i === stepIndex));

    const segs = unidad.querySelectorAll(".unidad-progreso .seg > i");
    segs.forEach((seg, i) => { seg.style.width = i <= stepIndex ? "100%" : "0%"; });

    unidad.querySelector(".step-actual").textContent = stepIndex + 1;
    const prevBtn = unidad.querySelector(".btn-prev");
    const nextBtn = unidad.querySelector(".btn-next");
    prevBtn.disabled = stepIndex === 0 && unidadIndex === 0;
    nextBtn.querySelector(".btn-label").textContent =
      stepIndex === totalSteps - 1
        ? (unidadIndex === total - 1 ? "Fin del curso" : "Siguiente lección")
        : "Siguiente";
    nextBtn.disabled = stepIndex === totalSteps - 1 && unidadIndex === total - 1;

    estado.steps[unidadIndex] = stepIndex;
    if (stepIndex === totalSteps - 1) {
      estado.completadas[unidadIndex] = true;
      const btn = navBotones[unidadIndex];
      if (btn) btn.classList.add("completa");
    }
    guardarEstado();
  }

  function siguiente(unidadIndex) {
    const unidad = unidades[unidadIndex];
    const totalSteps = parseInt(unidad.dataset.totalSteps, 10);
    const actual = estado.steps[unidadIndex] || 0;
    if (actual < totalSteps - 1) {
      mostrarStep(unidadIndex, actual + 1);
    } else if (unidadIndex < total - 1) {
      mostrarUnidad(unidadIndex + 1, { step: 0 });
    }
  }

  function anterior(unidadIndex) {
    const actual = estado.steps[unidadIndex] || 0;
    if (actual > 0) {
      mostrarStep(unidadIndex, actual - 1);
    } else if (unidadIndex > 0) {
      const prevTotal = parseInt(unidades[unidadIndex - 1].dataset.totalSteps, 10);
      mostrarUnidad(unidadIndex - 1, { step: prevTotal - 1 });
    }
  }

  function actualizarProgresoGlobal() {
    const completas = Object.keys(estado.completadas).length;
    const pct = total ? Math.round((completas / total) * 100) : 0;
    barraGlobal.style.width = pct + "%";
    progresoTexto.textContent = completas + " / " + total;
  }

  unidades.forEach((unidad, i) => {
    unidad.querySelector(".btn-prev").addEventListener("click", () => anterior(i));
    unidad.querySelector(".btn-next").addEventListener("click", () => siguiente(i));
  });

  navBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.unidad, 10);
      mostrarUnidad(idx, { step: 0 });
    });
  });

  function abrirSidebarMovil() { sidebar.classList.add("abierta"); overlay.classList.add("visible"); }
  function cerrarSidebarMovil() { sidebar.classList.remove("abierta"); overlay.classList.remove("visible"); }
  btnMenu.addEventListener("click", () => {
    sidebar.classList.contains("abierta") ? cerrarSidebarMovil() : abrirSidebarMovil();
  });
  overlay.addEventListener("click", cerrarSidebarMovil);

  document.addEventListener("keydown", (e) => {
    if (!app.classList.contains("activa")) return;
    if (e.key === "ArrowRight") siguiente(estado.unidad);
    if (e.key === "ArrowLeft") anterior(estado.unidad);
  });

  function entrarAlCurso() {
    portada.style.display = "none";
    app.classList.add("activa");
    mostrarUnidad(estado.unidad || 0);
  }

  btnEmpezar.addEventListener("click", entrarAlCurso);

  // Marca como completas las unidades ya vistas al cargar
  Object.keys(estado.completadas).forEach((i) => {
    const btn = navBotones[parseInt(i, 10)];
    if (btn) btn.classList.add("completa");
  });
})();
