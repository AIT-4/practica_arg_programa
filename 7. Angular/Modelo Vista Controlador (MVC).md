# Modelo Vista Controlador (MVC)

El modo MVC (Model-View-Controller) es un modo de arquitectura de software en ingeniería de software que divide el sistema de software en tres partes básicas: Modelo , Vista y Controlador.

Los profesionales pueden utilizar su propia experiencia para agrupar grupos relacionados: Modelo: Las funciones que deben tener los programadores al escribir programas (para lograr algoritmos, etc.), y los expertos en bases de datos realizan la gestión de datos y el diseño de bases de datos (que pueden lograr funciones específicas); Controlador: Responsable de reenviar solicitudes y procesar solicitudes; Vista: los diseñadores de interfaces llevan a cabo el diseño de interfaces gráficas.

*Veamos los detalles de los tres componentes del patrón MVC:*

**Modelo (Model):** se utiliza para encapsular datos relacionados con la lógica empresarial de la aplicación y el método de procesamiento de los datos. Model tiene derecho a acceder directamente a los datos, como el acceso a la base de datos. El modelo no depende de la vista y el controlador, es decir, al modelo no le importa cómo se mostrará u operará. Sin embargo, los cambios en los datos del modelo generalmente se anuncian mediante un mecanismo de actualización. Para implementar este mecanismo, las Vistas utilizadas para monitorear este Modelo deben registrarse en este Modelo con anticipación, de modo que la Vista pueda comprender los cambios que se han producido en el Modelo de datos. (Por ejemplo, el "modo de observador" en el modo de diseño de software)

**Vista (View):** Capaz de lograr una visualización intencionada de datos (teóricamente, esto no es necesario). Por lo general, no hay lógica de programa en View. Para realizar la función de actualización en la Vista, la Vista necesita acceder al modelo de datos (es decir, el Modelo) que monitorea, por lo que debe registrarse de antemano con los datos monitoreados por ella.

**Controlador (Controller):** desempeña un papel organizativo entre diferentes niveles, utilizado para controlar el flujo de la aplicación. Procesa eventos y responde. Los "eventos" incluyen el comportamiento del usuario y los cambios en el modelo de datos.

## Objetos

### Objetos Modelo

Un objeto modelo es un tipo de objeto que contiene los datos de una aplicación, proporciona acceso a esos datos e implementa lógica para manipular los datos. Los objetos de modelo desempeñan uno de los tres roles definidos por el patrón de diseño Model-View-Controller. (Los otros dos roles son desempeñados por objetos de vista y controlador)
Idealmente, un objeto de modelo no debe tener una conexión explícita con los objetos de vista que presentan sus datos y permitir a los usuarios editar esos datos, en otras palabras, no debe preocuparse por problemas de interfaz de usuario y presentación

**Comunicación:** Las acciones del usuario en la capa de vista que crean o modifican datos se comunican a través de un objeto controlador y dan como resultado la creación o actualización de un objeto modelo. Cuando un objeto de modelo cambia (por ejemplo, se reciben nuevos datos a través de una conexión de red), notifica a un objeto controlador, que actualiza los objetos de vista adecuados.

### Objetos Vista

Un objeto de vista es un objeto de una aplicación que los usuarios pueden ver. Un objeto de vista sabe cómo dibujarse a sí mismo y puede responder a las acciones del usuario. Un propósito principal de los objetos de vista es mostrar datos de los objetos de modelo de la aplicación y permitir la edición de esos datos. A pesar de esto, los objetos de vista suelen desacoplarse de los objetos de modelo en una aplicación MVC.

**Comunicación:** Los objetos de visualización aprenden sobre los cambios en los datos del modelo a través de los objetos del controlador de la aplicación y comunican los cambios iniciados por el usuario (por ejemplo, el texto introducido en un campo de texto) a través de los objetos del controlador a los objetos del modelo de una aplicación.

### Objetos Controlador

El controlador actúa como coordinador o como intermediario entre uno o más objetos de vista y uno o más objetos de modelo. En el patrón de diseño Model-View-Controller, un objeto controller (o, simplemente, un controller) interpreta las acciones e intenciones del usuario realizadas en los objetos de vista, como cuando el usuario pulsa o hace clic en un botón o introduce texto en un campo de texto, y comunica datos nuevos o modificados a los objetos del modelo. Cuando los objetos del modelo cambian (por ejemplo, el usuario abre un documento almacenado en el sistema de archivos), comunica esos nuevos datos del modelo a los objetos de vista para que puedan mostrarlos. Los controladores son, por lo tanto, el conducto a través del cual los objetos de vista aprenden sobre los cambios en los objetos del modelo y viceversa. Los objetos de controlador también pueden configurar y coordinar tareas para una aplicación y administrar los ciclos de vida de otros objetos.

**Comunicación:** Un objeto controlador interpreta las acciones del usuario realizadas en los objetos de vista y comunica datos nuevos o modificados a la capa del modelo. Cuando los objetos del modelo cambian, un objeto controlador comunica esos nuevos datos del modelo a los objetos de vista para que puedan mostrarlos.


