# Lección 26 — push, pop y compañía

Los arrays traen **métodos**: funciones listas para añadir, quitar y manipular elementos. Estos cuatro son los del día a día.

## Añadir y quitar al final

```javascript
const pila = [1, 2, 3];

pila.push(4);     // añade al final  → [1, 2, 3, 4]
pila.pop();       // quita el último → [1, 2, 3]  (y lo devuelve)
```

- `push(x)` → mete `x` al final.
- `pop()` → saca el último y te lo devuelve.

## Añadir y quitar al principio

```javascript
const cola = [1, 2, 3];

cola.unshift(0);  // añade al principio → [0, 1, 2, 3]
cola.shift();     // quita el primero   → [1, 2, 3]  (y lo devuelve)
```

## Otros métodos muy útiles

```javascript
const frutas = ["manzana", "pera", "uva"];

console.log(frutas.includes("pera"));   // true  → ¿está?
console.log(frutas.indexOf("uva"));     // 2     → ¿en qué posición?
console.log(frutas.join(", "));         // "manzana, pera, uva" → a texto
```

- `includes(x)` → `true`/`false` según si `x` está en el array.
- `indexOf(x)` → el índice de `x`, o `-1` si no está.
- `join(separador)` → une todo en un string.

## push devuelve el nuevo tamaño

Detalle útil: `push` devuelve la nueva longitud, no el array.

```javascript
const a = [1, 2];
console.log(a.push(3));   // 3 (la nueva length), y a es [1, 2, 3]
```

## Ejercicio

Parte de `const cesta = ["pan", "leche"]`. Añade `"huevos"` al final, `"agua"` al principio, comprueba con `includes` si hay `"leche"`, y muestra la cesta como texto con `join`.

---
⬅️ [Anterior](25-indices.md) · ➡️ [Siguiente: map](27-map.md)
