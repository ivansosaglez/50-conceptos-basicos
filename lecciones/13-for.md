# Lección 13 — Bucle for

El `for` es el bucle más usado. Junta las tres partes (inicio, condición, avance) en una sola línea, perfecto cuando **sabes cuántas veces** quieres repetir.

## Sintaxis

```javascript
for (inicio; condición; avance) {
  // código que se repite
}
```

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Número " + i);
}
// Número 1 ... Número 5
```

Compáralo con el `while` de la lección anterior: las mismas tres partes, pero todas juntas y a la vista.

## Desglose

- `let i = 1` → se ejecuta **una vez** al empezar.
- `i <= 5` → se comprueba **antes de cada vuelta**; si es false, termina.
- `i++` → se ejecuta **al final de cada vuelta**.

La variable `i` (de *index*, índice) es el contador. Por convención se llama `i`, luego `j`, `k`.

## Recorrer empezando en 0

En programación se cuenta desde **0** muchísimo (lo verás con los arrays). Patrón clásico:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);   // 0, 1, 2, 3, 4
}
```

Fíjate: `i < 5` con inicio en 0 da **5 vueltas** (0,1,2,3,4). Este patrón aparece por todas partes.

## Contar de dos en dos o hacia atrás

```javascript
for (let i = 0; i <= 10; i += 2) { ... }  // pares: 0,2,4...
for (let i = 5; i > 0; i--) { ... }        // 5,4,3,2,1
```

## Ejercicio

Con un `for`, imprime la tabla de multiplicar del 7 (del 7×1 al 7×10).

---
⬅️ [Anterior](12-while.md) · ➡️ [Siguiente: break y continue](14-break-continue.md)
