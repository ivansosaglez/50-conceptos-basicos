# Lección 32 — Propiedades

Las **propiedades** son los datos guardados en un objeto. Ahora veremos cómo leerlas, cambiarlas, añadirlas y borrarlas.

## Leer una propiedad

Dos formas:

```javascript
const persona = { nombre: "Ana", edad: 25 };

console.log(persona.nombre);      // Ana   → notación de punto
console.log(persona["edad"]);     // 25    → notación de corchetes
```

La de **punto** es la habitual. La de **corchetes** sirve cuando el nombre de la propiedad está en una variable:

```javascript
const campo = "nombre";
console.log(persona[campo]);      // Ana
```

## Cambiar y añadir

```javascript
const persona = { nombre: "Ana" };

persona.nombre = "Eva";       // cambia la existente
persona.edad = 30;            // añade una nueva (no existía)

console.log(persona);         // { nombre: "Eva", edad: 30 }
```

Si la propiedad existe, la actualizas; si no, se crea. Misma sintaxis.

## Borrar una propiedad

```javascript
delete persona.edad;
console.log(persona);   // { nombre: "Eva" }
```

## Propiedad que no existe

```javascript
console.log(persona.telefono);   // undefined
```

Como con los arrays, no da error: devuelve `undefined`. Para comprobar si existe:

```javascript
if (persona.telefono) {
  console.log("Tiene teléfono");
}
```

## Recorrer todas las propiedades

```javascript
const persona = { nombre: "Ana", edad: 25 };

for (const clave in persona) {
  console.log(clave + ": " + persona[clave]);
}
// nombre: Ana
// edad: 25
```

Ojo: con objetos se usa `for...in` (claves), no `for...of`.

## Ejercicio

Parte del objeto `libro` de la lección anterior. Cambia `disponible` a `false`, añade una propiedad `paginas`, y borra `anio`.

---
⬅️ [Anterior](31-objetos.md) · ➡️ [Siguiente: Métodos](33-metodos.md)
