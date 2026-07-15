# Lección 16 — Bucles anidados

Un **bucle anidado** es un bucle dentro de otro. El de dentro se ejecuta **completo** en cada vuelta del de fuera. Sirve para trabajar con tablas, cuadrículas y combinaciones.

## Ejemplo

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}
```

Salida:

```
i=1, j=1
i=1, j=2
i=2, j=1
i=2, j=2
i=3, j=1
i=3, j=2
```

El bucle de fuera (`i`) da 3 vueltas; por **cada una**, el de dentro (`j`) da 2 vueltas completas. Total: 3 × 2 = **6 ejecuciones**.

## Para qué sirve

Cualquier cosa con dos dimensiones: filas y columnas, un tablero, todas las parejas posibles…

```javascript
// Dibujar una cuadrícula de asteriscos 3x4
for (let fila = 0; fila < 3; fila++) {
  let linea = "";
  for (let col = 0; col < 4; col++) {
    linea += "*";
  }
  console.log(linea);   // **** (tres veces)
}
```

## Cuidado con el coste

Anidar multiplica el trabajo. Dos bucles de 1.000 vueltas son **un millón** de ejecuciones. No es malo, pero tenlo en cuenta: si puedes resolver algo sin anidar, suele ser más eficiente.

## Ejercicio

Usa dos bucles anidados para imprimir todas las tablas de multiplicar del 1 al 5 (el de fuera la tabla, el de dentro del 1 al 10).

---
⬅️ [Anterior](15-for-of.md) · ➡️ [Siguiente: Declarar funciones](17-funciones.md)
