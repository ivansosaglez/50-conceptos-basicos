# Lección 3 — Tipos de datos

No todos los datos son iguales. Un número se trata distinto que un texto. Esos "tipos de cosa" se llaman **tipos de datos**. Conocer los básicos te evita muchos errores.

## Los tipos esenciales

```javascript
const numero = 42;            // number  → números (enteros o decimales)
const texto = "Hola";         // string  → texto, siempre entre comillas
const activo = true;          // boolean → solo true o false
const nada = null;            // null    → "valor vacío" intencionado
let sinValor;                 // undefined → variable sin asignar todavía
```

- **number**: `7`, `-3`, `9.99`. No lleva comillas.
- **string**: `"Hola"`, `'Ana'`. Siempre entre comillas (dobles o simples).
- **boolean**: solo dos valores, `true` (verdadero) o `false` (falso). Base de toda decisión en programación.
- **null** y **undefined**: representan "ausencia de valor". Los verás a fondo en la Lección 41.

## Cómo saber el tipo de algo

El operador `typeof` te dice el tipo de un valor:

```javascript
console.log(typeof 42);        // "number"
console.log(typeof "Hola");    // "string"
console.log(typeof true);      // "boolean"
```

## Cuidado: el número con comillas NO es número

```javascript
const a = 5;        // number
const b = "5";      // string (texto que parece número)

console.log(a + a); // 10  → suma
console.log(b + b); // "55" → une dos textos
```

Este es uno de los tropiezos más comunes al empezar. Si un dato viene de un formulario o de internet, normalmente llega como **string**, aunque parezca número.

## Ejercicio

Crea una variable de cada tipo (number, string, boolean) y usa `typeof` para comprobar cada una en la consola.

---
⬅️ [Anterior](02-variables.md) · ➡️ [Siguiente: Operadores](04-operadores.md)
