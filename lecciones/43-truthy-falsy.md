# Lección 43 — Truthy y falsy

En un `if`, JavaScript no necesita un booleano exacto: **cualquier valor** se interpreta como verdadero o falso. A esos valores se les llama *truthy* (cuentan como `true`) y *falsy* (cuentan como `false`).

## Los valores falsy (apréndetelos)

Solo hay **unos pocos**. Estos se comportan como `false`:

```javascript
false
0
""          // string vacío
null
undefined
NaN
```

**Todo lo demás es truthy**, incluido lo que podría engañarte:

```javascript
"0"         // truthy (¡es un texto, no vacío!)
"false"     // truthy (texto con contenido)
[]          // truthy (array vacío)
{}          // truthy (objeto vacío)
-1          // truthy (cualquier número que no sea 0)
```

## Para qué sirve

Permite comprobaciones cortas y naturales:

```javascript
const nombre = "";

if (nombre) {
  console.log("Hola " + nombre);
} else {
  console.log("Falta el nombre");   // se ejecuta: "" es falsy
}
```

En vez de `if (nombre !== "" && nombre !== null)`, basta `if (nombre)`. Cubre "vacío, null o sin definir" de golpe.

## Casos prácticos

```javascript
const lista = [];
if (lista.length) { ... }   // 0 es falsy → array vacío = false

function saludar(nombre) {
  nombre = nombre || "amigo";   // si no hay nombre, usa "amigo"
  console.log("Hola " + nombre);
}
```

## ⚠️ El truco del 0

Cuidado cuando `0` es un valor válido:

```javascript
const stock = 0;
if (stock) { ... }   // ❌ no entra: 0 es falsy, ¡pero 0 es un stock real!
if (stock != null) { ... }   // ✅ mejor si 0 cuenta
```

Para esos casos, usa el `??` de la Lección 41, que solo reacciona a `null`/`undefined`, no a `0` ni `""`.

## Ejercicio

Comprueba en consola si son truthy o falsy: `""`, `"hola"`, `0`, `"0"`, `[]`, `null`. Pista: usa `if (valor) console.log("truthy"); else console.log("falsy");`.

---
⬅️ [Anterior](42-coercion.md) · ➡️ [Siguiente: Errores y try/catch](44-errores.md)
