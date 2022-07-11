# Angular

## Formularios en Angular

Los formularios son una parte fundamental de las aplicaciones, permiten al usuario ingresar datos a la base de datos, realizar el login, registrarse, entre otras acciones muy necesarias. 

Angular nos provee dos tipos de formularios:

- **Basados en plantilla (Template driven):** proporcionan un enfoque basado en directivas. Los mismos, hacen foco en escenarios simples y no son tan reusables.
- **Reactivos (Model Driven):** proporcionan un enfoque basado en modelos por lo que son más robustos, escalables, reusables y testeables.

||Reactivos|Basados en plantillas|
|------|--------|----------|
|Configuración|**Explícita.**<br>Se crea en la clase del componente.|**Implícita.**<br>Se crea a través de directivas.|
|Modelo de Datos|Estructurado e inmutable|No estructurado y mutable|
|Flujo de datos<br>(entre vista y el modelo)|Síncrono|Asíncrono|
|Validación de Formularios|Por medio de funciones|Por medio de directivas|

>Los formularios basados en plantillas usan `FormsModule`, mientras que los formularios reactivos usan `ReactiveFormsModule`.

### Formularios reactivos

Los formularios reactivos, también se conocen como formularios dirigidos por modelos. Emplean una técnica en la que los formularios se diseñan en el componente y luego se realizan los enlaces para el HTML. Proveen métodos explícitos e inmutables para administrar el estado del formulario cuyos valores cambian con el tiempo. Cada cambio de estado en el formulario retorna un nuevo valor permitiendo mantener la integridad con el modelo.

Para que Angular, intérprete nuestros formularios como reactivos, debemos importar los módulos de Formularios y Formularios Reactivos en el archivo `app.module.ts` o en los módulos dónde necesites trabajar dichos formularios. 

#### FormControl

Es la unidad más pequeña de un formulario reactivo como por ejemplo: un cuadro de texto, un calendario, una lista desplegable, etc. Para configurar un FormControl reactivo debemos:
1. Importar la librería en el controlador de nuestro componente:<br>
`import {FormControl} from '@angular/forms';`
2. Inyectar en el constructor el `FormBuilder`.
3. En el constructor de nuestro controlador crear el grupo de controles para el formulario.
4. En el template del controlador enlazar el `FormBuilder` utilizando el property binding `[formGroup]` y los atributos `formControlName` con sus respectivos form control.

#### Validaciones de Formularios

Angular nos provee la clase Validators, la cual contiene una serie de métodos estáticos que nos permiten validar las entradas de datos comunes tales como el formato del email, valores numéricos, máximos y mínimos, cantidad mínima y máxima de caracteres, entre otros.

https://docs.angular.lat/api/forms/Validators

#### Tipo de validaciones

Angular nos provee dos tipos de validaciones:
- **Validadores sincrónicas:** consisten en funciones síncronas que toman una instancia de control y devuelven inmediatamente un conjunto de errores de validación o un valor nulo. Se ejecutan cuando el usuario carga una letra o número, aprieta un botón, cambia una opción, etc.
- **Validadores asíncronas:** consisten en funciones asíncronas que toman una instancia de control y devuelven una Promesa u Observable que luego emite un conjunto de errores de validación o nulos. Esto quiere decir que la validación se hace a destiempo de las acciones del usuario.


