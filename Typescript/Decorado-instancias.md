# Decoradores de Clase

En Typescript, los decoradores (decorators en inglés) permiten  añadir anotaciones y metadatos o incluso cambiar el comportamiento de clases, propiedades, métodos y parámetros.

Un decorador no es más que una **función** que, dependiendo de qué cosa queramos decorar, sus argumentos serán diferentes.

# Instancias

Para manipular los objetos o instancias de las clases (tipos) también se utilizan variables y éstas tienen una semántica propia la cual, se diferencia de los tipos básicos. Para ello, deberemos usar explícitamente el operador `new`. En caso contrario contendrán una referencia a null, lo que semánticamente significa que no está haciendo referencia a ningún objeto.

 Sintaxis para instanciar objetos: 
 ```Typescript
 <nombre_objeto>= new <Nombre_de_Clase>(<parámetros>);
 ```
 Ejemplo:
 ```Typescript
 let persona = new Persona();
 ```