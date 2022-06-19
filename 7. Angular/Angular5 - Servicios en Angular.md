# Angular

## Servicios en Angular

Básicamente un servicio es un **proveedor de datos**, que mantiene lógica de acceso a ellos y operativa relacionada con el negocio y las cosas que se hacen con los datos dentro de una aplicación. Los servicios serán consumidos por los componentes, que delegaron en ellos la responsabilidad de acceder a la información y la realización de operaciones con los datos.

Es decir que los servicios:
- Son proveedores de datos. 
- Ayudan a mantener la lógica de acceso a los mismos.
- Proveen la operatoria del negocio. 
- Manipulan de datos en la aplicación.
- Invocar a un servidor HTTP para consumir una API 

Para crear un servicio usamos el comando `generate service`, indicando a continuación el nombre del servicio a generar. Por ejemplo: `ng generate service <nombre_servicio>`.<br>
Es habitual colocar el servicio dentro de un módulo en concreto, y se puede lograr desde el CLI agregando una barra `/` y el nombre del servicio, pero no agrega el servicio al código de un módulo concreto, sino que colocará el archivo en el directorio de ese módulo. Por ejemplo: ng generate service `<nombre_modulo>/<nombre_servicio>`

>Como los **servicios** son algo que se suele usar desde varios **componentes**, muchos desarrolladores optan por crearlos dentro de un módulo compartido, que puede llamarse **common**, **shared** o algo parecido.

Inmediatamente se podrá usar en cualquiera de los componentes que pertenecen a este módulo, usando el decorador del módulo (@NgModule), en el array de "providers". Por ejemplo un servicio recién creado se verá así:
```Typescript
import {Injectable} from '@angular/core';
@Injectable()
export class MyService{
    constructor(){}
}
```
>El `import`, superior, `{ Injectable } from '@angular/core'`, es importante para el funcionamiento del decorador `@injectable`.

### ¿Qué es Inyección de dependencias?

Los componentes consumen servicios; es decir, que podemos inyectar un servicio en un componente, dándole acceso al componente a ese servicio. 

De esta manera, el inyector crea dependencias y mantiene un contenedor de instancias de dependencia que utilizará si es posible. Es importante mencionar que se requiere de un proveedor, dado que éste le dice a un inyector cómo obtener o crear una dependencia.
Para cualquier dependencia que necesitemos en una aplicación, debemos registrar un proveedor con el inyector de la aplicación, con el fin de que el inyector pueda utilizar el proveedor para crear nuevas instancias. 

La inyección de dependencias permite mantener las clases componentes ligeras y eficientes. No obtienen datos del servidor, validan la entrada del usuario o registra directamente en la consola; tales tareas son delegadas a los servicios. 

### ¿Cómo funciona la inyección de dependencias?

Cuando Angular crea una nueva instancia de un componente, determina qué servicios u otras dependencias necesita ese componente al observar los tipos de parámetros del constructor.

Si Angular descubre que un componente depende de un servicio, primero verifica si el inyector tiene instancias existentes de ese servicio. Si una instancia de servicio solicitada aún no existe, el inyector crea una utilizando el proveedor registrado y la agrega al inyector antes de devolver el servicio a Angular.

Cuando todos los servicios solicitados se han resuelto y devuelto, Angular puede llamar al constructor del componente con esos servicios como argumentos y finalmente el componente puede hacer uso del mismo.