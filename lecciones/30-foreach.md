# Lección 30 — forEach

`forEach` ejecuta una función **por cada elemento** del array. A diferencia de `map`, **no devuelve nada nuevo**: lo usas cuando solo quieres *hacer algo* con cada elemento (imprimir, guardar…), no transformar la lista.

## La idea

```javascript
const frutas = ["manzana", "pera", "uva"];

frutas.forEach(fruta => {
  console.log("Me gusta la " + fruta);
});
// Me gusta la manzana
// Me gusta la pera
// Me gusta la uva
```

## También te da el índice

La función recibe un segundo parámetro opcional: la posición.

```javascript
frutas.forEach((fruta, i) => {
  console.log(i + ": " + fruta);
});
// 0: manzana
// 1: pera
// 2: uva
```

## forEach vs map: la diferencia clave

```javascript
const numeros = [1, 2, 3];

const r1 = numeros.map(n => n * 2);      // [2, 4, 6]  ← devuelve array
const r2 = numeros.forEach(n => n * 2);  // undefined  ← NO devuelve nada
```

- **`map`** → cuando quieres **un array nuevo** transformado.
- **`forEach`** → cuando solo quieres **ejecutar una acción** por elemento y no necesitas resultado.

Un error común es usar `forEach` esperando un array de vuelta. Si necesitas el resultado, usa `map`.

## forEach vs for...of

Hacen casi lo mismo. Dos diferencias prácticas:

- En `for...of` puedes usar `break`/`continue`; en `forEach` **no**.
- `forEach` es muy legible para acciones simples.

Elige el que te resulte más claro en cada caso.

## Ejercicio

Tienes `const alumnos = ["Ana", "Luis", "Eva"]`. Usa `forEach` para imprimir `"1. Ana"`, `"2. Luis"`, `"3. Eva"` (ojo: el número es el índice + 1).

---
⬅️ [Anterior](29-reduce.md) · ➡️ [Siguiente: Crear objetos](31-objetos.md)
