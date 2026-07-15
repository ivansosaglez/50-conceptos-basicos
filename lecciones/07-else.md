# Lección 7 — else y else if

Con `if` solo cubres el caso "si se cumple". Con `else` añades el "si no se cumple", y con `else if` encadenas varias posibilidades.

## else

```javascript
const edad = 15;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```

Solo uno de los dos bloques se ejecuta, nunca ambos.

## else if

Cuando hay más de dos caminos:

```javascript
const nota = 7;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}
```

Se evalúan **de arriba a abajo** y se ejecuta el **primero** que sea verdadero. El resto se ignora aunque también se cumplieran. Por eso el orden importa.

## Cuidado con el orden

```javascript
// ❌ MAL: el primero captura todo
if (nota >= 5) {
  console.log("Aprobado");
} else if (nota >= 9) {
  console.log("Sobresaliente"); // nunca se alcanza
}
```

Un 10 entra en `nota >= 5` y nunca llega al `>= 9`. Ordena siempre de **más específico/restrictivo a más general**.

## Ejercicio

Pide la hora del día en una variable `hora` (0–23). Muestra `"Buenos días"` si es antes de las 12, `"Buenas tardes"` hasta las 20, y `"Buenas noches"` el resto.

---
⬅️ [Anterior](06-if.md) · ➡️ [Siguiente: Operadores lógicos](08-operadores-logicos.md)
