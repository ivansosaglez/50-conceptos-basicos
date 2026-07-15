# Lección 46 — Promesas

Una **promesa** representa un valor que **aún no está listo** pero que llegará: el resultado de una tarea que tarda. Resuelve el "callback hell" de la lección anterior con una sintaxis más ordenada.

## La idea

Piensa en pedir comida con un número de ticket. No tienes la comida aún, pero tienes una **promesa** de que llegará. Una promesa tiene tres estados:

- **pendiente**: aún esperando.
- **cumplida** (*resolved*): salió bien, hay resultado.
- **rechazada** (*rejected*): falló.

## Consumir una promesa con .then

Cuando una función devuelve una promesa, recoges el resultado con `.then` y los errores con `.catch`:

```javascript
fetch("https://api.ejemplo.com/datos")
  .then(respuesta => respuesta.json())   // cuando llega, procesa
  .then(datos => console.log(datos))     // usa el resultado
  .catch(error => console.log("Error:", error));   // si algo falla
```

`fetch` (pedir datos a internet) devuelve una promesa. Encadenas `.then` para cada paso. Mucho más plano que anidar callbacks.

## Por qué es mejor que los callbacks

Compara con el callback hell de la lección anterior:

```javascript
pedirUsuario(id)
  .then(usuario => pedirPedidos(usuario))
  .then(pedidos => pedirDetalle(pedidos[0]))
  .then(detalle => console.log(detalle))
  .catch(error => console.log(error));
```

Se lee de arriba a abajo, en pasos, con **un solo** `.catch` para todos los errores. Mucho más claro.

## Crear una promesa (para entenderla)

```javascript
const promesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve("¡Listo!");      // sale bien
  } else {
    reject("Algo falló");    // sale mal
  }
});

promesa
  .then(mensaje => console.log(mensaje))
  .catch(error => console.log(error));
```

En la práctica casi siempre **consumirás** promesas que ya te dan (como `fetch`), más que crearlas.

## Lo que viene

Las promesas ya son buenas, pero hay una sintaxis todavía más limpia encima de ellas: `async/await`. Es la siguiente y última pieza del rompecabezas asíncrono.

## Ejercicio

Crea una promesa que se resuelva con el texto `"Datos cargados"` después de usar `setTimeout` de 1 segundo dentro de ella. Conéctala con `.then` para mostrar el mensaje.

---
⬅️ [Anterior](45-callbacks.md) · ➡️ [Siguiente: async / await](47-async-await.md)
