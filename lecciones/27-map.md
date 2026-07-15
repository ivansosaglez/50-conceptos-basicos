# Lección 27 — map

`map` crea un **array nuevo** transformando cada elemento del original. Es la forma moderna y limpia de "aplicar algo a toda la lista". Aquí ves para qué servían los callbacks de la Lección 22.

## La idea

```javascript
const numeros = [1, 2, 3, 4];
const dobles = numeros.map(n => n * 2);

console.log(dobles);     // [2, 4, 6, 8]
console.log(numeros);    // [1, 2, 3, 4]  → ¡el original NO cambia!
```

`map` recorre cada elemento, le aplica la función que le pasas, y mete el resultado en un array nuevo. El original queda intacto.

## Cómo leerlo

```javascript
numeros.map(n => n * 2)
//          └─ por cada "n" del array, devuelve "n * 2"
```

La función recibe un elemento (`n`) y **devuelve** lo que quieres que aparezca en su lugar. Imprescindible que devuelva algo (con `return` o return implícito).

## Ejemplos

```javascript
const nombres = ["ana", "luis"];
const mayus = nombres.map(nombre => nombre.toUpperCase());
console.log(mayus);   // ["ANA", "LUIS"]

const precios = [10, 20, 30];
const conIVA = precios.map(p => p * 1.21);
console.log(conIVA);  // [12.1, 24.2, 36.3]
```

## map vs for

Esto:

```javascript
const dobles = [];
for (const n of numeros) {
  dobles.push(n * 2);
}
```

…es lo mismo que `numeros.map(n => n * 2)`, pero `map` lo dice en una línea y deja claro que estás **transformando una lista en otra**. Por eso se prefiere.

## Regla clave

`map` siempre devuelve un array **del mismo tamaño** que el original. Si quieres quitar elementos, ese es trabajo de `filter` (siguiente lección).

## Ejercicio

Dado `const temperaturas = [0, 20, 30]` en Celsius, usa `map` para convertirlas a Fahrenheit (`C * 9/5 + 32`).

---
⬅️ [Anterior](26-metodos-array.md) · ➡️ [Siguiente: filter](28-filter.md)
