# Lección 19 — return

`return` hace que una función **devuelva un resultado** para usarlo después. Hasta ahora las funciones solo imprimían; con `return` te dan un valor que puedes guardar, sumar o pasar a otra función.

## Imprimir vs devolver

```javascript
// Solo imprime: el resultado se pierde
function sumarMal(a, b) {
  console.log(a + b);
}

// Devuelve: el resultado se puede reutilizar
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(3, 5);
console.log(resultado);        // 8
console.log(sumar(2, 2) * 10); // 40 → operamos con lo devuelto
```

`console.log` solo **muestra** algo en pantalla. `return` **entrega** un valor al código que llamó a la función. Son cosas distintas, y esta confusión es muy habitual al empezar.

## return corta la función

En cuanto se ejecuta un `return`, la función **termina**. Lo que haya debajo no se ejecuta:

```javascript
function comprobar(edad) {
  if (edad < 18) {
    return "Menor";   // sale aquí
  }
  return "Mayor";     // solo se llega si edad >= 18
}
```

## Sin return

Una función sin `return` devuelve `undefined`. Está bien si solo querías que hiciera algo (como imprimir), pero no podrás reutilizar un resultado.

## Encadenar funciones

```javascript
function doble(n) { return n * 2; }
function masUno(n) { return n + 1; }

console.log(masUno(doble(5)));   // doble(5)=10 → masUno(10)=11
```

## Ejercicio

Crea `function esPar(n)` que **devuelva** `true` o `false` según si `n` es par. Úsala dentro de un `if`.

---
⬅️ [Anterior](18-parametros.md) · ➡️ [Siguiente: Scope](20-scope.md)
