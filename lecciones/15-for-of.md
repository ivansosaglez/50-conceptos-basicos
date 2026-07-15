# Lección 15 — for...of

`for...of` recorre directamente **cada elemento** de una lista (array) o texto, sin tener que manejar índices. Es más limpio cuando solo quieres los valores.

## Comparación

```javascript
const frutas = ["manzana", "pera", "uva"];

// for clásico: con índice
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// for...of: directo al valor
for (const fruta of frutas) {
  console.log(fruta);
}
```

Ambos imprimen lo mismo, pero `for...of` se lee como una frase: "para cada fruta de frutas…". Sin `i`, sin `length`, sin `[i]`: menos sitios donde equivocarse.

## Sintaxis

```javascript
for (const elemento of coleccion) {
  // usa "elemento" en cada vuelta
}
```

Se usa `const` porque en cada vuelta `elemento` es un valor nuevo.

## También recorre texto

```javascript
for (const letra of "Hola") {
  console.log(letra);   // H, o, l, a
}
```

## Cuándo usar cada uno

- **`for...of`** → cuando solo necesitas los valores. La opción por defecto para recorrer listas.
- **`for` clásico** → cuando necesitas el **índice** (la posición), o saltar de dos en dos, o ir hacia atrás.

## Ejercicio

Tienes `const precios = [10, 25, 7, 40]`. Recórrelos con `for...of` y suma todos en una variable `total`. Muestra el total.

---
⬅️ [Anterior](14-break-continue.md) · ➡️ [Siguiente: Bucles anidados](16-bucles-anidados.md)
