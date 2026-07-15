# Lección 44 — Errores y try/catch

Los errores son parte normal de programar. Lo importante es **gestionarlos** para que tu programa no se rompa entero cuando algo falla.

## Qué pasa cuando hay un error

Por defecto, un error **detiene** el programa en ese punto:

```javascript
const datos = null;
console.log(datos.nombre);   // ❌ TypeError: el programa se para aquí
console.log("esto no se ejecuta");
```

## try / catch

Permite **intentar** algo y, si falla, **capturar** el error en vez de morir:

```javascript
try {
  const datos = null;
  console.log(datos.nombre);   // falla aquí
} catch (error) {
  console.log("Algo salió mal: " + error.message);
}

console.log("el programa sigue vivo");   // ✅ ahora sí se ejecuta
```

- `try { }` → el código que **podría** fallar.
- `catch (error) { }` → qué hacer **si** falla. `error` trae info del fallo.

## Cuándo usarlo

No envuelvas todo en `try/catch`. Úsalo donde el fallo es **esperable y externo**: leer datos de internet, procesar lo que escribe un usuario, convertir JSON…

```javascript
function parsearJSON(texto) {
  try {
    return JSON.parse(texto);
  } catch {
    console.log("JSON inválido");
    return null;
  }
}
```

## Lanzar tus propios errores

Con `throw` generas un error a propósito cuando algo no debería pasar:

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

try {
  dividir(10, 0);
} catch (e) {
  console.log(e.message);   // No se puede dividir entre cero
}
```

## finally (opcional)

El bloque `finally` se ejecuta **siempre**, falle o no. Útil para limpiar (cerrar conexiones, etc.):

```javascript
try { ... } catch (e) { ... } finally { console.log("terminado"); }
```

## Ejercicio

Escribe una función que reciba un texto y lo convierta a número con `Number()`. Si el resultado es `NaN`, **lanza** un error con `throw`. Llámala dentro de un `try/catch`.

---
⬅️ [Anterior](43-truthy-falsy.md) · ➡️ [Siguiente: Callbacks](45-callbacks.md)
