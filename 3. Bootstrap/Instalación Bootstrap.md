# Instalación

En el siguiente apartado mostraremos cómo incorporar fácil y rápidamente el framework a un proyecto, describiendo tres de las principales formas de instalación. El funcionamiento de Bootstrap requiere tanto de su propia librería de javascript como la de Popper (https://popper.js.org/), esta característica hace que se pueda instalar tanto atado (bundle en inglés) o por separado.

Es importante recordar que la referencia a los archivos CSS se debe incluir dentro de la etiqueta `<head>...</head>` mediante la etiqueta `<link>`, un ejemplo sería `<head>... <link href="dist/bootstrap/css/bootstrap.min.css" rel="stylesheet"></head>`. Para el caso de  los archivos JS (javascript) preferentemente se deben incluir al final de la etiqueta `<body>` mediante la etiqueta `<script>`, un ejemplo de que incluye la librería de bootstrap y popper sería `<body> … <script src="dist/bootstrap/js/bootstrap.bundle.min.js"></script> </body>`.


# CSS y Javascript compilados y/o minimizados

Esta forma de instalación requiere que los archivos de Bootstrap sean descargados previamente de forma local. Por ejemplo, la última versión disponible al momento de la edición de este documento, se encuentra en el siguiente enlace https://github.com/twbs/bootstrap/releases/download/v5.0.1/bootstrap-5.0.1-dist.zip.

Luego se incorporan a la estructura del proyecto, para finalmente poder referenciar los archivos del framework . Cumpliendo algunos estándares del desarrollo web, para el ejemplo de la  se copian los archivos dentro de la carpeta “dist” (distribución), pero esta puede tener cualquier otro nombre.
