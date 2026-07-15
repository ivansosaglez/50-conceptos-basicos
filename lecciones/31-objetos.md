# Lección 31 — Crear objetos

Un **objeto** agrupa datos relacionados bajo un mismo nombre, usando **parejas clave-valor**. Si un array es una lista numerada, un objeto es una ficha con etiquetas.

## El problema que resuelve

Para describir una persona con variables sueltas:

```javascript
const nombre = "Ana";
const edad = 25;
const ciudad = "Madrid";
```

Tres variables dispersas. Un objeto las mantiene juntas:

```javascript
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};
```

## Anatomía

```javascript
const persona = {
  clave: valor,        // cada línea: clave (etiqueta) : valor
  edad: 25,
};
```

- Entre llaves `{ }`.
- Cada propiedad es `clave: valor`.
- Separadas por comas.
- La clave es el nombre; el valor, el dato (de cualquier tipo: número, texto, array, incluso otro objeto).

## Objetos dentro de objetos y arrays

```javascript
const usuario = {
  nombre: "Luis",
  hobbies: ["leer", "correr"],     // un array dentro
  direccion: {                      // un objeto dentro
    ciudad: "Sevilla",
    cp: "41001"
  }
};
```

Así se modela información del mundo real: un usuario tiene una dirección, que a su vez tiene ciudad y código postal.

## Array vs objeto

- **Array** `[ ]` → muchos elementos del mismo tipo, en orden, accedidos por número.
- **Objeto** `{ }` → datos variados de **una cosa**, accedidos por nombre.

A menudo se combinan: un array de objetos (una lista de personas) es la estructura más común en aplicaciones reales.

## Ejercicio

Crea un objeto `libro` con las propiedades `titulo`, `autor`, `anio` y `disponible` (booleano). Rellénalo con un libro que conozcas.

---
⬅️ [Anterior](30-foreach.md) · ➡️ [Siguiente: Propiedades](32-propiedades.md)
