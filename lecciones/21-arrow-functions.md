# Lección 21 — Arrow functions

Las **arrow functions** (funciones flecha) son una forma más corta de escribir funciones. Verás esta sintaxis en todas partes en JavaScript moderno, sobre todo con `map`, `filter` y compañía (Módulo 5).

## De función normal a flecha

```javascript
// Función normal
function sumar(a, b) {
  return a + b;
}

// Arrow function equivalente
const sumar = (a, b) => {
  return a + b;
};
```

Cambios: desaparece la palabra `function`, el nombre va delante con `const`, y aparece la flecha `=>` entre los paréntesis y las llaves.

## Versión aún más corta

Si la función **solo devuelve un valor**, puedes quitar las llaves y el `return`:

```javascript
const sumar = (a, b) => a + b;
const doble = n => n * 2;          // un solo parámetro: paréntesis opcionales
const saludar = () => "Hola";      // sin parámetros: paréntesis vacíos
```

Esto se llama *return implícito*: lo que pones después de `=>` se devuelve automáticamente.

## Cuándo las usarás

Sobre todo como **funciones cortas que pasas a otras funciones**:

```javascript
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2);   // [2, 4, 6]
```

No te preocupes si `map` aún no te suena: lo verás pronto. Solo familiarízate con la sintaxis `n => n * 2`.

## ¿Cuál usar?

Para funciones normales con nombre, ambas valen. Las flecha brillan en código corto y "de paso". Hay una diferencia técnica con `this` (Lección 34) que de momento puedes ignorar.

## Ejercicio

Reescribe como arrow function: `function cuadrado(n) { return n * n; }`. Hazlo primero con llaves y luego en versión corta de una línea.

---
⬅️ [Anterior](20-scope.md) · ➡️ [Siguiente: Funciones como valores](22-funciones-como-valores.md)
