# Lección 24 — Crear arrays

Un **array** (lista) es una colección ordenada de valores guardados en una sola variable. En vez de `fruta1`, `fruta2`, `fruta3`, tienes **una** lista con todas.

## Crear un array

```javascript
const frutas = ["manzana", "pera", "uva"];
const numeros = [10, 20, 30, 40];
const mezcla = ["Ana", 25, true];   // puede mezclar tipos
const vacio = [];                    // array vacío para llenar luego
```

Se escriben entre corchetes `[ ]`, con los elementos separados por comas.

## Cuántos elementos tiene

La propiedad `.length` te da el tamaño:

```javascript
const frutas = ["manzana", "pera", "uva"];
console.log(frutas.length);   // 3
```

## Recorrer un array

Aquí se juntan dos cosas que ya sabes: arrays y bucles.

```javascript
const frutas = ["manzana", "pera", "uva"];

for (const fruta of frutas) {
  console.log(fruta);
}
```

Esta combinación —guardar muchos datos en una lista y recorrerlos— es de lo más útil que harás como programador.

## ¿const y aun así puedo cambiarlo?

Sí. `const` impide **reasignar** la variable, pero el contenido del array **sí** se puede modificar (añadir, quitar). Lo verás en la Lección 26 y se explica del todo en Mutabilidad (Lección 40).

```javascript
const lista = [1, 2];
lista.push(3);     // ✅ permitido: modificamos el contenido
lista = [9, 9];    // ❌ error: reasignar la variable
```

## Ejercicio

Crea un array con los nombres de tres amigos. Muestra cuántos hay con `.length` y luego recórrelos imprimiendo cada uno.

---
⬅️ [Anterior](23-recursion.md) · ➡️ [Siguiente: Acceso por índice](25-indices.md)
