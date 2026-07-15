# Lección 4 — Operadores

Los **operadores** son símbolos que hacen operaciones con los datos: sumar, comparar, unir textos… Son las herramientas básicas de cálculo.

## Operadores aritméticos

```javascript
console.log(5 + 3);   // 8   suma
console.log(5 - 3);   // 2   resta
console.log(5 * 3);   // 15  multiplicación
console.log(6 / 3);   // 2   división
console.log(7 % 3);   // 1   resto (módulo): lo que sobra al dividir
```

El **módulo** (`%`) es muy útil: `7 % 3` es `1` porque 7 dividido entre 3 da 2 y sobra 1. Sirve, por ejemplo, para saber si un número es par: `n % 2 === 0`.

## Asignación

```javascript
let total = 10;
total = total + 5;   // total ahora vale 15
total += 5;          // forma corta de lo mismo → 20
total -= 3;          // 17
total *= 2;          // 34
```

`+=`, `-=`, `*=` son atajos: `x += 5` significa `x = x + 5`.

## Concatenar texto

El `+` con strings **une** en vez de sumar:

```javascript
const nombre = "Ana";
const saludo = "Hola, " + nombre + "!";
console.log(saludo);   // Hola, Ana!
```

## Incremento y decremento

```javascript
let contador = 0;
contador++;   // suma 1  → 1
contador--;   // resta 1 → 0
```

Verás `++` constantemente en los bucles (Módulo 3).

## Ejercicio

Tienes `const precio = 9.99` y `const cantidad = 3`. Calcula y muestra el total. Luego usa `%` para comprobar si `17` es par o impar.

---
⬅️ [Anterior](03-tipos-de-datos.md) · ➡️ [Siguiente: Comentarios](05-comentarios.md)
