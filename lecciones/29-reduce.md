# Lección 29 — reduce

`reduce` combina **todos** los elementos de un array en **un único valor**: una suma, un total, un máximo… Es el más potente y el que más cuesta al principio, así que vamos despacio.

## El caso más común: sumar

```javascript
const numeros = [10, 20, 30];
const total = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(total);   // 60
```

## Las piezas

```javascript
array.reduce((acumulador, elemento) => ..., valorInicial)
```

- **acumulador**: el resultado que se va arrastrando vuelta a vuelta.
- **elemento**: el valor actual del array.
- **valorInicial**: con qué empieza el acumulador (aquí `0`).

Paso a paso con `[10, 20, 30]` y inicial `0`:

| Vuelta | acumulador | elemento | resultado |
|--------|-----------|----------|-----------|
| 1 | 0 | 10 | 10 |
| 2 | 10 | 20 | 30 |
| 3 | 30 | 30 | 60 |

El último resultado (`60`) es lo que devuelve `reduce`.

## Otros usos

```javascript
// Máximo
const max = [3, 9, 1, 7].reduce((a, b) => a > b ? a : b);
console.log(max);   // 9

// Contar / acumular texto
const carrito = [{ precio: 10 }, { precio: 25 }];
const totalCarrito = carrito.reduce((suma, item) => suma + item.precio, 0);
console.log(totalCarrito);   // 35
```

(Los objetos `{ precio: 10 }` los verás en el Módulo 6.)

## No te agobies

`reduce` es el más abstracto del trío map/filter/reduce. Si al principio solo lo usas para **sumar totales**, ya le sacas el 80 % del provecho. La intuición llega con la práctica.

## Ejercicio

Usa `reduce` para sumar `const gastos = [4.5, 12, 8, 20]`. Pon `0` como valor inicial.

---
⬅️ [Anterior](28-filter.md) · ➡️ [Siguiente: forEach](30-foreach.md)
