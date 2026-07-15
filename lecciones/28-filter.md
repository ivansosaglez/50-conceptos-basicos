# Lección 28 — filter

`filter` crea un **array nuevo** con solo los elementos que **cumplen una condición**. Donde `map` transforma, `filter` selecciona.

## La idea

```javascript
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(n => n % 2 === 0);

console.log(pares);    // [2, 4, 6]
console.log(numeros);  // [1, 2, 3, 4, 5, 6]  → original intacto
```

La función que pasas debe devolver `true` o `false`. Si devuelve `true`, el elemento **pasa el filtro** y entra en el array nuevo; si devuelve `false`, se descarta.

## Cómo leerlo

```javascript
numeros.filter(n => n % 2 === 0)
//             └─ "¿este n cumple? quédatelo si la condición es true"
```

## Ejemplos

```javascript
const edades = [15, 22, 17, 30];
const mayores = edades.filter(e => e >= 18);
console.log(mayores);   // [22, 30]

const palabras = ["sol", "elefante", "luz", "ordenador"];
const largas = palabras.filter(p => p.length > 3);
console.log(largas);    // ["elefante", "ordenador"]
```

## map vs filter

- **`map`** → mismo número de elementos, transformados.
- **`filter`** → menos (o igual) elementos, sin transformar.

## Encadenarlos

Lo bonito es que devuelven arrays, así que puedes **encadenar**:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = numeros
  .filter(n => n % 2 === 0)   // [2, 4, 6]
  .map(n => n * 10);          // [20, 40, 60]

console.log(resultado);       // [20, 40, 60]
```

Primero filtras los pares, luego los multiplicas. Leíble de arriba a abajo.

## Ejercicio

Dado `const productos = [12, 50, 8, 99, 30]` (precios), filtra los que cuestan más de 20 € y luego, encadenando, súmales un 10 % con `map`.

---
⬅️ [Anterior](27-map.md) · ➡️ [Siguiente: reduce](29-reduce.md)
