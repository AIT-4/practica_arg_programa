# Angular

## Databinding en Angular

El databinding es la forma que tiene Angular para permitirnos mostrar contenido dinámico. Podríamos traducir el databinding como "comunicación" entre nuestro código HTML (template.html) y nuestra lógica de programación (componente.ts).<br>
Angular nos proporciona varias maneras de comunicación entre archivos.  Estas formas nos permiten:
1. Mostrar información en el HTML, también conocido como template, desde el archivo .ts.
2. Pasar información al archivo TypeScript dada por el usuario al hacer click en un botón, cambiar un menú, completar un input, etc. Es lo que se conoce como ''reaccionar a eventos del usuario''.
3. Combinar a la misma vez ambas formas de intercambio de información.

### Tipos de Binding

A continuación se enumeran los tipos de binding, su correspondiente sintaxis y categoría.
|Tipo|Sintaxis|Categoría|
|----|--------|---------|
|Interpolation<br>Property<br>Attribute<br>Class<br>Style|{{expression}}<br>[target]="expression"<br>bind-target="expression"|One-way<br>Desde el componente hacia el DOM|
|Event|(target)="statement"<br>on-target="statement"|One-way<br>Desde el DOM hacia el componente|
|Two-way|[(target)]="expression"<br>bindon-target="expression"|Two-way<br>En ambos sentidos|

### Event binding

**Event binding** es la forma de comunicación que utilizamos cuando queremos reaccionar a algún evento provocado por el usuario. Por ejemplo, queremos que algo ocurra cuando el usuario haga clic en un botón, imagen, formulario, etc.<br>
Hay un aspecto importante del **evento binding** que tenemos que mencionar, y es el uso de la palabra reservada (en inglés, keyword) "$event".

### Two way data binding

**Two way data binding** es una manera sencilla y corta de combinar los dos tipos de data binding que hemos visto anteriormente: string interpolation y event binding. 

### Target de un databinding

Observa que los binding types (a diferencia de los de interpolación) poseen un target (nombre) y están entre  `[]`, `()` o ambos `[()]`.  

Usa: 
- `()` para enlazar del DOM al componente.
- `[]` para enlazar desde el componente al DOM.
- `[()]` para enlazar en ambos sentidos.

**El target** de un databinding puede ser una **propiedad, un atributo, un evento, etc.** Cada elemento público de una directiva está disponible para el binding en un template como se puede observar en el siguiente ejemplo:

|Tipo|Target|Ejemplo|
|----|------|-------|
|Property|`src` (element property)<br>`hero` (component property)<br>`ngClass` (directive property)|`<img [src]="heroImageUrl">`<br>`<app-hero-detail [hero]="currentHero"></app-hero-detail>`<br>`<div [ngClass]="{'special': isSpecial}"></div>`|
|Event|`click`(element event)<br>`deleteRequest` (component event)<br>`myClick` (directiva event)|`<button (click)="onSave()">Save</button>`<br>`<app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>`<br>`<div (myClick)="clicked=$event" clickable>click me</div>`|
|Two-way|Event y Property|`<input [(ngModel)]="name">`|
|Attribute|Attribute|`<button [attr.aria-label]="help">help</button>`|
|Class|Class property|`<div [class.special]="isSpecial">Special</div>`|
|Style|Style property|`<button [style.color]="isSpecial ? 'red' : 'green'">`|




