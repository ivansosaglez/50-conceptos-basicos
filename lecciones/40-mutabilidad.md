# Lección 40 — Mutabilidad

**Mutar** significa modificar algo después de crearlo. Entender qué se puede mutar y qué no aclara muchos comportamientos "raros" de JavaScript, sobre todo con `const`.

## Dos grupos de tipos

- **Primitivos** (number, string, boolean): **inmutables**. No se pueden cambiar por dentro.
- **Objetos y arrays**: **mutables**. Su contenido sí se puede cambiar.

## Los primitivos no cambian

```javascript
let texto = "hola";
texto.toUpperCase();      // genera "HOLA" pero no toca el original
console.log(texto);       // "hola"

texto = "adiós";          // esto NO es mutar: es reasignar la variable
```

Por eso los métodos de string devuelven uno nuevo (Lección 36): el original es intocable.

## Los arrays y objetos sí cambian

```javascript
const lista = [1, 2, 3];
lista.push(4);            // mutamos el contenido
console.log(lista);       // [1, 2, 3, 4]
```

## El misterio del const

Esto confunde a todos al principio:

```javascript
const lista = [1, 2];
lista.push(3);     // ✅ permitido
lista = [9, 9];    // ❌ error
```

`const` solo impide **reasignar** la variable (apuntarla a otra cosa). **No** congela el contenido. La caja es fija, pero lo de dentro se puede reordenar.

## Cuidado: copiar no siempre copia

```javascript
const a = [1, 2, 3];
const b = a;       // ¡no es una copia! b apunta al MISMO array
b.push(4);
console.log(a);    // [1, 2, 3, 4]  → ¡a también cambió!
```

Con objetos y arrays, `=` copia la **referencia**, no los datos. Para una copia de verdad:

```javascript
const copia = [...a];          // array nuevo independiente
const copiaObj = { ...persona }; // objeto nuevo independiente
```

Los `...` se llaman *spread* y crean una copia superficial. Este es uno de los conceptos que más errores sutiles evita.

## Ejercicio

Crea un array, asígnalo a otra variable con `=`, modifica el segundo y observa que el primero cambia. Luego repítelo usando `[...]` y comprueba que ahora son independientes.

---
⬅️ [Anterior](39-buscar-texto.md) · ➡️ [Siguiente: null y undefined](41-null-undefined.md)
