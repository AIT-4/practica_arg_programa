# Introducción a Bases de Datos

## ¿Qué es una base de datos?

Como definición de base de datos entendemos que se trata de un conjunto de datos interrelacionados, almacenados sin redundancias innecesarias y que tienen un significado implícito, los cuales sirven a las aplicaciones sin estar relacionados de una manera directa entre ellos. Por otro lado, cuando hablamos de los datos, queremos decir: hechos conocidos que pueden registrarse y que tienen un significado implícito.

>**Una base de datos puede ser utilizada por varias aplicaciones y usuarios, y toda base de datos debe permitir insertar, modificar y borrar datos.**

Hay dos grandes categorías o grupos de datos:

- **Los datos de usuarios:** Datos usados por las aplicaciones
- **Los datos de sistema:** Datos que la base de datos utiliza para su propia gestión como los usuarios registrados para operar la base, los privilegios de estos usuarios, configuraciones, etc

Para manipular y gestionar las bases de datos existen herramientas (software) denominadas [**sistemas gestores de bases de datos o SGBD**](https://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_bases_de_datos). Es decir, nos permite realizar las funciones de modificar, extraer y almacenar información de una base de datos, además de poseer herramientas con funciones de eliminar, modificar, analizar, etc… datos de estas. Realiza la función concreta de interfaz entre la base de datos y los usuarios finales o los programas correspondientes, organizando los datos y permitiendo su acceso.

## Organización de una base de datos

Toda base de datos organizada debe cumplir los siguientes objetivos:
1. **Tiene que ser versátil:** esto quiere decir que, dependiendo de los usuarios o las aplicaciones, puedan hacer diferentes cosas o traten a los datos de formas distintas.
2. **Tiene que atender con la rapidez adecuada.**
3. **Tiene que tener un índice de redundancia lo más bajo posible.**
4. **Tiene que disponer de una alta capacidad de acceso** para ganar el mayor tiempo posible en la realización de consultas.
5. **Tener un alto índice de integridad**, esto significa que al tener muchos usuarios consultando y escribiendo en una misma base de datos no puede haber fallos en la inserción de datos, errores por redundancia o lenta actualización.

## Tipos de Base de Datos

Nos enfocaremos en las bases de datos **Relacionales** pero a los fines informativos dejamos una breve descripción de las otras opciones que existen:

### 1. Segun su variabilidad

Se encuentran las bases de datos **estáticas** que son aquellas que sus datos no pueden modificarse, están diseñadas especialmente para la lectura de sus datos. Por otro lado las bases de datos **dinámicas** son aquellas que sus datos se pueden actualizar, ya sea agregando, modificando o eliminando los mismos durante el transcurso del tiempo.

### 2. Segun el contenido

- **Bases de datos jerárquicas:** La información se organiza en nodos jerárquicos. Desde un nodo raíz, cada nodo puede contener información de varios hijos y así sucesivamente. Son utilizadas en sistemas con gran volumen de datos y datos compartidos.
- **Transaccionales:** El diseño de la base de datos está encaminado a recoger las diferentes transacciones que se producen en un sistema. El diseño e implementación están orientados a la rapidez y seguridad de las transacciones, y a la consistencia y durabilidad de los datos. Se deben crear sistemas totalmente fiables, que permitan la recuperación de los errores (revirtiendo los procesos que sean necesarios) y que aíslen las diferentes fuentes que acceden al programa para evitar errores e incoherencias.
- **Relacionales:** Se basan en la relación de datos estructurados, fiables y homogéneos. Los datos están relacionados conceptualmente, no por su utilización y su implementación en máquina. Las diferentes entidades del sistema son accesibles en tiempo real y compartidas por los usuarios. El centro de los modelos relacionales son las entidades y las relaciones entre ellas, pudiendo haber relaciones normales, de herencia, composición, etc.
- **Multidimensionales (BDMD):** La información de la base de datos puede verse contenida en una sola tabla multivaluada donde se almacenan registros referidos a las dimensiones o métricas que se van a analizar. Estas tablas se asimilan a un hipercubo, las dimensiones de los cubos se corresponden con la tabla y el valor almacenado en cada celda equivale al de la métrica.
- **Orientadas a objetos:** Están basadas en el concepto de objeto de programación. Tradicionalmente, las bases de datos almacenaban los datos y sus relaciones y los procedimientos se almacenaban en los programas de aplicación. En estas bases de datos, sin embargo, se combinan los procedimientos de una entidad con sus datos.
- **Clave-valor:** Basadas en el concepto de las [tablas hash](http://www.it.uc3m.es/pbasanta/asng/course_notes/ch07.html). Se basan en almacenar una serie de registros clave-valor. La clave es un string convencional mientras que los valores pueden ser desde un string hasta una lista o un conjunto. Está diseñada para almacenar grandes cantidades de información, que puede almacenarse en sesión o caché, para ser compartida por varios servidores. Un ejemplo de este tipo de bases de datos es [Redis](https://redis.com/es/).
- **Orientadas a columnas:** La principal diferencia es que los registros no se organizan en filas sino en columnas. Todo el dominio de valores de un caso de uso, por ejemplo, «Nombre de persona», se pueden acceder como si fueran una única unidad. Cambia totalmente el paradigma de la consulta. Tradicionalmente se recorrían todas las filas de una o varias tablas para devolver los campos seleccionados que cumplieran cierta selección, ahora se seleccionan unos pocos registros de los que nos traemos todo el dominio de valores que cumpla las condiciones. Esto tiene sentido en consultas analíticas.
- **Orientada a documentos o NoSQL:** Cada registro corresponde a un documento. Estos documentos se diferencian de los registros de las bases de datos SQL en que se autodefinen ellos mismos, es decir, cada documento define el formato que va a tener, son libres de esquemas (diferente número de campos, campos de longitud variable, campos multivalor, etc.). Los documentos comparten entre sí una parte de información similar y otra muy diferente y se identifican por una clave única, que puede ser desde un string hasta una URI. Las consultas suelen ser dinámicas y muy dispares, normalmente, se dispone de un API o lenguaje de interrogación para las consultas de documentos según el contenido de los mismos. Este tipo de consultas son muy útiles de cara a los análisis estadísticos.<br>
*Ejemplos de bases de datos documentales son MongoDB, CouchDB, ArangoDB, etc.*

## Base de datos SQL vs NoSQL

En la actualidad se habla mucho de las bases de datos NoSQL como MongoDB. Es normal que nos preguntemos sobre sus comparativas con las SQL. Vamos a realizar una tabla comparativa para resumir esta comparación:

|Característica|Base de datos SQL|Base de datos NoSQL|
|---|---|---|
|Desempeño (performance)|Bajo|Alto|
|Availability (disponibilidad)|Pobre|Buena|
|Fiabilidad (reliability)|Buena|Pobre|