# Lección 48 — Nombrar bien las variables

El mejor código se entiende sin comentarios porque los **nombres** lo explican. Nombrar bien es una de las habilidades más infravaloradas y más valiosas de un programador.

## Un nombre debe decir QUÉ guarda

```javascript
// ❌ no dicen nada
let x = 9.99;
let datos = true;
let temp = ["Ana", "Luis"];

// ✅ se entienden solos
let precio = 9.99;
let estaLogueado = true;
let nombresAlumnos = ["Ana", "Luis"];
```

Si tienes que abrir el código y leerlo entero para saber qué contiene una variable, el nombre ha fallado.

## Convenciones de JavaScript

- **camelCase** para variables y funciones: `precioTotal`, `calcularIVA`. La primera palabra en minúscula, las siguientes con mayúscula inicial.
- **Constantes "de configuración"** a veces en MAYÚSCULAS: `const IVA = 0.21`.
- **Funciones** suelen empezar por **verbo**: `obtenerUsuario`, `calcularTotal`, `validarEmail`.
- **Booleanos** suelen empezar por `es`, `tiene`, `hay`: `esValido`, `tienePermiso`.

## Ni muy corto ni muy largo

```javascript
let n;                          // ❌ demasiado críptico
let numeroDeUsuariosActivos;    // ✅ claro
let elNumeroTotalDeUsuariosQueEstanActivosAhoraMismo;  // ❌ excesivo
```

Excepción: en bucles cortos, `i`, `j` están aceptados por convención.

## Consistencia

Elige un idioma y un estilo, y mantenlo. No mezcles `userName` con `nombreUsuario` en el mismo proyecto. La coherencia hace el código predecible.

## Por qué importa de verdad

Pasarás **más tiempo leyendo** código (el tuyo de hace un mes, el de otros) que escribiéndolo. Buenos nombres convierten esa lectura en algo fluido. Es inversión, no pérdida de tiempo.

## Ejercicio

Mejora estos nombres: `let d = 30;` (días de un mes), `function calc(a, b)` (suma dos precios), `let flag = false;` (indica si el pedido está pagado).

---
⬅️ [Anterior](47-async-await.md) · ➡️ [Siguiente: Depurar](49-debugging.md)
