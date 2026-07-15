# Lección 11 — Operador ternario

El **operador ternario** es un `if/else` escrito en una sola línea. Sirve para elegir entre dos valores de forma compacta.

## Sintaxis

```javascript
condición ? valorSiVerdadero : valorSiFalso
```

Se lee: "¿Se cumple la condición? Entonces lo de la izquierda; si no, lo de la derecha."

```javascript
const edad = 20;
const mensaje = edad >= 18 ? "Mayor" : "Menor";
console.log(mensaje);   // Mayor
```

Equivale a:

```javascript
let mensaje;
if (edad >= 18) {
  mensaje = "Mayor";
} else {
  mensaje = "Menor";
}
```

Cuatro líneas convertidas en una. Por eso es muy usado para **asignar un valor según una condición**.

## Casos típicos

```javascript
const precio = 100;
const descuento = precio > 50 ? 0.1 : 0;

const usuario = null;
const nombre = usuario ? usuario : "Invitado";
```

## Cuándo NO usarlo

El ternario brilla en casos cortos. Si la lógica es compleja o anidas varios, vuelve a `if/else`: la legibilidad manda.

```javascript
// ❌ difícil de leer
const x = a ? (b ? 1 : 2) : (c ? 3 : 4);

// ✅ mejor un if/else normal
```

## Ejercicio

Usa un ternario para guardar en `acceso` el texto `"Permitido"` si `edad >= 18`, o `"Denegado"` si no. Muestra el resultado.

---
⬅️ [Anterior](10-switch.md) · ➡️ [Siguiente: Bucle while](12-while.md)
