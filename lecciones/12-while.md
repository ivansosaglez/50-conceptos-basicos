# Lección 12 — Bucle while

Un **bucle** repite un bloque de código varias veces sin que lo escribas mil veces. `while` repite **mientras** una condición sea verdadera.

## Sintaxis

```javascript
while (condición) {
  // se repite mientras la condición sea true
}
```

```javascript
let contador = 1;

while (contador <= 3) {
  console.log("Vuelta " + contador);
  contador++;   // ⚠️ imprescindible
}
// Vuelta 1
// Vuelta 2
// Vuelta 3
```

## Las tres partes de todo bucle

1. **Inicio**: `let contador = 1;` (antes del bucle).
2. **Condición**: `contador <= 3` (cuándo seguir).
3. **Avance**: `contador++` (acercarse al final).

Si falta el avance, la condición nunca deja de cumplirse y el bucle no para jamás.

## ⚠️ El bucle infinito

```javascript
let n = 1;
while (n <= 3) {
  console.log(n);
  // ¡falta n++!  → se repite para siempre y cuelga el navegador
}
```

Es el error número uno con `while`. Asegúrate **siempre** de que algo dentro del bucle acerca la condición a ser falsa. Si lo provocas, cierra la pestaña para detenerlo.

## Cuándo usar while

Cuando **no sabes de antemano cuántas veces** repetirás. Ejemplo: "sigue pidiendo la contraseña mientras sea incorrecta". Si sabes el número exacto de vueltas, el `for` (siguiente lección) es más cómodo.

## Ejercicio

Usa un `while` para imprimir los números del 10 al 1 en orden descendente.

---
⬅️ [Anterior](11-ternario.md) · ➡️ [Siguiente: Bucle for](13-for.md)
