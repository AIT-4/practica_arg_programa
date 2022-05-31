# Angular

## Arquitectura

La arquitectura de una aplicación en Angular se basa en bloques de construcción, llamados **Módulos o NgModules** y proporcionan un contexto de compilación para cada uno de los componentes que hacen a la página. Cualquier sitio web creado con Angular constituye un conjunto de módulos y componentes.

Hay más elementos constructivos en Angular y se pueden clasificar en tres bloques principales:

- **Módulos:** NgModule
- **Componentes:** @Component, @Template, @Directives, Data-binding, etc
- **Servicios e Inyección de dependencias:** @Injectable, Routing, etc

A parte, están los modelos de datos que se designan a través de clases o interfaces con TypeScript que luego se importan al momento de usarlos.

## Módulos

Las aplicaciones de Angular son **modulares**, es decir, se componen de varios **bloques independientes**, los cuales cada uno contiene una parte de la aplicación o una serie de comportamientos de esta.  Los módulos son la manera básica de organizar una aplicación en este framework. En un módulo estarán una serie de archivos que están relacionados entre sí y organizados en una misma carpeta o directorio.

>#### Crear módulo
>**Para crear un módulo propio**, además del módulo principal que se genera al crear un proyecto (`app.module.ts`):
>- Ejecutar el comando: `ng generate module <nombre-modulo>` o su abreviado: `ng g m <nombre-modulo>`
>- Una vez ejecutado el comando, AngularCLI  creará  un subdirectorio con el nombre del módulo dentro de la carpeta `src/app` y un archivo: `nombre-modulo.module.ts`.

### Anatomía de un módulo

Angular define los módulos como clases, a través del decorador `@NgModule`. 

- **imports:** Clases exportadas importaciones necesarias. Le dice a Angular sobre otros NgModules que este módulo en particular necesita para funcionar correctamente. (https://docs.angular.lat/guide/bootstrapping )
- **declarations:** Aquí se listan los componentes u otros artefactos que incluye este módulo.
- **providers:** Enumera los proveedores de servicios necesarios.
- **bootstrap:** El componente raíz que Angular crea e inserta en la página web de host `index.html`. (https://docs.angular.lat/guide/bootstrapping )
- **exports:** Aquí se listan los componentes exportados hacia afuera del módulo.

### ¿Quién inicia el módulo?

La aplicación arranca en el `main.ts` donde se le pasa el primer módulo al sistema para que luego se propague la ejecución cargando los demás módulos.

## Componentes

Un componente en Angular es un elemento que está compuesto por:

- **Un Template** (`app.component.html`), que contendrá el HTML para visualizar la interfaz de usuario, la vista o en términos más simples lo que vas a ver en la página.
- **Un Controlador o Controller** que es donde se encuentra la lógica, (`app.component.ts`), ese archivo debe incluir una clase y esta es la que va a contener las propiedades que se van a usar en la vista (HTML) y los métodos que será las acciones que se ejecutarán en la vista. En este archivo de lógica también se incluye una metadata, que es definida con un decorador, que identifica a Angular como un componente.
- **Un archivo para el CSS** (podemos usar un preprocesador como SASS o LESS), donde incluiremos los estilos, lo que nos ayuda a hacer bonita nuestra aplicación.

**Un componente puede tener más archivos**, dependiendo de las necesidades de los proyectos. Al final de la cuenta, una aplicación en Angular estará compuesta por varios componentes.

>#### Crear componente
>Ya vimos como crear un proyecto en Angular usando el CLI pero repetimos el comando:
`ng new nombre-de-mi-app`
<br>
Ahora, para **crear un componente** se debe ejecutar el siguiente comando:
`ng generate component <nombre-del-componente> [opciones]`
<br>
También se puede usar la forma abreviada:
`ng g c <nombre-del-componente> [opciones]`
<br>
Y para un mejor orden se puede especificar una carpeta donde ir guardando los componentes, por ejemplo en el siguiente comando, incorporamos la carpeta components:
`ng g c components/<nombre-del-componente> [opciones]`
<br>

### Partes de un componente

Podemos inferir en **3 partes* importantes que hacen a un componente en Angular:
- **selector:** le dice a Angular que cree e inserte una instancia de este componente siempre que encuentre la etiqueta en el html. Por ejemplo, si el HTML de una aplicación contiene `<app-root></app-root>`, entonces Angular inserta una instancia de la vista HeaderComponent entre esas etiquetas.
- **templateUrl:** la dirección relativa al template HTML del componente. Alternativamente, se puede escribir código html.
- **styleUrls:** la dirección relativa al archivo CSS del componente.

### Usar componentes

#### Exportar Componentes del módulo hacia afuera

Por defecto los componentes definidos dentro de un módulo sólo son accesibles por éste. Si deseamos dejar visibles componentes, para que luego sean utilizados desde otros componentes, simplemente deberemos invocarlos en el array exports del módulo como sigue:
```Typescript
@NgModule({
    declarations: [
        HeaderComponent, 
        NavComponent, 
        FooterComponent,
    ],
    imports: [
        CommonModule
    ],
    // Exporetamos el compoentn para ser usado por otros modulos.
    exports: [
        HeaderComponent, NavComponent, FooterComponent,
    ]
})
```

#### Importar componentes de otros módulos 

Para hacer uso de los componentes declarados en otro módulo, se debe importar el módulo completo que contiene dichos componentes al módulo destino. Para ello, debemos editar el módulo destino:

Agregar la referencia relativa del módulo.
Referenciar en el array imports como en el siguiente ejemplo:
```Typescript
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        //Importo el LayoutModule desde otro módulo.
    ],
    providers: [],
    bootstrap: [AppComponent]
})
```
## Templates, Plantillas o Vistas en Angular

Un template es un bloque  HTML que le dice al framework, en este caso Angular, cómo renderizar o dibujar el componente definiendo así la vista con la cual interactúa el usuario. El template es un código HTML dotado de la capacidad de interpretar o agregar funciones, variables, lógica y bucles (ifs y fors), el sistema de binding que veremos más adelante y que permite enlazar las variables al código HTML.<Br>
Si tenemos una jerarquía de componentes, también podemos pensar que existe una jerarquía de vistas, las cuales contienen vistas embebidas o anidadas, o incluso dentro de otros componentes. Las vistas, dotadas de la lógica, permiten modificar, mostrar y ocultar secciones enteras de la UI o páginas como una unidad. 
