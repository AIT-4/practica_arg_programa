# Clases

Una clase es la descripción de una entidad u objeto de forma tal que pueda usarse como plantilla para crear muchos objetos que respondan a dicha descripción. Para establecer analogías, se puede pensar que una clase se corresponde con el concepto de tipo de dato de la programación estructurada tradicional, y los objetos creados a partir de la clase (llamados instancias en el mundo de la POO) se corresponden con el concepto de variable de la programación tradicional. Así como el tipo es uno solo y describe la forma que tienen todas las muchas variables de ese tipo, la clase es única y describe la forma y el comportamiento de los muchos objetos de esa clase.

Para describir objetos que responden a las mismas características de forma y comportamiento, se definen las clases. 

## Representación gráfica de clases

La representación gráfica de una o varias clases se realiza mediante los denominados Diagramas de Clase.  Para ello, se utiliza la notación que provee el Lenguaje de Modelación Unificado (UML, ver www.omg.org ), a saber:

- Las clases se denotan como rectángulos divididos en tres partes. La primera contiene el nombre de la clase, la segunda contiene los atributos y la tercera los métodos.
- Los modificadores de acceso a datos y operaciones, a saber: público, protegido y privado; **se representan con los símbolos +, # y – respectivamente**, al lado izquierdo del atributo. (+ público, # protegido,

## Relación entre clases y objetos   

Algorítmicamente, las clases son descripciones netamente estáticas o plantillas que describen objetos. Su rol es definir nuevos tipos conformados por atributos y operaciones. Es decir que,  las clases son una especie de molde de fábrica, en base al cual son construidos los objetos.

Por el contrario, los objetos son instancias particulares de una clase. Durante la ejecución de un programa sólo existen los objetos, no las clases.
- La declaración de una variable de una clase NO crea el objeto.

La creación de un objeto, debe ser indicada explícitamente por el programador (instanciación),  de forma análoga a como inicializamos las variables con un valor dado, sólo que para los objetos se hace a través de un **método CONSTRUCTOR**.

## Clases en Typescript

### Clases

Una **clase en Typescript** no es más que una secuencia de símbolos (o caracteres) de un alfabeto básico. Esta secuencia de símbolos forma lo que se denomina el código fuente de la clase. Hay dos aspectos que determinan si una secuencia de símbolos es correcta en Typescript: **la sintaxis y la semántica.**

Las reglas de **sintaxis** de Typescript son las que permiten determinar de qué manera los símbolos del vocabulario pueden combinarse para escribir código fuente correcto mientras que la **semántica** por su parte, guarda una estrecha relación con las acciones o instrucciones lo que permite determinar el significado de la secuencia de símbolos para que se lleve a cabo la acción por la computadora.

Sintaxis para la definición de clases en Typescript:

```TypeScript
clase <nombre de la clase>
{
    /*Atributos*/
    /*Métodos*/
}
```

### Atributos
Son variables que se declaran dentro de la clase, y sirven para indicar la forma o características de cada objeto representado por esa clase. Los atributos, de alguna manera, muestran lo que cada objeto es, o también, lo que cada objeto tiene.

Sintaxis:
```TypeScript
<nombre_variable>: <tipo_de_datos>
```

### Métodos
Son funciones, procedimientos o rutinas declaradas dentro de la clase, usados para describir el comportamiento o las acciones de los objetos descriptos por esa clase. Los métodos, de alguna manera, muestran lo que cada objeto hace.

La sintaxis es:  
```TypeScript
<nombre_método>(<parámetros>): <tipo_de_datos_devuelto>,  
{
    /*instrucciones*/
}
```

### Constructores
Es un método especial que permite instanciar un objeto. Su nombre está definido por la palabra constructor, y no tiene ningún tipo de retorno. Puede recibir 0 a n parámetros.

Sintaxis: 
```TypeScript
Constructor(<parámetros>)
{
    /*instrucciones*/
}
```

### Propiedades 
#### (getters y los setters). 
Las mismas proporcionan la comodidad de los miembros de datos públicos sin los riesgos que provienen del acceso sin comprobar, sin controlar y sin proteger a los datos del objeto.

### Modificadores de acceso
La forma que los programas orientados a objetos, provee para que un programador obligue a respetar el Principio de Ocultamiento son los llamados modificadores de acceso.

Se trata de ciertas palabras reservadas que colocadas delante de la declaración de un atributo o de un método de una clase, hacen que ese atributo o ese método tengan **accesibilidad** más amplia o menos amplia desde algún método que no esté en la clase. Así, los modificadores de acceso pueden ser: public, private , protected

- **Public:** Un miembro público es accesible tanto desde el interior de la clase (por sus propios métodos), como desde el exterior de la misma (por métodos de otras clases).
- **Private:** Sólo es accesible desde el interior de la propia clase, usando sus propios métodos.
- **Readonly:** El acceso es de sólo lectura.
- **Protected:** aplicable en contextos de herencia (tema que veremos más adelante), hace que un miembro sea público para sus clases derivadas y para clases en el mismo paquete, pero los hace privados para el resto.

 Sintaxis:
 ```TypeScript
 <modificador> <atributo o método>
 ```