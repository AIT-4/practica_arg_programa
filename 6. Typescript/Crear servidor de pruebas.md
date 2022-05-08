# ¿Cómo crear un servidor de pruebas en VSCode?

Para ello, seguir los siguientes pasos:
- Ejecutar el siguiente comando `npm install http-server`. A continuación, se creará la carpeta **node_modules.**
- Ejecutar el comando `npm init`. A continuación, se creará un archivo **package.json**

**Nota:** El archivo **package.json** es un archivo que contiene todos los metadatos acerca del proyecto. Son ejemplos: descripción, licencia, autor,  dependencias, scripts, entre otros.

- Configurar la entrada “scripts” como sigue: 
```JSON
{
"scripts": {
    "start": "http-server -p 8436"
    },
}
```
- Finalmente, ejecutar el comando: `npm start`

Como podemos observar en la Terminal de VSCode, accediendo a la url: http://127.0.0.1:8436 podremos visualizar nuestro html y, si inspeccionamos el fuente el mensaje “Hola Mundo” en la consola.