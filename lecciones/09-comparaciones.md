# Lección 9 — Comparaciones

Comparar valores da siempre un booleano (`true` o `false`). Es la base de toda condición.

## Operadores de comparación

```javascript
console.log(5 > 3);    // true   mayor que
console.log(5 < 3);    // false  menor que
console.log(5 >= 5);   // true   mayor o igual
console.log(5 <= 4);   // false  menor o igual
console.log(5 === 5);  // true   igual (valor Y tipo)
console.log(5 !== 3);  // true   distinto
```

## La trampa más famosa: === vs ==

JavaScript tiene dos formas de comparar igualdad:

```javascript
console.log(5 === "5");  // false → tipos distintos (number vs string)
console.log(5 == "5");   // true  → ¡convierte y compara solo el valor!
```

- `===` compara **valor y tipo**. Es estricto y predecible.
- `==` convierte tipos por detrás y produce resultados confusos.

**Regla de oro: usa siempre `===` y `!==`.** Olvídate de `==`. Te ahorrará horas de errores difíciles de encontrar.

```javascript
const entrada = "5";          // viene de un formulario, es string

if (entrada === 5) { ... }    // false → ojo, no es number
if (Number(entrada) === 5) { ... } // ✅ convierte primero
```

## Comparar textos

Funciona alfabéticamente y distingue mayúsculas:

```javascript
console.log("a" === "a");   // true
console.log("a" === "A");   // false → distinta mayúscula
```

## Ejercicio

Comprueba qué devuelven `"10" === 10`, `"10" == 10` y `Number("10") === 10`. Razona por qué cada uno da lo que da.

---
⬅️ [Anterior](08-operadores-logicos.md) · ➡️ [Siguiente: switch](10-switch.md)
