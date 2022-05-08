# Fundamentos del enfoque orientado a objetos (EOO)

## Jerarquías

Las clases no se construyen para que trabajen de manera aislada, la idea es que ellas se puedan relacionar entre sí de manera que puedan compartir atributos y métodos sin necesidad de volver a escribirlos y así resolver un problema.
La posibilidad de establecer jerarquías entre las clases es una característica que diferencia esencialmente la programación orientada a objetos de la programación tradicional, ello debido fundamentalmente a que permite extender y reutilizar el código existente sin tener que volver a escribirlo cada vez que se necesite.

### Herencia

 En Programación Orientada a Objetos se llama herencia al mecanismo por el cual se puede definir una nueva clase B en términos de otra clase A ya definida, pero de forma que la clase B obtiene todos los miembros definidos en la clase A sin necesidad de hacer una redeclaración explícita. El sólo hecho de indicar que la clase B hereda (o deriva) desde la clase A, hace que la clase B incluya todos los miembros de A como propios (a los cuales podrá acceder en mayor o menor medida de acuerdo al calificador de acceso [public, private, protected, "default"] que esos miembros tengan en A).

 La clase desde la cual se hereda, se llama **super clase**, y las clases que heredan desde otra se llaman **subclases** o **clases derivadas**: de hecho, la herencia también se conoce como **derivación de clases**.

 En general, se podrían definir esquemas de jerarquías de clases en base a dos categorías o formas de herencia:
 - Herencia simple: Si se siguen reglas de herencia simple, entonces **una clase puede tener una y sólo una superclase directa**.
 - Herencia múltiple: Si se siguen reglas de herencia múltiple, entonces **una clase puede tener tantas superclases directas como se desee**.

### Agregación y Composición

Las jerarquías de agregación y composición son asociaciones entre clases del tipo **“es parte de”**.

---

## Abstracción

Una abstracción denota las características esenciales de un objeto (datos y operaciones), que lo distingue de otras clases de objetos. Decidir el conjunto correcto de abstracciones de un determinado dominio, es el problema central del diseño orientado a objetos.

>*“Una abstracción se centra en la visión externa de un objeto por lo tanto sirve para separar el comportamiento esencial de un objeto de su implementación. La decisión sobre el conjunto adecuado de abstracciones para determinado dominio es el problema central del diseño orientado a objetos. Se puede caracterizar el comportamiento de un objeto de acuerdo a los servicios que presta a otros objetos, así como las operaciones que puede realizar sobre otros objetos”*

Los mecanismos de abstracción usados en el EOO para extraer y definir las abstracciones son:

1. **GENERALIZACIÓN:** Mecanismo de abstracción mediante el cual un conjunto de clases de objetos son agrupados en una clase de nivel superior (Superclase), donde las semejanzas de las clases constituyentes (Subclases) son enfatizadas, y las diferencias entre ellas son ignoradas.

En consecuencia, a través de la generalización:

- La superclase almacena datos generales de las subclases
- Las subclases almacenan sólo datos particulares.

2. **ESPECIALIZACIÓN:** es lo contrario de la generalización. La clase Médico es una especialización de la clase Persona, y a su vez, la clase Pediatra es una especialización de la superclase Médico.

3. **AGREGACIÓN:** Mecanismo de abstracción por el cual una clase de objeto es definida a partir de sus partes (otras clases de objetos). Mediante agregación se puede definir por ejemplo un computador, por descomponerse en: la CPU, la ULA, la memoria y los dispositivos periféricos. El contrario de agregación es la descomposición.

4. **CLASIFICACIÓN:** Consiste en la definición de una clase a partir de un conjunto de objetos que tienen un comportamiento similar. La ejemplificación es lo contrario a la clasificación, y corresponde a la instanciación de una clase, usando el ejemplo de un objeto en particular

---

## Encapsulamiento

También conocido como, **Ocultamiento**. Es la propiedad de la POO que permite ocultar los detalles de implementación del objeto mostrando sólo lo relevante. Esta parte de código oculta pertenece a la parte privada de la clase y no puede ser accedida desde ningún otro lugar.

