# Angular

## ¿Qué es Angular?

Angular es un **framework** open source desarrollado por Google para facilitar la creación y programación de aplicaciones web de una sola página o **SPA (Single Page Application)**.

Angular **separa el frontend y el backend en la aplicación**, evita escribir código repetitivo y mantiene todo más ordenado gracias a su patrón MVC (Modelo-Vista-Controlador) asegurando los desarrollos con rapidez, a la vez que posibilita modificaciones y actualizaciones.

## Instalación de Angular

1. Instalar NodeJS en su última versión
En la consola ejecutar el siguiente comando: `npm install -g npm@latest`

> **¿Qué es npm?**
npm es el **Manejador de Paquetes de Node.js (Node Package Manager)** que viene incluido y ayuda a cada desarrollo asociado a Node. Es ampliamente utilizado por los desarrolladores de JavaScript para compartir herramientas, instalar módulos y administrar dependencias.

2. Instalar la última versión de Angular CLI con el siguiente comando: `npm install -g @angular/cli@latest`

3. Moverse desde la consola hasta el lugar donde queremos crear nuestro proyecto. Mi escritorio, mis documentos, o cualquier otra carpeta específica.

4. Ejecutar el siguiente comando:  ng new nombre-del-proyecto

5. El asistente nos solicitará algunos datos del proyecto:

El nombre del proyecto no puede contener espacios o guiones u otros caracteres especiales, solo letras y números. Si se quiere añadir el routing de angular. Esto es opcional, ya que se puede agregar de forma manual de ser necesario. Preguntará si queremos usar un formato específico para los estilos.

6. Esperamos a que el asistente acabe de generar nuestro proyecto de Angular. Ya estamos listos para abrir el proyecto con nuestro IDE

## Estructura de un proyecto Angular

Al crear un nuevo proyecto las tres principales carpetas son:

- **e2e:** Carpeta dedicada a testing “end to end”.
- **node_modules:** Carpeta en la que se incluyen todos los node modules instalados al hacer npm install.
- **src:** Carpeta en la que se realizará el desarrollo de la aplicación.

- Es importante mencionar que la carpeta **node_modules**, en general se agrega al .gitignore para no enviar al repositorio los archivos de paquete que pueden ocupar una cantidad importante de espacio.

- Luego hay varios archivos con diferentes extensiones, en su mayoría son archivos de configuración del proyecto. Para no complicar demasiado en este punto del capítulo, sólo miraremos el **package.json**

### package.json

Este es uno de los archivos principales del proyecto. Tal y como indica la extensión del archivo es un JSON y dentro de él se encuentra la información relevante sobre el proyecto:

- **name:** Indica el nombre del proyecto.
- **version:** Indica el número de versión del desarrollo. A medida que se vayan desplegando diferentes versiones, se deberá ir incrementando este número.
- **scripts:** Son los comandos que permite ejecutar la consola. Se podrán ejecutar estos comandos de 2 formas diferentes:
    1. Poniendo en la consola `npm run [clave]`. Por ejemplo para ejecutar el comando llamado `start`, comando que arranca el proyecto, o podemos escribir `npm run start`.
    2. Poniendo en la consola `ng` seguido de uno de los valores que se muestran en el JSON. Siguiendo con el mismo ejemplo anterior, para ejecutar el comando `start` se escribe en este caso `ng serve`.
- **dependencies:** Indica las dependencias del proyecto (para la versión de producción) como pueden ser la versión del **compilador de Angular**, versión del **router de Angular**, versión de **RxJS**, **Axios**, etc. Si se añaden nuevas librerías / dependencias mediante `npm install` aparecerán en este apartado.
- **devDependencies:** Aquí se indican las dependencias que son necesarias durante el desarrollo del proyecto como pueden ser la versión del **Angular CLI**, versión de **TypeScript** o la versión de librerías para testing como pueden ser **Jasmine y Karma**. Si queremos que al instalar una librería sea indicada como una dependencia de desarrollo hay que agregar `--save-dev` el comando quedaría:  `npm install <nombre-del-paquete> --save-dev`

### Carpeta src

En esta carpeta es donde se encuentra todo el código del proyecto (componentes, estilos, configuraciones de entornos, archivos de traducciones, etc.) Los elementos más relevantes son app, assets, environments y el archivo `index.html`, que es el html principal, a partir del cual se cargará el resto de la aplicación.

### Carpeta app

En esta carpeta se encuentran los componentes,  módulos y archivos de rutas. Se deberán crear tantas subcarpetas como módulos y/o vistas tenga la aplicación

- **Componentes:** Son los diferentes elementos que van a componer la aplicación, por ejemplo una tabla, una ventana modal o un formulario. Los componentes están formados por 3 tipos de archivos principales: **un archivo HTML, un archivo CSS y un archivo TypeScript.** En el HTML se define cómo se verá el componente. En el archivo de TypeScript el comportamiento o lógica del componente. En el CSS se definen los estilos propios del componente.

- **Módulos:** En estos módulos (archivos `module.ts`) se importan los componentes que pertenecen a dicho módulo. Permiten organizar la aplicación y reutilizar componentes pertenecientes a otros módulos. Puede crearse un módulo por cada vista de la aplicación y adicionalmente se puede crear un módulo que englobe a los componentes comunes o compartidos por varias vistas. Además, disponer de diferentes módulos permite beneficiar la **carga perezosa** (lazy loading) que aporta un mayor rendimiento en la aplicación debido a que sólo se cargarán aquellos módulos que sean necesarios en cada momento. Al crear una aplicación vendrá un único módulo por defecto: `app.module.ts`.

- **Archivos de rutas:** Nos permiten indicar las rutas que tendrán las diferentes vistas de la aplicación. Las rutas se configuran dentro de los archivos llamados `routing.module.ts`, puede haber rutas principales y también rutas anidadas.

### Carpeta assets

Esta carpeta está dedicada a guardar los diferentes recursos que necesite una aplicación como imágenes, iconos, tipos de fuentes o archivos de traducciones si la aplicación requiere utilizar varios idiomas.