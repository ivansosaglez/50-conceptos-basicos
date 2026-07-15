// Genera curso.html: app web de una sola página con portada, sidebar
// de navegación y cada lección dividida en "steps" (por cada ##)
// navegables con flechas ← →, a partir de los .md del curso.
import { marked } from "marked";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = import.meta.dirname;

// --- Módulos e índice, extraídos del README ---
const README = readFileSync(join(ROOT, "README.md"), "utf8");

const modulos = [];
{
  const lineas = README.split("\n");
  let moduloActual = null;
  for (const linea of lineas) {
    const m = linea.match(/^### (.+)$/);
    if (m) {
      moduloActual = { titulo: m[1], lecciones: [] };
      modulos.push(moduloActual);
      continue;
    }
    const l = linea.match(/^\d+\.\s+\[([^\]]+)\]\(lecciones\/([^)]+)\)/);
    if (l && moduloActual) {
      moduloActual.lecciones.push({ titulo: l[1], archivo: l[2] });
    }
  }
}

const recursos = [
  { titulo: "Glosario de términos", archivo: "glosario.md" },
  { titulo: "Chuleta de sintaxis", archivo: "chuleta.md" },
  { titulo: "Siguientes pasos", archivo: "siguientes-pasos.md" },
];

// Quitamos la navegación ⬅️➡️ y separadores huérfanos de cada lección.
function quitarNav(md) {
  return md
    .split("\n")
    .filter((l) => !/[⬅️➡️🏠]/.test(l))
    .join("\n")
    .replace(/\n-{3,}\s*\n\s*$/g, "\n");
}

// Divide el markdown de una lección en steps: el bloque antes del
// primer "## " es el step 1 (incluye el título "# "); cada "## "
// posterior abre un nuevo step.
function dividirEnSteps(md) {
  const lineas = quitarNav(md).split("\n");
  const steps = [];
  let actual = [];
  for (const linea of lineas) {
    if (/^## /.test(linea) && actual.length) {
      steps.push(actual.join("\n"));
      actual = [linea];
    } else {
      actual.push(linea);
    }
  }
  if (actual.length) steps.push(actual.join("\n"));
  return steps.filter((s) => s.trim().length > 0);
}

