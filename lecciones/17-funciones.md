# Lección 17 — Declarar funciones

Una **función** es un bloque de código con nombre que puedes ejecutar cuando quieras, las veces que quieras. Escribes la receta una vez y la reutilizas. Es la herramienta más importante para no repetirte.

## Declarar y llamar

```javascript
function saludar() {
  console.log("¡Hola!");
}

saludar();   // ¡Hola!
saludar();   // ¡Hola!  (la llamamos otra vez)
```

Dos pasos distintos:

1. **Declarar**: defines qué hace la función (no se ejecuta todavía).
2. **Llamar/invocar**: `saludar()` con los paréntesis. **Ahí** se ejecuta.

⚠️ `saludar` (sin paréntesis) **no** ejecuta la función: solo la nombra. Necesitas los `()`.

## Por qué usarlas

Imagina que validas una edad en diez sitios del programa. Sin función, copias la lógica diez veces. Con función, la escribes una vez y la llamas. Si hay que corregir algo, lo cambias en **un solo lugar**.

```javascript
function mostrarSeparador() {
  console.log("------------------");
}

console.log("Sección 1");
mostrarSeparador();
console.log("Sección 2");
mostrarSeparador();
```

## La regla DRY

*Don't Repeat Yourself* ("no te repitas"). Si te ves copiando el mismo código, probablemente debería ser una función. Es una de las señales de buen código.

## Ejercicio

Crea una función `pedirCafe` que imprima los pasos para hacer un café (varios `console.log`). Llámala dos veces.

---
⬅️ [Anterior](16-bucles-anidados.md) · ➡️ [Siguiente: Parámetros](18-parametros.md)
