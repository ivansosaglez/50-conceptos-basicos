# Lección 38 — split y join

`split` convierte un **texto en array**, y `join` convierte un **array en texto**. Son la puerta entre strings y arrays, y los usarás muchísimo para procesar datos.

## split: de texto a array

```javascript
const frase = "uno,dos,tres";
const partes = frase.split(",");
console.log(partes);   // ["uno", "dos", "tres"]
```

Le pasas el **separador** y te devuelve un array cortando por ahí.

```javascript
"Hola mundo".split(" ");   // ["Hola", "mundo"]  → separa por espacios
"abc".split("");           // ["a", "b", "c"]    → separa letra a letra
```

## join: de array a texto

Es la operación inversa (ya la viste en la Lección 26):

```javascript
const palabras = ["Hola", "mundo"];
console.log(palabras.join(" "));    // "Hola mundo"
console.log(palabras.join("-"));    // "Hola-mundo"
```

Le pasas el separador con el que pegar los elementos.

## La combinación es potente

Texto → array → lo manipulas → texto de vuelta:

```javascript
const frase = "hola mundo cruel";

const resultado = frase
  .split(" ")                          // ["hola", "mundo", "cruel"]
  .map(palabra => palabra.toUpperCase()) // ["HOLA", "MUNDO", "CRUEL"]
  .join(" ");                          // "HOLA MUNDO CRUEL"

console.log(resultado);   // HOLA MUNDO CRUEL
```

Aquí se juntan cuatro lecciones: `split`, `map`, métodos de string y `join`. Esto es programar de verdad: encadenar herramientas simples.

## Caso típico: contar palabras

```javascript
const texto = "el gato y el perro";
console.log(texto.split(" ").length);   // 5 palabras
```

## Ejercicio

Dado `const nombres = "ana,luis,eva"`, conviértelo en array con `split`, ponlos en mayúsculas con `map`, y únelos de nuevo separados por `" | "` con `join`.

---
⬅️ [Anterior](37-template-literals.md) · ➡️ [Siguiente: Buscar en texto](39-buscar-texto.md)
