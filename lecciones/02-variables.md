# Lección 2 — Variables

Una **variable** es una caja con nombre donde guardas un dato para usarlo más tarde. En vez de repetir un valor por todo el código, lo guardas una vez y lo llamas por su nombre.

En JavaScript se crean con `let` o `const`:

```javascript
let edad = 25;
const nombre = "Ana";
```

- `let` → variable que **puede cambiar** después.
- `const` → variable **constante**, su valor no se puede reasignar.

```javascript
let puntos = 10;
puntos = 20;        // ✅ permitido, usamos let

const pi = 3.14;
pi = 3;             // ❌ error: no se puede reasignar una const
```

**Regla práctica:** usa `const` por defecto. Cambia a `let` solo cuando sepas que el valor va a variar. Esto evita cambios accidentales y hace el código más fácil de entender.

## Reglas de los nombres

- No pueden empezar por número (`2gatos` ❌, `gatos2` ✅).
- No llevan espacios (`mi edad` ❌, `miEdad` ✅).
- Distinguen mayúsculas: `edad` y `Edad` son **dos variables distintas**.

## Usar una variable

```javascript
const nombre = "Ana";
console.log("Hola, " + nombre);   // Hola, Ana
```

El `+` aquí une (concatena) el texto con el valor de la variable.

## Ejercicio

Crea una variable `precio` con valor `9.99` y otra `producto` con valor `"Curso"`. Luego muestra en consola: `El Curso cuesta 9.99 euros`.

---
⬅️ [Anterior](01-que-es-programar.md) · ➡️ [Siguiente: Tipos de datos](03-tipos-de-datos.md)
