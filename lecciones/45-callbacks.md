# Lección 45 — Callbacks

Algunas tareas **tardan**: leer un archivo, pedir datos a internet, esperar unos segundos. No tendría sentido que el programa se congelara esperando. La solución clásica son los **callbacks**: "haz esto y, cuando termines, llama a esta función".

## Recordatorio

Un callback es una función que pasas como argumento para que otra la ejecute cuando toque (lo viste en la Lección 22). Aquí lo aplicamos al **tiempo**.

## setTimeout: el ejemplo más claro

```javascript
console.log("Antes");

setTimeout(() => {
  console.log("Después de 2 segundos");
}, 2000);

console.log("Después");
```

Salida:

```
Antes
Después
Después de 2 segundos   ← llega el último, 2s más tarde
```

`setTimeout` recibe una función (el callback) y un tiempo en milisegundos. El programa **no se para**: sigue con "Después" y ejecuta el callback cuando pasa el tiempo. Esto es la **asincronía**.

## Por qué importa

El código no siempre se ejecuta en el orden en que está escrito. Las tareas lentas se "apartan" y su callback corre más tarde. Entender esto es clave para todo lo que tarda.

## El problema: callback hell

Cuando una tarea depende de otra, que depende de otra… los callbacks se anidan y el código se vuelve ilegible:

```javascript
pedirUsuario(id, (usuario) => {
  pedirPedidos(usuario, (pedidos) => {
    pedirDetalle(pedidos[0], (detalle) => {
      console.log(detalle);   // anidamiento que crece hacia la derecha
    });
  });
});
```

A esto se le llama *callback hell* ("infierno de callbacks"). Es feo y difícil de mantener.

## La solución moderna

Para resolver ese problema se inventaron las **promesas** y `async/await`, las dos siguientes lecciones. Pero entender el callback es el primer paso: es la base de todo lo asíncrono.

## Ejercicio

Usa `setTimeout` para imprimir `"¡Hola!"` después de 1 segundo. Antes y después del `setTimeout`, pon un `console.log` y observa el orden en que aparecen.

---
⬅️ [Anterior](44-errores.md) · ➡️ [Siguiente: Promesas](46-promesas.md)