function tituloStep(stepMd, fallback) {
  const h2 = stepMd.match(/^## (.+)$/m);
  if (h2) return h2[1];
  const h1 = stepMd.match(/^# (.+)$/m);
  if (h1) return h1[1];
  return fallback;
}

// --- Construcción de las lecciones (unidad de navegación) ---
// Cada "unidad" es una lección o un recurso; cada unidad tiene N steps.
const unidades = [];

for (const modulo of modulos) {
  for (const leccion of modulo.lecciones) {
    const md = readFileSync(join(ROOT, "lecciones", leccion.archivo), "utf8");
    const stepsMd = dividirEnSteps(md);
    unidades.push({
      id: leccion.archivo.replace(/\.md$/, ""),
      titulo: leccion.titulo,
      modulo: modulo.titulo,
      steps: stepsMd.map((s, i) => ({
        titulo: tituloStep(s, `Parte ${i + 1}`),
        html: marked.parse(s),
      })),
    });
  }
}

for (const recurso of recursos) {
  const md = readFileSync(join(ROOT, "recursos", recurso.archivo), "utf8");
  const stepsMd = dividirEnSteps(md);
  unidades.push({
    id: recurso.archivo.replace(/\.md$/, ""),
    titulo: recurso.titulo,
    modulo: "Recursos extra",
    steps: stepsMd.map((s, i) => ({
      titulo: tituloStep(s, `Parte ${i + 1}`),
      html: marked.parse(s),
    })),
  });
}

// --- Sidebar (agrupado por módulo) ---
let sidebarHtml = "";
let moduloAnterior = null;
unidades.forEach((u, i) => {
  if (u.modulo !== moduloAnterior) {
    if (moduloAnterior !== null) sidebarHtml += `</ul></div>`;
    sidebarHtml += `<div class="nav-modulo"><h3>${u.modulo}</h3><ul>`;
    moduloAnterior = u.modulo;
  }
  sidebarHtml += `<li><button class="nav-leccion" data-unidad="${i}">
      <span class="nav-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="nav-titulo">${u.titulo}</span>
    </button></li>`;
});
sidebarHtml += `</ul></div>`;

// --- Contenido: cada unidad es un <article>, cada step un <div class="step"> ---
let contenidoHtml = "";
unidades.forEach((u, i) => {
  const stepsHtml = u.steps
    .map(
      (s, j) => `<div class="step" data-step="${j}">
        <div class="step-body">${s.html}</div>
      </div>`
    )
    .join("");

  contenidoHtml += `<article class="unidad" id="u-${i}" data-unidad="${i}" data-total-steps="${u.steps.length}">
    <div class="unidad-progreso">
      <div class="unidad-progreso-barra"></div>
    </div>
    ${stepsHtml}
    <nav class="step-nav">
      <button class="btn-step btn-prev" type="button">
        <span class="btn-arrow">←</span> <span class="btn-label">Anterior</span>
      </button>
      <div class="step-contador"><span class="step-actual">1</span> / <span class="step-total">${u.steps.length}</span></div>
      <button class="btn-step btn-next" type="button">
        <span class="btn-label">Siguiente</span> <span class="btn-arrow">→</span>
      </button>
    </nav>
  </article>`;
});

const totalUnidades = unidades.length;

const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>50 Conceptos Básicos para Aprender a Programar</title>
<style>
  :root {
    --azul: #4f7cff;
    --morado: #9b5de5;
    --rosa: #f15bb5;
    --fondo: #0f1220;
    --panel: #171b2e;
    --panel-2: #1e2338;
    --borde: #2b3152;
    --texto: #e8eaf6;
    --texto-tenue: #a4a9c9;
    --code-bg: #121524;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--texto); line-height: 1.7; font-size: 16px; margin: 0;
    background: var(--fondo);
  }

  /* ---------- Portada ---------- */
  .portada {
    min-height: 100vh; display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
    background:
      radial-gradient(circle at 20% 20%, rgba(155,93,229,.35), transparent 55%),
      radial-gradient(circle at 80% 30%, rgba(241,91,181,.28), transparent 50%),
      radial-gradient(circle at 50% 90%, rgba(79,124,255,.35), transparent 55%),
      linear-gradient(160deg, #12142a 0%, #191d3a 55%, #10122a 100%);
    color: #fff; padding: 60px 24px; position: relative; overflow: hidden;
  }
  .portada .emoji {
    font-size: 72px; margin-bottom: 18px;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,.35));
  }
  .portada h1 {
    font-size: clamp(32px, 5vw, 52px); margin: 0 0 18px; line-height: 1.15;
    max-width: 780px; font-weight: 800; letter-spacing: -0.5px;
    color: #ffffff;
    text-shadow: 0 4px 30px rgba(0,0,0,.45);
  }
  .portada .sub {
    font-size: clamp(16px, 2vw, 20px); max-width: 560px; margin-bottom: 34px;
    color: #f1f2fb;
    text-shadow: 0 2px 12px rgba(0,0,0,.4);
  }
  .portada .meta {
    font-size: 14px; color: #dcdeef;
    border-top: 1px solid rgba(255,255,255,.25); padding-top: 20px;
    display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; max-width: 520px;
  }
  .portada .meta span {
    background: rgba(255,255,255,.1); padding: 6px 14px; border-radius: 999px;
    border: 1px solid rgba(255,255,255,.18);
  }
  .btn-empezar {
    margin: 40px 0 32px; padding: 16px 38px; font-size: 17px; font-weight: 700;
    color: #fff; background: linear-gradient(135deg, var(--azul), var(--morado));
    border: none; border-radius: 999px; cursor: pointer;
    box-shadow: 0 10px 30px rgba(79,124,255,.45);
    transition: transform .18s ease, box-shadow .18s ease;
  }
  .btn-empezar:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(79,124,255,.55); }
  .btn-empezar:active { transform: translateY(0); }
  .scroll-hint {
    position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
    color: rgba(255,255,255,.7); font-size: 13px; display: flex; flex-direction: column;
    align-items: center; gap: 6px; animation: rebote 2s infinite;
  }
  @keyframes rebote { 0%,100% { transform: translate(-50%,0); } 50% { transform: translate(-50%,8px); } }

  /* ---------- Layout app ---------- */
  .app { display: none; }
  .app.activa { display: grid; grid-template-columns: 300px 1fr; min-height: 100vh; }

  /* Sidebar */
  .sidebar {
    background: var(--panel); border-right: 1px solid var(--borde);
    padding: 20px 14px 40px; overflow-y: auto; max-height: 100vh; position: sticky; top: 0;
  }
  .sidebar-header {
    display: flex; align-items: center; gap: 10px; padding: 6px 8px 18px;
    border-bottom: 1px solid var(--borde); margin-bottom: 14px;
  }
  .sidebar-header .logo { font-size: 22px; }
  .sidebar-header .titulo { font-weight: 700; font-size: 14px; line-height: 1.3; color: var(--texto); }
  .progreso-global {
    margin: 0 8px 18px; padding: 12px 14px; background: var(--panel-2);
    border-radius: 12px; border: 1px solid var(--borde);
  }
  .progreso-global .label { font-size: 12px; color: var(--texto-tenue); margin-bottom: 8px; display: flex; justify-content: space-between; }
  .progreso-global .barra-fondo { height: 6px; background: #2a2f4d; border-radius: 999px; overflow: hidden; }
  .progreso-global .barra { height: 100%; width: 0%; border-radius: 999px;
    background: linear-gradient(90deg, var(--azul), var(--morado), var(--rosa));
    transition: width .3s ease; }

  .nav-modulo h3 {
    font-size: 11px; text-transform: uppercase; letter-spacing: .8px;
    color: var(--texto-tenue); margin: 18px 8px 8px; font-weight: 700;
  }
  .nav-modulo ul { list-style: none; margin: 0; padding: 0; }
  .nav-leccion {
    width: 100%; display: flex; align-items: center; gap: 10px;
    text-align: left; background: none; border: none; color: var(--texto-tenue);
    padding: 9px 8px; border-radius: 8px; cursor: pointer; font-size: 13.5px;
    transition: background .15s ease, color .15s ease;
  }
  .nav-leccion:hover { background: var(--panel-2); color: var(--texto); }
  .nav-leccion.activa { background: linear-gradient(90deg, rgba(79,124,255,.18), rgba(155,93,229,.12)); color: #fff; font-weight: 600; }
  .nav-leccion.completa .nav-num { background: linear-gradient(135deg, var(--azul), var(--morado)); color: #fff; }
  .nav-num {
    flex: 0 0 auto; width: 24px; height: 24px; border-radius: 50%;
    background: #2a2f4d; color: var(--texto-tenue); font-size: 10.5px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-titulo { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* Contenido principal */
  .contenido { padding: 0; max-width: 100%; }
  .topbar {
    position: sticky; top: 0; z-index: 5; display: flex; align-items: center; gap: 14px;
    padding: 14px 28px; background: rgba(15,18,32,.85); backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--borde);
  }
  .topbar-menu-btn {
    display: none; background: var(--panel-2); border: 1px solid var(--borde); color: var(--texto);
    width: 38px; height: 38px; border-radius: 10px; font-size: 16px; cursor: pointer;
  }
  .topbar .ruta { font-size: 13px; color: var(--texto-tenue); }
  .topbar .ruta strong { color: var(--texto); }

  .unidad { display: none; padding: 40px 48px 60px; max-width: 820px; margin: 0 auto; }
  .unidad.activa { display: block; animation: aparecer .35s ease; }
  @keyframes aparecer { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

  .unidad-progreso { display: flex; gap: 6px; margin-bottom: 32px; }
  .unidad-progreso-barra { display: flex; gap: 6px; width: 100%; }
  .unidad-progreso .seg {
    height: 5px; flex: 1; background: #2a2f4d; border-radius: 999px; overflow: hidden;
  }
  .unidad-progreso .seg > i {
    display: block; height: 100%; width: 0%; border-radius: 999px;
    background: linear-gradient(90deg, var(--azul), var(--rosa)); transition: width .25s ease;
  }

  .step { display: none; }
  .step.activo { display: block; animation: aparecer .3s ease; }

  .step-body h1 { font-size: 30px; color: #fff; margin: 0 0 20px; font-weight: 800; letter-spacing: -.3px; }
  .step-body h2 {
    font-size: 21px; color: #cdd3ff; margin-top: 0; margin-bottom: 18px; font-weight: 700;
    padding-bottom: 10px; border-bottom: 1px solid var(--borde);
  }
  .step-body h3 { font-size: 17px; color: #b8a4ff; margin-top: 1.4em; }
  .step-body p, .step-body li { font-size: 16px; color: var(--texto); }
  .step-body p { margin: 1em 0; }
  .step-body strong { color: #fff; }
  .step-body ul, .step-body ol { padding-left: 1.4em; }
  .step-body li { margin: .4em 0; }

  .step-body code {
    font-family: "SF Mono", Menlo, Consolas, monospace;
    background: rgba(241,91,181,.14); padding: 2px 7px; border-radius: 5px;
    font-size: 14px; color: #ff9de2;
  }
  .step-body pre {
    background: var(--code-bg); color: #e0e0e0; padding: 18px 20px;
    border-radius: 12px; overflow-x: auto; font-size: 14px; line-height: 1.6;
    border: 1px solid var(--borde); margin: 1.3em 0;
    box-shadow: 0 8px 24px rgba(0,0,0,.25);
  }
  .step-body pre code { background: none; color: #dcdfef; padding: 0; font-size: 14px; }
  .step-body table { border-collapse: collapse; width: 100%; margin: 1.3em 0; font-size: 14.5px; }
  .step-body th, .step-body td { border: 1px solid var(--borde); padding: 10px 14px; text-align: left; }
  .step-body th { background: var(--panel-2); color: #cdd3ff; }
  .step-body tr:nth-child(even) td { background: rgba(255,255,255,.02); }
  .step-body blockquote {
    border-left: 4px solid var(--azul); background: var(--panel-2);
    margin: 1.3em 0; padding: 12px 18px; color: var(--texto-tenue); font-style: italic;
    border-radius: 0 10px 10px 0;
  }
  .step-body a { color: #7ea6ff; text-decoration: underline; text-decoration-color: rgba(126,166,255,.35); }
  .step-body a:hover { text-decoration-color: #7ea6ff; }
  .step-body hr { border: none; border-top: 1px solid var(--borde); margin: 2em 0; }

  /* Navegación de steps */
  .step-nav {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 44px; padding-top: 24px; border-top: 1px solid var(--borde); gap: 16px;
  }
  .btn-step {
    display: flex; align-items: center; gap: 8px; padding: 12px 20px;
    border-radius: 12px; border: 1px solid var(--borde); background: var(--panel-2);
    color: var(--texto); font-size: 14.5px; font-weight: 600; cursor: pointer;
    transition: background .15s ease, transform .15s ease, border-color .15s ease;
  }
  .btn-step:hover:not(:disabled) { background: #262c4a; border-color: #3a4270; transform: translateY(-1px); }
  .btn-step:disabled { opacity: .35; cursor: default; }
  .btn-next {
    background: linear-gradient(135deg, var(--azul), var(--morado)); border: none; color: #fff;
    box-shadow: 0 6px 18px rgba(79,124,255,.35);
  }
  .btn-next:hover:not(:disabled) { box-shadow: 0 8px 22px rgba(79,124,255,.45); }
  .btn-arrow { font-size: 16px; }
  .step-contador { font-size: 13px; color: var(--texto-tenue); font-variant-numeric: tabular-nums; white-space: nowrap; }

  .overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 15; }
  .overlay.visible { display: block; }

  /* Responsive */
  @media (max-width: 880px) {
    .app.activa { grid-template-columns: 1fr; }
    .sidebar {
      position: fixed; inset: 0 auto 0 0; width: 82vw; max-width: 320px;
      transform: translateX(-100%); transition: transform .25s ease; z-index: 20;
      box-shadow: 20px 0 40px rgba(0,0,0,.4);
    }
    .sidebar.abierta { transform: translateX(0); }
    .topbar-menu-btn { display: block; }
    .unidad { padding: 28px 20px 48px; }
    .step-body h1 { font-size: 25px; }
  }

  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #2f3557; border-radius: 999px; }
  ::-webkit-scrollbar-thumb:hover { background: #3d456e; }
</style>
</head>
<body>

  <div class="portada" id="portada">
    <div class="emoji">🚀</div>
    <h1>50 Conceptos Básicos para Aprender a Programar</h1>
    <div class="sub">De no saber nada a pensar como programador. Sin relleno. Ejemplos en JavaScript.</div>
    <button class="btn-empezar" id="btn-empezar" type="button">Empezar el curso →</button>
    <div class="meta">
      <span>🎯 50 lecciones</span>
      <span>📖 Glosario</span>
      <span>⚡ Chuleta de sintaxis</span>
    </div>
    <div class="scroll-hint">▼</div>
  </div>

  <div class="overlay" id="overlay"></div>
  <div class="app" id="app">
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <span class="logo">🚀</span>
        <span class="titulo">50 Conceptos para<br>Aprender a Programar</span>
      </div>
      <div class="progreso-global">
        <div class="label"><span>Tu progreso</span><span id="progreso-texto">0 / ${totalUnidades}</span></div>
        <div class="barra-fondo"><div class="barra" id="barra-global"></div></div>
      </div>
      ${sidebarHtml}
    </aside>

    <main class="contenido">
      <div class="topbar">
        <button class="topbar-menu-btn" id="btn-menu" type="button">☰</button>
        <div class="ruta"><strong id="ruta-modulo">—</strong> · <span id="ruta-leccion">—</span></div>
      </div>
      ${contenidoHtml}
    </main>
  </div>

<script>
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
</script>
</body>
</html>`;

writeFileSync(join(ROOT, "curso.html"), html);
writeFileSync(join(ROOT, "index.html"), html);
console.log("✅ curso.html + index.html generados (" + (html.length / 1024).toFixed(0) + " KB) — " + unidades.length + " unidades");
