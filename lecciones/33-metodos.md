# Lección 33 — Métodos

Un **método** es una función guardada dentro de un objeto. Así un objeto no solo tiene datos (propiedades), sino también **acciones** que puede realizar.

## Una función como propiedad

```javascript
const persona = {
  nombre: "Ana",
  saludar: function() {
    console.log("Hola, soy Ana");
  }
};

persona.saludar();   // Hola, soy Ana
```

`saludar` es un método: una propiedad cuyo valor es una función. Se llama con punto y paréntesis: `persona.saludar()`.

## Sintaxis corta

JavaScript permite escribirlo más limpio, sin `: function`:

```javascript
const persona = {
  nombre: "Ana",
  saludar() {
    console.log("Hola");
  }
};
```

## Ya has usado métodos

`array.push()`, `texto.toUpperCase()`, `array.map()`… todos son métodos: funciones que "pertenecen" a ese valor. Ahora entiendes de dónde salen.

```javascript
const lista = [1, 2, 3];
lista.push(4);          // push es un método del array
"hola".toUpperCase();   // toUpperCase es un método del string
```

## Métodos con parámetros

```javascript
const calculadora = {
  sumar(a, b) {
    return a + b;
  }
};

console.log(calculadora.sumar(3, 5));   // 8
```

## Y para usar los datos del propio objeto…

Un método a menudo necesita acceder a las propiedades de su objeto (por ejemplo, que `saludar` diga el `nombre` real). Para eso existe `this`, la siguiente lección.

## Ejercicio

Crea un objeto `circulo` con una propiedad `radio` y un método `area()` que devuelva el área (`3.14 * radio * radio`). De momento, usa el valor del radio directamente; en la próxima lección lo haremos con `this`.

---
⬅️ [Anterior](32-propiedades.md) · ➡️ [Siguiente: this](34-this.md)
