Arquitectura Javascript basada en backbone-aura
===============================================================================

Esta versi�n de bacbkone-aura est� basada en el commit 5d44b69 del repositorio oficial de backbone-aura
y sienta las bases para la arquitectura javascript
que utilizar� en el lado del cliente de varios proyectos.

### Organizaci�n de carpetas

La carpeta assets/ contiene las librer�as de terceros,
la carpeta app/js/ contiene mi c�digo, en el cual podr�n
encontrar las carpetas:
* app/js/core/
* app/js/sandbox/
* app/js/security/
* app/js/witgets/
conforme la teor�a en la cual se basa backbone-aura para
el desarrollo de aplicaciones de gran envergadura.

En la carpeta `app/witgets/` se encuentras las mini-aplicaciones
hechas en backbone (los m�dulos), que son totalmente independientes
y 100% desacopladas unas de otras. En cada uno de estos m�dulos puedo
utilizar libremente mi estructura backbone. Lo ideal ser�a
mantener una estructura de carpetas y especios de nombres en cada una,
algo similar a la siguiente estructura:
* com/namespace/models/
* com/namespace/collections/
* com/namespace/views/
* com/namespace/routers/
* com/namespace/templates/
Y as� sucesivamente...

### Agregando nuevos m�dulos (witgets)

Para agregar nuevos m�dulos, simplemente hay que editar los archivos 
`app/js/security/permissions.js` y `app/js/app.js`
Luego tengo que crear una carpeta en el directorio 
`app/js/witgets/`, un archivo llamado `main.js` en 
la carpeta creada, y a partir de all� puedo concentrarme
en desarrollar el m�dulo creado con estos pasos.

