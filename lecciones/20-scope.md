# Lección 20 — Ámbito (scope)

El **ámbito** (*scope*) define **dónde existe** una variable y desde dónde se puede usar. Entenderlo evita errores del tipo "esa variable no está definida".

## Variables locales

Una variable creada **dentro** de una función solo existe ahí dentro:

```javascript
function calcular() {
  const local = 10;
  console.log(local);   // ✅ funciona
}

calcular();
console.log(local);     // ❌ Error: local is not defined
```

`local` "nace" al entrar en la función y "muere" al salir. Fuera no existe. Esto es bueno: cada función tiene su propio espacio y no se pisan entre ellas.

## Variables globales

Una variable creada **fuera** de toda función se ve desde cualquier sitio:

```javascript
const global = 100;

function mostrar() {
  console.log(global);   // ✅ las funciones ven las globales
}
```

## Las llaves crean ámbito

Con `let` y `const`, **cada bloque `{ }`** tiene su ámbito (un `if`, un `for`…):

```javascript
if (true) {
  let x = 5;
}
console.log(x);   // ❌ x solo existía dentro del if
```

## Por qué importa

Mantener las variables en el ámbito **más pequeño posible** hace el código más seguro y fácil de seguir. Si una variable solo se usa dentro de una función, declárala ahí, no fuera. Las globales en exceso son fuente de errores difíciles.

## Ejercicio

Declara una variable dentro de un `for`. Intenta usarla fuera del bucle y observa el error. Luego declárala antes del bucle para que sí funcione.

---
⬅️ [Anterior](19-return.md) · ➡️ [Siguiente: Arrow functions](21-arrow-functions.md)
