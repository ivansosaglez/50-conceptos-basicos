# ⚡ Chuleta de sintaxis JavaScript

Referencia rápida de todo lo visto en el curso. Tenla a mano mientras programas.

## Variables
```javascript
const nombre = "Ana";   // no se reasigna (por defecto)
let edad = 25;          // se puede reasignar
```

## Tipos
```javascript
42            // number
"texto"       // string
true / false  // boolean
null          // vacío a propósito
undefined     // sin asignar
typeof valor  // saber el tipo
```

## Operadores
```javascript
+  -  *  /  %        // aritméticos (% = resto)
+= -= *=            // asignación corta
++ --               // incremento / decremento
=== !==             // comparación (usa SIEMPRE 3 iguales)
>  <  >=  <=        // comparación
&&  ||  !           // lógicos: Y, O, NO
```

## Condicionales
```javascript
if (cond) {
  ...
} else if (otra) {
  ...
} else {
  ...
}

const x = cond ? siVerdadero : siFalso;   // ternario

switch (valor) {
  case "a": ...; break;
  default: ...;
}
```

## Bucles
```javascript
for (let i = 0; i < 5; i++) { ... }
while (cond) { ... }
for (const item of array) { ... }
for (const clave in objeto) { ... }
break;      // sale del bucle
continue;   // salta a la siguiente vuelta
```

## Funciones
```javascript
function sumar(a, b) { return a + b; }
const sumar = (a, b) => a + b;        // arrow
const doble = n => n * 2;             // un parámetro
function f(x = 10) { ... }            // valor por defecto
```

## Arrays
```javascript
const a = [1, 2, 3];
a.length                 // tamaño
a[0]                     // primer elemento
a.push(4)  a.pop()       // final: añadir / quitar
a.unshift(0)  a.shift()  // inicio: añadir / quitar
a.includes(2)            // ¿está?
a.indexOf(2)             // posición o -1
a.join("-")              // a texto

a.map(n => n * 2)        // transformar → array nuevo
a.filter(n => n > 1)     // seleccionar → array nuevo
a.reduce((acc, n) => acc + n, 0)   // combinar → un valor
a.forEach(n => console.log(n))     // acción por elemento
```

## Objetos
```javascript
const obj = { nombre: "Ana", edad: 25 };
obj.nombre               // leer (punto)
obj["edad"]              // leer (corchetes)
obj.ciudad = "Madrid"    // añadir / cambiar
delete obj.edad          // borrar

const persona = {
  nombre: "Ana",
  saludar() { return "Soy " + this.nombre; }
};

const { nombre, edad } = obj;       // desestructurar
```

## Strings
```javascript
texto.length
texto.toUpperCase()  texto.toLowerCase()
texto.trim()
texto.includes("x")  texto.startsWith("x")  texto.endsWith("x")
texto.replace("a", "b")  texto.replaceAll("a", "b")
texto.split(",")        // a array
array.join(",")         // a texto
`Hola ${nombre}`        // template literal
```

## Conversión de tipos
```javascript
Number("42")     // a número
String(42)       // a texto
Boolean(0)       // a booleano
parseInt("10px") // entero
parseFloat("9.9")// decimal
```

## Errores
```javascript
try {
  ...
} catch (error) {
  console.log(error.message);
} finally {
  ...
}
throw new Error("mensaje");
```

## Asíncrono
```javascript
setTimeout(() => { ... }, 1000);   // tras 1s

promesa.then(r => ...).catch(e => ...);

async function f() {
  try {
    const r = await fetch(url);
    const datos = await r.json();
  } catch (e) { ... }
}
```

## Útiles
```javascript
console.log(...)          // imprimir
const copia = [...array]  // copiar array
const copia = { ...obj }  // copiar objeto
valor ?? "defecto"        // si es null/undefined
obj?.propiedad            // acceso seguro
```