El encapsulamiento da lugar al ya citado **Principio de Ocultamiento**: sólo los métodos de una clase deberían tener acceso directo a los atributos de esa clase, para impedir que un atributo sea modificado en forma insegura, o no controlada por la propia clase. El **Principio de Ocultamiento** es la causa por la cual en general los **atributos** se declaran como **privados (`private`)**, y los **métodos** se definen **públicos (`public`)**. Los calificadores private y public (así como protected , que se verá más adelante) tienen efecto a nivel de compilación: si un atributo de una clase es privado, y se intenta acceder a él desde un método de otra clase, se producirá en error de compilación.

---

## Modularidad

Es la propiedad que permite tener independencia entre las diferentes partes de un sistema. La modularidad consiste en dividir un programa en módulos o partes, que pueden ser compilados separadamente, pero que tienen conexiones con otros módulos. En un mismo módulo se suele colocar clases y objetos que guarden una estrecha relación. El sentido de modularidad está muy relacionado con el ocultamiento de información.

---

## Polimorfismo

Clases diferentes (polimórficas) implementan métodos con el mismo nombre. En resumen, el polimorfismo permite comportamientos diferentes, asociados a objetos distintos compartiendo el mismo nombre; al llamarlos por ese nombre se utilizará el comportamiento.

### Polimorfismo por herencia

Cuando una subclase hereda de una clase base, obtiene todos los métodos, campos, propiedades y eventos de la superclase sin embargo, quizás necesitemos un comportamiento diferente para las clases derivadas (o subclases).

### Polimorfismo por abstracción

El polimorfismo por abstracción consiste en definir clases base abstractas (que no se pueden instanciar) pero que sirven de base para las clases derivadas. Es decir, sólo existen para ser heredadas.

**Nota:** Las clases abstractas no están implementadas o si lo están es parcialmente. Forzosamente se ha de derivar si se desea crear objetos de la misma ya que no es posible crear instancias  a partir de ellas.

Debemos definir la clase abstracta anteponiendo el modificador `abstract` previo a la definición de la clase y al método que deseamos que forzosamente en las clases derivadas sea implementado.

### Polimorfismo por `interfaces`

Recordemos que una interfaz es un **CONTRATO** por lo que define propiedades y métodos, pero no su implementación.
Las interfaces, como las clases, definen un conjunto de propiedades, métodos y eventos. Pero de forma contraria a las clases, las interfaces no proporcionan **implementación**. Se implementan como clases y se definen como entidades separadas de las clases. Una interfaz representa un contrato, en el cual una clase que implementa una interfaz debe implementar cualquier aspecto de dicha interfaz exactamente como esté definido.

Para implementar la interfaz en nuestra clase Suma y Resta (y lograr el polimorfismo) debemos utilizar la palabra `implements`.

---

## Tipificación

Los tipos son la puesta en vigor de la clase de los objetos, de modo que los objetos de tipos distintos no pueden intercambiarse o, como mucho, pueden intercambiarse sólo de formas muy restringidas.

---

## Concurrencia

La concurrencia es la propiedad que distingue un objeto activo de uno que no está activo.
La concurrencia permite a dos objetos actuar al mismo tiempo.

---

## Persistencia

La persistencia es la propiedad de un objeto por la que su existencia trasciende el tiempo (el objeto continúa existiendo después de que su creador deja de existir) y/o el espacio (la posición del objeto varía con respecto al espacio de direcciones en el que fue creado).
Conserva el estado de un objeto en el tiempo y en el espacio.

---

## Clases estáticas

Una `static class` es aquella clase que se usa sin necesidad de realizar una instanciación de la misma. Se utiliza como una unidad de organización para métodos no asociados a objetos particulares y separa datos y comportamientos que son independientes de cualquier identidad.

Desafortunadamente no existen clases estáticas en Typescript, aunque sí podemos definir sus métodos como estáticos y trabajar con ella sin instanciar el  objeto.

```Typescript
class MyStaticClass {
    public static myMethod(): void {console.log("método estatico")};
}
```

---

## Interfaces

Además de ser útiles para implementar el polimorfismo, las `interfaces` nos permiten crear nuevos tipos y de esta manera comprobar los tipos de las variables.
