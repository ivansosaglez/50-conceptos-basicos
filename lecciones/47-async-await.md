# Lección 47 — async / await

`async/await` es la forma **más moderna y legible** de trabajar con código asíncrono. Hace que el código que tarda **parezca** código normal de arriba a abajo, sin `.then` encadenados.

## La idea

Es "azúcar sintáctico" sobre las promesas: por dentro siguen siendo promesas, pero se escriben de forma mucho más natural.

```javascript
async function cargarDatos() {
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  const datos = await respuesta.json();
  console.log(datos);
}
```

- `async` antes de `function` → marca que la función trabaja con asincronía.
- `await` antes de una promesa → "**espera** a que esté lista y dame el resultado", sin congelar el resto del programa.

## Comparación directa

Lo mismo con promesas y con async/await:

```javascript
// Con .then
function cargar() {
  return fetch(url)
    .then(r => r.json())
    .then(datos => console.log(datos));
}

// Con async/await → se lee como pasos normales
async function cargar() {
  const r = await fetch(url);
  const datos = await r.json();
  console.log(datos);
}
```

La segunda versión parece código síncrono de toda la vida. Por eso es la preferida hoy.

## Gestionar errores: try/catch

Aquí vuelve el `try/catch` de la Lección 44, que con async/await es la forma natural de capturar fallos:

```javascript
async function cargarDatos() {
  try {
    const r = await fetch(url);
    const datos = await r.json();
    console.log(datos);
  } catch (error) {
    console.log("Error al cargar:", error.message);
  }
}
```

## Reglas a recordar

1. `await` solo se puede usar **dentro** de una función `async`.
2. Una función `async` siempre devuelve una promesa.
3. Pon `await` delante de **cada** cosa que tarde (cada promesa).

## El recorrido asíncrono

Callbacks → promesas → async/await. Cada paso resolvió los problemas del anterior. Hoy escribirás casi todo con async/await, pero entender los tres te permite leer cualquier código.

## Ejercicio

Convierte a `async/await` esta función: `function f() { return esperar(1000).then(() => console.log("listo")); }`, donde `esperar` devuelve una promesa. Añádele un `try/catch`.

---
⬅️ [Anterior](46-promesas.md) · ➡️ [Siguiente: Nombrar variables](48-nombrar.md)
