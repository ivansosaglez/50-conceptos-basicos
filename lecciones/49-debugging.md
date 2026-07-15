# Lección 49 — Depurar (debugging)

**Depurar** es encontrar y arreglar errores (*bugs*). No es algo que les pase a los malos programadores: es el **80 % del trabajo** de cualquiera. Saber depurar bien marca la diferencia.

## El primer reflejo: console.log

La herramienta más simple y más usada. Imprime valores para ver qué está pasando de verdad:

```javascript
function calcularTotal(precio, cantidad) {
  console.log("precio:", precio, "cantidad:", cantidad);   // ¿qué llega?
  const total = precio * cantidad;
  console.log("total:", total);                            // ¿qué sale?
  return total;
}
```

Cuando algo no funciona, **no adivines**: imprime los valores en cada paso y compáralos con lo que esperabas. El error casi siempre está donde la realidad y tu expectativa difieren.

## Leer el mensaje de error

Los errores no son tus enemigos: te **dicen** qué pasó y **dónde**.

```
TypeError: Cannot read properties of null (reading 'nombre')
    at calcular (script.js:14)
```

- **Tipo**: `TypeError` (intentaste algo imposible para ese tipo).
- **Causa**: leer `.nombre` de algo que es `null`.
- **Dónde**: línea 14.

Lee el mensaje entero antes de tocar nada. La mitad de los bugs se resuelven solo con leerlo bien.

## Errores comunes al empezar

- `is not defined` → variable mal escrita o fuera de su scope (Lección 20).
- `is not a function` → llamaste algo que no es función, o un typo en el método.
- `Cannot read properties of undefined` → accediste a algo que no existe.
- `NaN` en cálculos → mezclaste texto y número (Lección 42).

## Método para depurar

1. **Reproduce** el error de forma fiable.
2. **Localiza** la línea (el mensaje te la da).
3. **Imprime** los valores justo antes con `console.log`.
4. **Compara** lo que hay con lo que esperabas.
5. **Cambia una cosa** y vuelve a probar. No diez a la vez.

## El debugger del navegador

Más potente que `console.log`: en las herramientas (F12), pestaña *Sources*, puedes poner *breakpoints* (pausas) y ejecutar línea a línea viendo cada variable. Cuando `console.log` se quede corto, este es el siguiente nivel.

## Ejercicio

Este código falla. Encuentra por qué usando `console.log`:

```javascript
function media(numeros) {
  let suma = 0;
  for (let i = 0; i <= numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}
console.log(media([10, 20, 30]));   // da NaN, ¿por qué?
```

Pista: mira con atención la condición del bucle.

---
⬅️ [Anterior](48-nombrar.md) · ➡️ [Siguiente: Pensamiento computacional](50-pensamiento-computacional.md)
