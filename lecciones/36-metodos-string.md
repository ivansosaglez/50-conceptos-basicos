# Lección 36 — Métodos de string

Los **strings** (textos) traen métodos para transformarlos y consultarlos. Como con los arrays, son funciones que "cuelgan" del texto con un punto.

## Longitud

```javascript
const texto = "Hola";
console.log(texto.length);   // 4  (length es propiedad, sin paréntesis)
```

## Mayúsculas y minúsculas

```javascript
console.log("hola".toUpperCase());   // "HOLA"
console.log("HOLA".toLowerCase());   // "hola"
```

Útil para comparar sin que importe la capitalización:

```javascript
const entrada = "SÍ";
if (entrada.toLowerCase() === "sí") { ... }
```

## Quitar espacios sobrantes

```javascript
console.log("  hola  ".trim());   // "hola"
```

`trim` quita espacios al principio y al final. Imprescindible para limpiar lo que el usuario escribe en formularios.

## Acceder a un carácter

```javascript
const texto = "Hola";
console.log(texto[0]);          // "H"  (como los arrays, empieza en 0)
console.log(texto.charAt(1));   // "o"
```

## Reemplazar

```javascript
console.log("Hola mundo".replace("mundo", "Ana"));   // "Hola Ana"
console.log("a-b-c".replaceAll("-", "/"));           // "a/b/c"
```

## Trocear

```javascript
console.log("Hola mundo".slice(0, 4));   // "Hola"  (del 0 al 4 sin incluirlo)
```

## ⚠️ Los strings son inmutables

Los métodos **no cambian** el texto original: devuelven uno **nuevo**.

```javascript
const t = "hola";
t.toUpperCase();
console.log(t);                  // "hola"  → ¡no cambió!
const mayus = t.toUpperCase();   // hay que guardarlo
console.log(mayus);              // "HOLA"
```

Olvidar guardar el resultado es un error muy común. (Más sobre inmutabilidad en la Lección 40.)

## Ejercicio

Dado `const sucio = "   Hola Mundo   "`, límpialo con `trim`, pásalo a minúsculas y reemplaza `"mundo"` por tu nombre. Encadena los métodos.

---
⬅️ [Anterior](35-desestructuracion.md) · ➡️ [Siguiente: Template literals](37-template-literals.md)
