# Métodos

Los métodos son acciones que se pueden realizar a los elementos HTML mediante DOM.
Los más comunes son los  utilizados para encontrar elementos:

  - Encontrar elementos HTML por ID `(getElementById)`
  - Encontrar elementos HTML por nombre de etiqueta `(getElementsByTagName)`
  - Encontrar elementos HTML por nombre de clase `(getElementsByClassName)`
  - Encontrar elementos HTML mediante selectores CSS `(querySelectorAll)`

### Ejemplos:

- Este ejemplo encuentra el elemento con `id="intro"`:
```JavaScript
const element = document.getElementById("intro");
```
- Este ejemplo encuentra todos los `<p>` elementos:
```JavaScript
const element = document.getElementsByTagName("p");
```
- Este ejemplo devuelve una lista de todos los elementos con `class="intro"`.
```JavaScript
const x = document.getElementsByClassName("intro");
```
- Este ejemplo devuelve una lista de todos los elementos `<p>` con `class="intro"`.
```JavaScript
const x = document.querySelectorAll("p.intro");
```

# Elementos

Los elementos del DOM pueden ser creados, modificados o eliminados. A continuación veremos las principales acciones que se pueden realizar.

## Cambiar elementos HTML:

| Propiedad | Descripción |
 ------------------- | --------------------- |
|`element.innerHTML =  new html content`| Cambia el contenido de un elemento HTML|
|`element.attribute = new value`|Cambia el valor del atributo de un elemento HTML|
|`element.style.property = new style`|Cambia el valor del atributo de un elemento HTML|
|Método|Descripción|
|`element.setAttribute(attribute, value)`|Cambia el estilo de un elemento HTML|

## Agregar y eliminar elementos:

| Método | Descripción |
 ------------------- | --------------------- |
|`document.createElement(element)`|Crea un elemento HTML|
|`document.removeChild(element)`|Elimina un elemento HTML|
|`document.appendChild(element)`|CAgrega un elemento HTML|
|`document.replaceChild(new, old)`|Reemplaza un elemento HTML|

### Ejemplo:
```JavaScript
function addElement () {
  // obtener el elemento div con id = "div_example"
  const existDiv = document.getElementById("div_example");

  // crear un nuevo elemento div
  const newDiv = document.createElement("div");

  // agregar el nuevo elemento div existente
  existDiv.appendChild(newDiv);
}
```
