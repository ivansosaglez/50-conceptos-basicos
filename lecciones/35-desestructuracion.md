# Lección 35 — Desestructuración

La **desestructuración** es una forma rápida de **sacar valores** de un objeto o array y meterlos en variables. Ahorra código y se ve por todas partes en proyectos reales.

## Desestructurar objetos

Sin desestructuración:

```javascript
const persona = { nombre: "Ana", edad: 25 };
const nombre = persona.nombre;
const edad = persona.edad;
```

Con desestructuración, en una línea:

```javascript
const persona = { nombre: "Ana", edad: 25 };
const { nombre, edad } = persona;

console.log(nombre);   // Ana
console.log(edad);     // 25
```

Las variables deben llamarse **igual que las propiedades**. JavaScript las empareja por nombre.

## Desestructurar arrays

Aquí se emparejan por **posición**, no por nombre:

```javascript
const colores = ["rojo", "verde", "azul"];
const [primero, segundo] = colores;

console.log(primero);   // rojo
console.log(segundo);   // verde
```

## Uso muy común: en parámetros de función

```javascript
function mostrar({ nombre, edad }) {
  console.log(nombre + " tiene " + edad + " años");
}

mostrar({ nombre: "Luis", edad: 30 });   // Luis tiene 30 años
```

En vez de recibir el objeto entero y escribir `persona.nombre`, sacas directamente lo que necesitas. Muy frecuente en frameworks modernos.

## Valores por defecto

```javascript
const { ciudad = "Desconocida" } = { nombre: "Ana" };
console.log(ciudad);   // Desconocida (no existía en el objeto)
```

## Ejercicio

Tienes `const producto = { nombre: "Curso", precio: 9.99, stock: 100 }`. Desestructura `nombre` y `precio` en una sola línea y muéstralos.

---
⬅️ [Anterior](34-this.md) · ➡️ [Siguiente: Métodos de string](36-metodos-string.md)
