# Lección 10 — switch

Cuando comparas **una misma variable** contra muchos valores posibles, una cadena larga de `else if` se vuelve pesada. `switch` lo hace más legible.

## De else if a switch

```javascript
// Con else if
const dia = "lunes";
if (dia === "lunes") {
  console.log("Empieza la semana");
} else if (dia === "viernes") {
  console.log("¡Casi finde!");
} else {
  console.log("Día normal");
}
```

Lo mismo con `switch`:

```javascript
switch (dia) {
  case "lunes":
    console.log("Empieza la semana");
    break;
  case "viernes":
    console.log("¡Casi finde!");
    break;
  default:
    console.log("Día normal");
}
```

## Las piezas

- `switch (variable)` → el valor que se compara.
- `case valor:` → un caso posible. Compara con `===`.
- `break;` → **corta** el switch. Sin él, sigue ejecutando los casos siguientes (un error muy común).
- `default:` → lo que pasa si ningún caso coincide (como el `else`).

## El peligro de olvidar break

```javascript
switch (fruta) {
  case "manzana":
    console.log("Roja");
    // sin break → ¡también ejecuta el siguiente!
  case "plátano":
    console.log("Amarillo");
    break;
}
```

Si `fruta` es `"manzana"`, imprime **Roja Y Amarillo**. Pon siempre `break` salvo que quieras ese efecto a propósito.

## Ejercicio

Haz un `switch` sobre una variable `nota` con valores `"A"`, `"B"`, `"C"` que imprima `"Excelente"`, `"Bien"`, `"Mejorable"`, y un `default` para cualquier otra cosa.

---
⬅️ [Anterior](09-comparaciones.md) · ➡️ [Siguiente: Operador ternario](11-ternario.md)
