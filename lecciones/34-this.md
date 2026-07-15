# Lección 34 — this

`this` es una palabra especial que, dentro de un método, se refiere **al propio objeto**. Permite que un método use los datos de su objeto sin nombrarlo a pelo.

## El problema

```javascript
const persona = {
  nombre: "Ana",
  saludar() {
    console.log("Hola, soy " + nombre);   // ❌ nombre no existe aquí suelto
  }
};
```

`nombre` a secas no funciona dentro del método. Hay que decir "el nombre **de este objeto**".

## La solución: this

```javascript
const persona = {
  nombre: "Ana",
  saludar() {
    console.log("Hola, soy " + this.nombre);   // ✅
  }
};

persona.saludar();   // Hola, soy Ana
```

`this.nombre` significa "la propiedad `nombre` del objeto sobre el que se llamó el método".

## La gran ventaja: reutilizar

El mismo método sirve para objetos distintos:

```javascript
const ana = {
  nombre: "Ana",
  saludar() { console.log("Soy " + this.nombre); }
};
const luis = {
  nombre: "Luis",
  saludar() { console.log("Soy " + this.nombre); }
};

ana.saludar();    // Soy Ana
luis.saludar();   // Soy Luis
```

`this` apunta al objeto que está **a la izquierda del punto** al llamar.

## ⚠️ Las arrow functions y this

Una sutileza: las arrow functions **no** tienen su propio `this`. Por eso, para métodos de objeto, usa la **forma normal** (`saludar() { }`), no la flecha. Es la principal diferencia práctica entre ambas (recuerda Lección 21).

```javascript
const obj = {
  nombre: "Ana",
  saludar: () => console.log(this.nombre)   // ❌ this no es el objeto
};
```

No te obsesiones con el porqué profundo ahora: la regla práctica es "métodos de objeto → función normal".

## Ejercicio

Reescribe el objeto `circulo` de la lección anterior para que `area()` use `this.radio` en vez del valor directo.

---
⬅️ [Anterior](33-metodos.md) · ➡️ [Siguiente: Desestructuración](35-desestructuracion.md)
