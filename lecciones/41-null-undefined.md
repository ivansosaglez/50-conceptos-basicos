# Lección 41 — null y undefined

Ambos significan "ausencia de valor", pero con un matiz importante. Distinguirlos te ayuda a leer mejor lo que pasa en tu programa.

## undefined: "no se ha asignado"

Aparece **solo**, sin que tú lo pongas, cuando algo no tiene valor todavía:

```javascript
let x;
console.log(x);            // undefined → declarada pero sin valor

const obj = {};
console.log(obj.nombre);   // undefined → propiedad inexistente

function nada() {}
console.log(nada());       // undefined → función sin return
```

Regla mental: **undefined es de la máquina**. JavaScript lo pone cuando falta algo.

## null: "vacío a propósito"

Lo pones **tú** para decir "aquí no hay nada, intencionadamente":

```javascript
let usuario = null;        // todavía no hay usuario logueado
usuario = { nombre: "Ana" }; // luego sí
```

Regla mental: **null es del programador**. Es una decisión consciente.

## Comprobar si hay valor

```javascript
let dato;

if (dato === undefined) { console.log("sin asignar"); }
if (dato === null)      { console.log("vacío a propósito"); }

// Cubrir ambos a la vez (lo más práctico):
if (dato == null) {        // == aquí sí es útil: pilla null Y undefined
  console.log("no hay valor");
}
```

Este es el **único caso** donde se recomienda `==` en lugar de `===`: `dato == null` detecta tanto `null` como `undefined` de una vez.

## El operador ?? (valor por defecto)

Muy útil: da un valor alternativo si algo es `null` o `undefined`:

```javascript
const nombre = usuario?.nombre ?? "Invitado";
```

- `?.` accede de forma segura aunque `usuario` sea null (no rompe).
- `??` pone `"Invitado"` si lo de la izquierda no tiene valor.

## Ejercicio

Declara una variable sin valor y comprueba que es `undefined`. Luego asígnale `null` y usa `?? "por defecto"` para mostrar un texto alternativo.

---
⬅️ [Anterior](40-mutabilidad.md) · ➡️ [Siguiente: Coerción de tipos](42-coercion.md)
