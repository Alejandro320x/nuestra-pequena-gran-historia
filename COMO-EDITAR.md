# Cómo personalizar la página

Sólo necesitas editar [content.js](content.js).

## Cambiar textos

Modifica los campos dentro de `SITE`: título, introducción y textos de la línea de tiempo.

## Agregar tus fotos

1. Copia tus imágenes dentro de `assets/fotos`.
2. Cambia el valor de `foto` (la portada) y agrega cinco imágenes dentro de `fotos` (el collage). Por ejemplo:

```js
foto: 'assets/fotos/viaje-a-oaxaca.jpg',
fotos: [
  'assets/fotos/viaje-01.jpg',
  'assets/fotos/viaje-02.jpg',
  'assets/fotos/viaje-03.jpg',
  'assets/fotos/viaje-04.jpg',
  'assets/fotos/viaje-05.jpg'
],
```

Evita espacios o acentos en los nombres de archivo. Las fotos verticales u horizontales se ajustan automáticamente.

## Agregar o quitar recuerdos

Cada bloque dentro de `RECUERDOS` es un recuerdo. Para añadir uno, copia un bloque `{ ... }`, pégalo antes de `];` y completa: `fecha`, `titulo`, `resumen`, `foto`, `descripcion` y `frase`.

Después de guardar, recarga `index.html` en el navegador.
