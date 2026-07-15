# Lección 39 — Buscar en texto

Comprobar si un texto contiene algo, dónde empieza o cómo empieza/termina es una tarea diaria: validar emails, filtrar resultados, detectar palabras…

## ¿Contiene algo? → includes

```javascript
const frase = "Hola mundo";
console.log(frase.includes("mundo"));   // true
console.log(frase.includes("adiós"));   // false
```

Devuelve `true`/`false`. Es el método de búsqueda que más usarás.

## ¿Empieza o termina con…?

```javascript
const archivo = "documento.pdf";
console.log(archivo.startsWith("doc"));   // true
console.log(archivo.endsWith(".pdf"));    // true
```

Perfecto para comprobar extensiones, prefijos, etc.

## ¿En qué posición está? → indexOf

```javascript
const frase = "Hola mundo";
console.log(frase.indexOf("mundo"));   // 5  (empieza en el índice 5)
console.log(frase.indexOf("xyz"));     // -1 (no está)
```

Devuelve el índice donde empieza, o `-1` si no aparece. Recuerda: `-1` significa "no encontrado".

## Ejemplo práctico: buscador simple

```javascript
const productos = ["Camiseta roja", "Pantalón azul", "Camiseta verde"];
const busqueda = "camiseta";

const resultados = productos.filter(p =>
  p.toLowerCase().includes(busqueda.toLowerCase())
);

console.log(resultados);   // ["Camiseta roja", "Camiseta verde"]
```

Fíjate en el truco: pasar **ambos** textos a minúsculas con `toLowerCase` antes de comparar, para que la búsqueda no distinga mayúsculas. Aquí se unen `filter`, `includes` y métodos de string.

## Ejercicio

Tienes `const correos = ["ana@gmail.com", "luis@hotmail.com", "eva@gmail.com"]`. Filtra los que terminan en `"@gmail.com"` usando `endsWith`.

---
⬅️ [Anterior](38-split-join.md) · ➡️ [Siguiente: Mutabilidad](40-mutabilidad.md)
