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

> **Para crear un módulo propio**, además del módulo principal que se genera al crear un proyecto (`app.module.ts`):
>- Ejecutar el comando: `ng generate module <nombre-modulo>` o su abreviado: `ng g m <nombre-modulo>`
>- Una vez ejecutado el comando, AngularCLI  creará  un subdirectorio con el nombre del módulo dentro de la carpeta `src/app` y un archivo: `nombre-modulo.module.ts`.

## Anatomía de un módulo

Angular define los módulos como clases, a través del decorador `@NgModule`. 

- **imports:** Clases exportadas importaciones necesarias. Le dice a Angular sobre otros NgModules que este módulo en particular necesita para funcionar correctamente. (https://docs.angular.lat/guide/bootstrapping )
- **declarations:** Aquí se listan los componentes u otros artefactos que incluye este módulo.
- **providers:** Enumera los proveedores de servicios necesarios.
- **bootstrap:** El componente raíz que Angular crea e inserta en la página web de host `index.html`. (https://docs.angular.lat/guide/bootstrapping )
- **exports:** Aquí se listan los componentes exportados hacia afuera del módulo.

## ¿Quién inicia el módulo?

La aplicación arranca en el `main.ts` donde se le pasa el primer módulo al sistema para que luego se propague la ejecución cargando los demás módulos.

