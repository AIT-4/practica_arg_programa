# Single Web Applications

## ¿Qué es una aplicación SPA?

Las **Multi Page Application** o **MPA** hacen referencia a Arquitecturas Web Clásicas en donde uno dispone de múltiples páginas HTML y cada una carga diferentes contenidos apoyándose en la navegación contra el servidor. Es decir cada página muestra su contenido y se conecta mediante links con las demás y todas son generadas desde el servidor.
A diferencia de las tradicionales **MPA (múltiple page application)**, las aplicaciones **SPA (single page application)** consisten en aplicaciones de una sola página por lo que todas vistas de la misma se generan dinámicamente gracias a la capacidad de javascript para manipular el DOM. De esta manera, no recarga el navegador cada vez que el usuario hace una petición lo que permite que ésta sea óptima en rendimiento, mantenimiento y escalabilidad.

## Características funcionales de una SPA:

Las SPA tiene 3 detalles funcionales que las caracterizan y son:

1. Punto de entrada central: Un punto de entrada único que se genera dinámicamente según la petición del usuario.
2. Página fija, Vistas cambiantes: Como en el caso de una aplicación de escritorio, nos mantenemos en un “marco único” y fijo, mientras que “vistas dinámicas” van ofreciéndonos las distintas posibilidades del uso y navegación.
3. Página fija, no URL fija: Es posible que la dirección URL sufra cambios en base a las actividades de uso de la plataforma y vaya modificándose aunque ese “marco único” se mantenga fijado. Esto es un tanto reduccionista (existen SPA que no transforman sus direcciones), pero es útil para comprender su mecánica.


## ¿En qué lenguaje de programación se hacen las SPA?

Una SPA se creará siempre en **Javascript.** Ya que, al ser una aplicación web ejecutada del lado del cliente, no hay otro lenguaje que pueda hacer eso. A esto habrá que sumarle, lógicamente, **el HTML y CSS.**

Dentro de Javascript, contaremos con multitud de **librerías y frameworks** que nos facilitarán el desarrollo de las SPA. Algunas de las más usadas son:

- AngularJS
- Angular
- VUE
- React
- EmberJS
- Polymer

Este listado son las librerías y frameworks más comunes, aunque hay muchos otros. Escoger una librería y un framework dependerá, básicamente, de tus gustos, la experiencia que tengas con los mismos, el tamaño de la aplicación a desarrollar.

De todos modos, esto sólo aplica al **front-end**. Si queremos ampliar la pregunta al lado del **back-end**, es decir, del servidor, nos serviría cualquier lenguaje de back-end para producir la parte del servidor. Lo que tendríamos que hacer es crear un **API REST** que devuelve el **JSON** necesario para alimentar de datos a la SPA. Es decir, la SPA nos dará igual cómo esté desarrollada del lado del back-end, es totalmente independiente a este.