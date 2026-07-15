# Lección 18 — Parámetros y argumentos

Una función fija siempre hace lo mismo. Con **parámetros**, le pasas datos para que trabaje con valores distintos cada vez. Eso la hace flexible.

## Pasar datos a una función

```javascript
function saludar(nombre) {
  console.log("Hola, " + nombre);
}

saludar("Ana");    // Hola, Ana
saludar("Luis");   // Hola, Luis
```

- **Parámetro**: `nombre`, la variable que recibe la función (al declararla).
- **Argumento**: `"Ana"`, el valor real que le pasas (al llamarla).

La misma función, resultados distintos según lo que le des.

## Varios parámetros

Se separan por comas, **en orden**:

```javascript
function sumar(a, b) {
  console.log(a + b);
}

sumar(3, 5);   // 8
sumar(10, 2);  // 12
```

El orden importa: el primer argumento va al primer parámetro, y así sucesivamente.

## Valores por defecto

Puedes dar un valor por si no se pasa el argumento:

```javascript
function saludar(nombre = "amigo") {
  console.log("Hola, " + nombre);
}

saludar();         // Hola, amigo
saludar("Ana");    // Hola, Ana
```

## Un error típico

```javascript
function area(base, altura) {
  console.log(base * altura);
}

area(5);   // base=5, altura=undefined → 5 * undefined = NaN
```

Si olvidas un argumento, el parámetro queda `undefined` y aparece `NaN` (*Not a Number*). Pasa siempre todos los que la función espera.

## Ejercicio

Crea una función `precioConIVA(precio)` que muestre el precio multiplicado por 1.21. Pruébala con 100 y con 9.99.

---
⬅️ [Anterior](17-funciones.md) · ➡️ [Siguiente: return](19-return.md)
