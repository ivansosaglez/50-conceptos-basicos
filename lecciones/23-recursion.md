# Lección 23 — Recursión

La **recursión** ocurre cuando una función **se llama a sí misma**. Suena raro, pero es una forma elegante de resolver problemas que se repiten en versiones más pequeñas.

## La idea

Una función recursiva necesita **dos cosas** sí o sí:

1. **Caso base**: cuándo parar (sin él, se llama para siempre).
2. **Caso recursivo**: se llama a sí misma con un problema **más pequeño**.

## Ejemplo: cuenta atrás

```javascript
function cuentaAtras(n) {
  if (n === 0) {        // caso base: paramos
    console.log("¡Despegue!");
    return;
  }
  console.log(n);
  cuentaAtras(n - 1);   // caso recursivo: con n más pequeño
}

cuentaAtras(3);
// 3
// 2
// 1
// ¡Despegue!
```

Cada llamada reduce `n` en 1, acercándose al caso base `n === 0`. Ahí para.

## Ejemplo clásico: factorial

El factorial de 4 es 4×3×2×1. Se define en términos de sí mismo: `factorial(n) = n × factorial(n-1)`.

```javascript
function factorial(n) {
  if (n <= 1) return 1;          // caso base
  return n * factorial(n - 1);   // caso recursivo
}

console.log(factorial(4));   // 24
```

## ⚠️ Sin caso base = desastre

```javascript
function infinita(n) {
  return infinita(n - 1);   // nunca para → error de pila
}
```

Esto produce *"Maximum call stack size exceeded"*: la función se llamó tantas veces que se quedó sin memoria. Siempre define un caso base alcanzable.

## ¿Recursión o bucle?

Casi todo lo recursivo se puede hacer con un bucle, y al revés. La recursión brilla en estructuras "en árbol" (carpetas dentro de carpetas, menús anidados). De momento basta con entender la idea: una función que se llama a sí misma con un problema menor.

## Ejercicio

Escribe una función recursiva `sumar(n)` que sume todos los números de 1 a `n`. Pista: `sumar(n) = n + sumar(n-1)`, y el caso base es `sumar(0) = 0`.

---
⬅️ [Anterior](22-funciones-como-valores.md) · ➡️ [Siguiente: Crear arrays](24-arrays.md)
