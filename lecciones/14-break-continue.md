# Lección 14 — break y continue

Dos palabras que controlan el flujo **dentro** de un bucle: `break` lo corta del todo, `continue` salta a la siguiente vuelta.

## break: salir del bucle

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;          // sale del bucle por completo
  }
  console.log(i);   // 1, 2, 3, 4
}
```

Cuando `i` llega a 5, `break` detiene el bucle. Útil para **dejar de buscar en cuanto encuentras** lo que querías.

```javascript
const numeros = [3, 8, 1, 9, 4];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 5) {
    console.log("Primer número >5: " + numeros[i]);
    break;   // no hace falta seguir mirando
  }
}
```

## continue: saltar a la siguiente vuelta

```javascript
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue;       // salta los pares
  }
  console.log(i);   // 1, 3, 5
}
```

`continue` no termina el bucle: solo **se salta el resto de esa vuelta** y pasa a la siguiente.

## Diferencia clave

- `break` → "ya he terminado, salgo del bucle".
- `continue` → "esta vuelta no me interesa, pasa a la siguiente".

## Ejercicio

Recorre los números del 1 al 20. Salta con `continue` los múltiplos de 3, y usa `break` para parar en cuanto pases de 15.

---
⬅️ [Anterior](13-for.md) · ➡️ [Siguiente: for...of](15-for-of.md)
