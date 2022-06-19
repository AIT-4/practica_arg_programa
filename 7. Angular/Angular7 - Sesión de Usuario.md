# Angular

## Sesión de Usuario con Angular

### Sesiones y JWT

La seguridad es una parte importante de cada aplicación web, y los programadores debemos asegurarnos de que nuestras aplicaciones cuentan con una autenticación segura. El proceso de autenticación cuenta de dos partes, una que depende del lado del servidor o backend, y la otra que es el front.

### ¿Qué es un JSON Web Token?
Un JWT firmado consta de tres partes, todas ellas codificadas en **Base64** y separadas por un punto: **HEADER.PAYLOAD.SIGNATURE**

### ¿Qué significan estas tres partes?

#### HEADER

El header consta generalmente de dos valores y proporciona información importante sobre el token. Contiene el tipo de token y el algoritmo de la firma y/o cifrado utilizados. Este podría ser un ejemplo de header de un JWT: `{ "alg": "HS256", "typ": "JWT" }`

#### PAYLOAD

El campo payload de JSON Web Token contiene la información real que se transmitirá a la aplicación. Aquí se definen algunos estándares que determinan qué datos se transmiten y cómo. La información se proporciona como pares key/value (clave-valor); las claves se denominan claims en JWT. 

**Hay tres tipos diferentes de claims:**

1. Los **claims registrados** son los que figuran en el IANA JSON Web Token Claim Register y cuyo propósito se establece en un estándar. Algunos ejemplos son el emisor del token (iss, de issuer), el dominio de destino (aud, de audience) y el tiempo de vencimiento (exp, de expiration time). Se utilizan nombres de claim cortos para abreviar el token lo máximo posible.
2. Los **claims públicos** pueden definirse a voluntad, ya que no están sujetos a restricciones. Para que no se produzcan conflictos en la semántica de las claves, es necesario registrar los claims públicamente en el JSON Web Token Claim Register de la IANA o asignarles nombres que no puedan coincidir.
3. Los c**laims privados** están destinados a los datos que intercambiamos especialmente con nuestras propias aplicaciones. Si bien los claims públicos contienen información como nombre o correo electrónico, los claims privados son más concretos. Por ejemplo, suelen incluir datos como identificación de usuario, rol, o datos privados. Al nombrarlos, es importante asegurarse de que no vayan a entrar en conflicto con ningún claim registrado o público.

Un payload podría estructurarse, por lo tanto, de la siguiente manera: `{ "sub": "123", "name": "Alicia", "exp": 30 }`

#### SIGNATURE

La firma de un JSON Web Token se crea utilizando la codificación Base64 del header y del payload, así como el método de firma o cifrado especificado. La estructura viene definida por JSON Web Signature (JWS), un estándar establecido en el RFC 7515.

Existen diferentes métodos de firma, dependiendo del nivel de confidencialidad de los datos:

1. **Sin protección:** Si los datos no requieren un nivel de protección alto, puede especificarse el valor none en el header. En este caso, no se genera ninguna firma y el JWT solo consta de header y payload. Sin esta medida de protección, el payload puede leerse como texto en claro una vez descifrado el código Base64 y no se comprueba si el mensaje procede del remitente correcto o si fue modificado al transferirse.
2. **Firma (JWS):** Por lo general, basta con comprobar si los datos provienen del remitente correcto y si han sido modificados. Para ello, se utiliza el esquema JSON Web Signature (JWS), que garantiza que el mensaje no se haya cambiado por el camino y proceda del remitente correcto. Con este procedimiento, el payload también puede leerse como texto en claro tras el descifrado de Base64.
3. **Firma (JWS) y cifrado (JWE):** Además de JWS, es posible emplear JSON Web Encryption (JWE). JWE cifra el contenido del payload, que luego se firma con JWS. Para descifrar el contenido, se indica una contraseña común o una clave privada. De este modo, el remitente se verifica, el mensaje es confidencial y se autentifica, y el payload no puede leerse como texto en claro tras el descifrado de Base64.


Ejemplo: Tomando el ejemplo anterior, esta vez firmado: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt
ZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.2BVS_Yu3X7FdBtUStpCXrvZQ3nSL2c9WudFikJnUdsU`

Al decodificarlos usando la web https://jwt.io/ obtenemos por ejemplo:
``` JSON
header:{
  "alg": "HS256",
  "typ": "JWT"
}
payload:{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

### Autenticación con JWT en Angular

El proceso de autenticación será manejado por un servicio. Entonces comenzamos creando un servicio Auth que facilitará la validación de la entrada y comunicación del usuario con el servidor.  Para eso aplicamos el siguiente comando:<br>
`ng generate service Auth`