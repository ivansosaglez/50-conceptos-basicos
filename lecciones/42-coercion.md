# Lección 42 — Coerción de tipos

La **coerción** es cuando JavaScript **convierte un tipo en otro automáticamente**. Es la causa de los resultados más sorprendentes del lenguaje, así que conviene entenderla para no caer en trampas.

## Coerción automática (la traicionera)

```javascript
console.log("5" + 3);    // "53"  → convierte 3 a texto y une
console.log("5" - 3);    // 2     → convierte "5" a número y resta
console.log("5" * "2");  // 10    → ambos a número
console.log(true + 1);   // 2     → true se vuelve 1
```

El `+` es especial: si **un lado es texto**, convierte todo a texto y concatena. El resto de operadores (`-`, `*`, `/`) convierten a número. De ahí el desconcierto.

## Por qué pasa esto en la vida real

Los datos de formularios e internet llegan como **string**. Si no conviertes, sumas mal:

```javascript
const a = "10";   // de un input
const b = "5";
console.log(a + b);   // "105"  ← ¡no es 15!
```

## Conversión manual (la recomendada)

No dejes que JavaScript adivine: **convierte tú** de forma explícita.

```javascript
console.log(Number("10") + Number("5"));   // 15  ✅
console.log(String(42));                    // "42"
console.log(Boolean(0));                    // false

// Atajos comunes:
console.log(parseInt("10px"));     // 10  (extrae el entero)
console.log(parseFloat("9.99€"));  // 9.99
console.log(+"42");                // 42  (+ delante convierte a number)
```

## Cuidado con NaN

Si conviertes algo que no es número, sale `NaN` (*Not a Number*):

```javascript
console.log(Number("hola"));   // NaN
console.log(isNaN(Number("hola")));   // true → así lo detectas
```

## Regla de oro

**Convierte siempre de forma explícita.** Usa `Number()`, `String()`, `parseInt()` en vez de confiar en la coerción automática. Tu código será predecible y evitarás bugs como `"105"`.

## Ejercicio

Tienes `const cantidad = "3"` y `const precio = "9.99"` (ambos texto). Calcula el total **correctamente** convirtiéndolos a número primero.

---
⬅️ [Anterior](41-null-undefined.md) · ➡️ [Siguiente: Truthy y falsy](43-truthy-falsy.md)
