# Lección 25 — Acceso por índice

Cada elemento de un array tiene una posición numérica llamada **índice**. Con él accedes a un elemento concreto. La clave que sorprende a todo principiante: **se empieza a contar desde 0**.

## El índice empieza en 0

```javascript
const frutas = ["manzana", "pera", "uva"];
//                  0         1       2     ← índices

console.log(frutas[0]);   // manzana  (el PRIMERO)
console.log(frutas[1]);   // pera
console.log(frutas[2]);   // uva      (el ÚLTIMO)
```

El primer elemento es el `[0]`, no el `[1]`. Es la causa de muchos errores al empezar, así que grábatelo.

## El último elemento

Como el último índice es `length - 1`:

```javascript
const frutas = ["manzana", "pera", "uva"];
console.log(frutas[frutas.length - 1]);   // uva
```

JavaScript moderno también permite `.at(-1)` para el último:

```javascript
console.log(frutas.at(-1));   // uva
```

## Índice que no existe

```javascript
const frutas = ["manzana", "pera"];
console.log(frutas[5]);   // undefined → no hay nada ahí
```

No da error: devuelve `undefined`. Cuidado, porque luego puede romper otra parte del código.

## Cambiar un elemento

```javascript
const frutas = ["manzana", "pera", "uva"];
frutas[1] = "plátano";
console.log(frutas);   // ["manzana", "plátano", "uva"]
```

## Ejercicio

Con `const dias = ["lunes", "martes", "miércoles"]`, imprime el primero y el último usando índices. Luego cambia `"martes"` por `"sábado"`.

---
⬅️ [Anterior](24-arrays.md) · ➡️ [Siguiente: Métodos de array](26-metodos-array.md)
