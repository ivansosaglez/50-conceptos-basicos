# Lección 5 — Comentarios

Un **comentario** es texto dentro del código que el ordenador **ignora**. Sirve para que tú (y otros) entendáis qué hace el código. No afecta a la ejecución.

## Dos formas de comentar

```javascript
// Esto es un comentario de una línea

/*
  Esto es un comentario
  de varias líneas
*/
```

- `//` → comenta hasta el final de la línea.
- `/* */` → comenta todo lo que haya en medio, aunque sean varias líneas.

## Para qué sirven

**1. Explicar el "por qué", no el "qué".** El código ya dice qué hace; el comentario debe aclarar la intención o algo que no es obvio.

```javascript
// ❌ obvio, sobra
let edad = 25; // asigna 25 a edad

// ✅ útil: explica una decisión
const IVA = 0.21; // 21% es el tipo general en España
```

**2. Desactivar código temporalmente** mientras pruebas:

```javascript
console.log("línea A");
// console.log("línea B");  ← esta no se ejecuta
console.log("línea C");
```

Esto se llama "comentar" una línea y es una técnica diaria para depurar.

## Buen consejo

No abuses. Demasiados comentarios obvios ensucian. El mejor código se explica casi solo con **buenos nombres de variables** (lo verás en la Lección 48). Comenta lo que sorprende, no lo evidente.

## Ejercicio

Escribe tres `console.log`, comenta el del medio con `//` para que no se ejecute, y añade arriba un comentario de bloque explicando qué hace el programa.

---
⬅️ [Anterior](04-operadores.md) · ➡️ [Siguiente: Condicionales if](06-if.md)
