# Lección 22 — Funciones como valores

En JavaScript, una función es **un valor más**, como un número o un texto. Puedes guardarla en una variable y **pasarla a otra función**. Esta idea desbloquea muchísimo del lenguaje.

## Una función guardada en variable

Ya lo viste con las arrow functions:

```javascript
const saludar = () => "Hola";
console.log(saludar());   // Hola
```

`saludar` es una variable que contiene una función.

## Pasar una función a otra función

Aquí está lo potente: puedes dar una función **como argumento**.

```javascript
function ejecutarDosVeces(accion) {
  accion();
  accion();
}

ejecutarDosVeces(() => console.log("¡Hola!"));
// ¡Hola!
// ¡Hola!
```

`ejecutarDosVeces` recibe una función (`accion`) y la llama dos veces. A una función que recibe otra función se le llama *función de orden superior*.

## Callback

La función que pasas como argumento se llama **callback** ("función de retorno"). El término aparecerá mucho. La idea: "toma esta función y llámala tú cuando toque".

```javascript
function procesar(numero, transformacion) {
  return transformacion(numero);
}

console.log(procesar(5, n => n * 2));   // 10
console.log(procesar(5, n => n + 100)); // 105
```

La misma función `procesar` hace cosas distintas según el callback que le pases. Flexibilidad total.

## Por qué importa

Métodos como `map`, `filter`, `forEach` (Módulo 5) y casi todo el código asíncrono (Módulo 9) funcionan así: les pasas una función que ellos ejecutan por ti. Entender esto ahora te facilitará todo lo que viene.

## Ejercicio

Crea una función `aplicar(valor, fn)` que devuelva `fn(valor)`. Pásale un número y una arrow function que lo eleve al cuadrado.

---
⬅️ [Anterior](21-arrow-functions.md) · ➡️ [Siguiente: Recursión](23-recursion.md)
