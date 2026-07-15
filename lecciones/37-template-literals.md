# Lección 37 — Template literals

Los **template literals** son una forma mucho más cómoda de construir textos con variables dentro. Adiós a concatenar con mil `+`.

## El problema con +

```javascript
const nombre = "Ana";
const edad = 25;
const frase = "Hola, " + nombre + ". Tienes " + edad + " años.";
```

Difícil de leer y fácil de olvidar un espacio o un `+`.

## La solución: comillas invertidas

Se usan backticks `` ` `` (tecla normalmente junto al 1, o `Alt+96`) y se insertan variables con `${ }`:

```javascript
const nombre = "Ana";
const edad = 25;
const frase = `Hola, ${nombre}. Tienes ${edad} años.`;
console.log(frase);   // Hola, Ana. Tienes 25 años.
```

Mucho más claro: ves la frase final tal cual, con los huecos marcados.

## Dentro de ${ } va cualquier expresión

No solo variables: cualquier cálculo.

```javascript
const precio = 10;
console.log(`Con IVA: ${precio * 1.21} €`);     // Con IVA: 12.1 €
console.log(`El doble de 5 es ${5 * 2}`);       // El doble de 5 es 10
console.log(`Mayor de edad: ${edad >= 18}`);    // Mayor de edad: true
```

## Texto en varias líneas

Otra ventaja: los backticks respetan los saltos de línea.

```javascript
const carta = `Hola Ana,

Gracias por tu compra.

Un saludo.`;
```

Con comillas normales esto necesitaría `\n` por todas partes.

## Recomendación

Usa template literals **siempre** que mezcles texto y variables. Es el estándar en JavaScript moderno y hace el código mucho más legible.

## Ejercicio

Reescribe con template literals: `"El producto " + nombre + " cuesta " + precio + " euros"`. Crea las variables y muéstralo.

---
⬅️ [Anterior](36-metodos-string.md) · ➡️ [Siguiente: split y join](38-split-join.md)
