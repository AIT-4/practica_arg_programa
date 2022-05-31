# Angular

## Expresiones y Pipes en Angular

### Expresiones

Con las expresiones se enriquece el HTML, ya que permite interpretar expresiones y resolverlas dentro de los templates. Las expresiones de Angular son muy similares a las expresiones de JavaScript. Las mismas pueden contener literales, operadores, variables y funciones. Para definir una expresión simplemente se las engloba dentro de dobles llaves `{{}}` que se podrán colocar expresiones en cualquier lugar del HTML. Cuando se ejecute la aplicación, las expresiones se evaluarán, resolverán y serán sustituidas con el resultado que corresponda. Veamos algunos ejemplos de expresiones:
```HTML
<h1>{{ 1 + 1}}</h1> 
<!-- esto se renderiza como: -->
<h1>2</h1>
```
```HTML
<span>{{ "Hola " + "JavaScript" }}</span>
<!-- esto se renderiza como -->
<span>Hola JavaScript </span>
```

Otra aplicación interesante de las expresiones es la capacidad de **formatear la salida**, por ejemplo, diciendo que lo que se va a escribir es un número y que deben representarse dos decimales necesariamente. Por ejemplo:`{{ precio | number:'2'}}`

### Pipes

Estos formateadores son conocidos como **Pipes** y Angular ya nos provee un grupo de funciones que podemos usar:
- **DatePipe:** Cambia el valor de fecha. 
- **UpperCasePipe:** Transforma texto en Mayúscula.
- **LowerCasePipe:** Transforma el texto en minúscula.
- **CurrencyPipe:** Transforma un número en una cadena de moneda de acuerdo a ciertas reglas.
- **DecimalPipe:** Transforma un número en una cadena con punto decimal.
- **PercentPipe:** Transforma un número en una cadena de porcentaje.

La lista completa, [acá](https://angular.io/api/common#pipes).

## Directivas en Angular

### ​​Introducción a las directivas de Angular

Una directiva es una clase con un decorador `@Directive()` y por lo tanto un componente es técnicamente una directiva. Sin embargo, los componentes son tan distintivos y fundamentales para las aplicaciones de Angular que se define específicamente el decorador `@Component()`, que extiende el decorador `@Directive()` con características orientadas a los templates. Además de los componentes, existen otros dos tipos de directivas: **estructural y atributo.**

### Tipos de directivas

**1. Directivas de Atributo:** Alteran la apariencia o comportamiento de un elemento del DOM. Son usados como atributos de los elementos. Se aplican como atributos a los elementos HTML. Modifican el DOM pero sin ser capaces de crear o remover elementos HTML sobre el que se aplican. Las directivas de tipo atributo están formadas por:
- `ngModel`: Implementa binding, que lo veremos en la siguiente sección.
- `ngClass`: permite añadir/eliminar varias clases.
- `ngStyle`: permite asignar estilos inline.

**2. Directivas Estructurales:** Permiten añadir, manipular o eliminar elementos del DOM. Lista completa de [directivas estructurales](https://angular.io/guide/structural-directives). Ejemplos:
- `*ngIf` o `[ngIf]`: Permite incluir condicionales de lógica del HTML, como por ejemplo evaluar sentencias, hacer comparaciones, mostrar u ocultar secciones de código, y entre las muchas condiciones que se pueden crear, para que se renderiza el HTML, cumpliendo la sentencia a evaluar.
- `*ngFor` o `[ngFor]`: Permite ejecutar bucles sobre elementos iterativos.
- `*ngSwitch` o `[*ngSwitch]` + `*ngSwitchCase` o `[ngSwitchCase]`: Esta directiva corresponde a una serie de directivas que cooperan entre sí para generar un resultado. Estas directivas son `ngSwitch`, `ngSwitchCase` y `ngSwitchDefault`. La directiva `ngSwitch` es una directiva de atributo, mientras que las directivas `ngSwitchCase` y `ngSwitchDefault` corresponden a directivas estructurales.

**3. Directivas de Componentes:** Como se mencionó anteriormente, las directivas de componente son una clase. Si la combinamos con un decorador `@Component` es un **componente** o con el decorador `@NgModule` un **módulo**. A su vez Las directivas de componentes se subdividen en:
- **Directivas de Angular (Angular Directives):** `@Component`, `@Module`, etc.
- **Directivas customizadas (Custom Directives):**  Son directivas creadas a demanda por los desarrolladores mediante la instrucción: `ng g directives [nombre-de-la-directiva]`.
