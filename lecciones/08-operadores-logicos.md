# Lección 8 — Operadores lógicos

A veces una decisión depende de **varias condiciones a la vez**. Los operadores lógicos las combinan.

## Los tres operadores

| Operador | Nombre | Es verdadero cuando… |
|----------|--------|----------------------|
| `&&` | Y (AND) | **ambas** condiciones son verdaderas |
| `\|\|` | O (OR) | **al menos una** es verdadera |
| `!` | NO (NOT) | invierte: convierte true en false |

## && (Y)

```javascript
const edad = 25;
const tieneCarnet = true;

if (edad >= 18 && tieneCarnet) {
  console.log("Puede conducir");
}
```

Las **dos** cosas tienen que cumplirse.

## || (O)

```javascript
const esFinde = false;
const esFestivo = true;

if (esFinde || esFestivo) {
  console.log("Hoy no se trabaja");
}
```

Basta con que **una** se cumpla.

## ! (NO)

```javascript
const lloviendo = false;

if (!lloviendo) {
  console.log("Sal a pasear");   // se ejecuta: !false = true
}
```

`!` da la vuelta al valor. `!true` es `false` y `!false` es `true`.

## Combinarlos

```javascript
const edad = 20;
const invitado = false;

if (edad >= 18 && !invitado) {
  console.log("Entrada de pago");
}
```

Usa paréntesis cuando mezcles varios para dejar clara la intención: `(a && b) || c`.

## Ejercicio

Una persona puede entrar a la piscina si **sabe nadar** Y (**es mayor de edad** O **va acompañada**). Crea tres variables booleanas y escribe el `if`.

---
⬅️ [Anterior](07-else.md) · ➡️ [Siguiente: Comparaciones](09-comparaciones.md)
