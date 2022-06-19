# Angular

## Sistema de Routing en Angular

En Angular lo común es que el index.html en su body sólo tiene un componente raíz AppComponent y toda la acción se desarrollará en dicho componente. Todas las páginas (o vistas) se mostrarán sobre ese archivo, intercambiando el componente que se esté visualizando en cada momento. Para facilitar esto, Angular provee el sistema de routing AppRoutingModule. Éste módulo le indicará al enrutador qué vista mostrar cuando un usuario hace click en un enlace o pega una URL en la barra de direcciones del navegador. 

Los elementos básicos que forman parte del Sistema de Rutas son:
- **El módulo del sistema de rutas:** Llamado `RouterModule`.
- **Rutas de la aplicación:** es un array con un listado de rutas que nuestra aplicación soportará.
- **Enlaces de navegación:** Son enlaces HTML en los que incluiremos una directiva para indicar que deben funcionar usando el sistema de routing.
- **Contenedor:** Donde colocar las páginas (o vistas) de cada ruta. Cada página (o vista) será representada por un componente.

### Crear el módulo de rutas

Para crear un módulo de rutas manualmente, ejecutar los siguientes pasos:
1. Ir a la **consola** o **terminal** de preferencia.
2. Ejecutar el comando: `ng g m app-routing.module.ts`
3. **Editar** el módulo creado anteriormente a fin de:
4. Importar el módulo `RouterModule` y la clase `Routes`.
5. Crear un array routes que contendrá luego las rutas virtuales.
6. Importar y exportar el `RouterModule`.

### Configurar las rutas de la aplicación

Solo nos falta definir las rutas en el array routes dónde cada ruta está configurada en base a las propiedades:
1. **path:** define la ruta virtual de nuestra aplicación.
2. **component:** define el componente que le dice al enrutador que componente corresponde al seleccionar dicha ruta.

Hasta el momento las rutas creadas son accesibles desde el navegador, pero si quisiéramos que sean linkeables desde un template deberíamos agregar a nuestros templates el selector roterLink para la directiva RouterLink que convierte los clics del usuario en navegaciones del enrutador.

si queremos obtener el efecto de una SPA donde se realiza el montaje y desmontaje de componentes en base a los clicks que un usuario haga en un menú, debemos tener en cuenta la etiqueta `<router-outlet></router-outlet>` en el html donde deseo que aparezca este ruteo. Esta es una etiqueta especial de Angular que sirve para mostrar los componentes hijos de un componente. 

### Crear rutas por defecto

Para configurar el redireccionamiento a un componente por defecto, como por ej. al home o inicio, hay que editar el array routes del archivo app-routing.module.ts a fin de agregar la siguiente ruta por defecto:<br>`{path: '', redirectTo: '/inicio, pathMatch: 'full'}`

Para definir una ruta por defecto, debemos utilizar 2 propiedades más de las rutas que son:
1. `redirectTo` que permite redireccionar a la ruta “/inicio” si la ruta es una cadena vacía dado.
2. `patchMatch` que especifica que la coincidencia sea exacta. Es decir, que si introducimos otra cosa como ruta (que no sea la cadena vacía) no redireccionará al inicio.

Luego, si el usuario especifica la ruta vacía a nuestra web http://www.midominio.com, o en caso de estar en localhost  http://localhost:4200/ , el sistema de routing nos llevará automáticamente a la ruta http://www.midominio.com/inicio o http://localhost:4200/inicio.

### Crear rutas a Página 404

Sin ninguna duda, nos interesará también configurar una página 404 en el sistema de rutas para cuando el usuario intente escribir una ruta que no exista. 

Previamente tendremos que tener nuestro componente de página 404, por ejemplo `Pagina404` y agregar en el array del routes del `app-routing.module.ts` a:<br>`{path: '**', component: Pagina404Component}`.

### Crear rutas con partes dinámicas en Angular

**------>TERMINAR<------**

