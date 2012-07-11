Arquitectura Javascript basada en backbone-aura
===============================================================================

Esta versión de bacbkone-aura está basada en el commit 5d44b69 del repositorio oficial de backbone-aura
y sienta las bases para la arquitectura javascript
que utilizaré en el lado del cliente de varios proyectos.

### Organización de carpetas

La carpeta assets/ contiene las librerías de terceros,
la carpeta app/js/ contiene mi código, en el cual podrán
encontrar las carpetas:
* app/js/core/
* app/js/sandbox/
* app/js/security/
* app/js/witgets/
conforme la teoría en la cual se basa backbone-aura para
el desarrollo de aplicaciones de gran envergadura.

En la carpeta `app/witgets/` se encuentras las mini-aplicaciones
hechas en backbone (los módulos), que son totalmente independientes
y 100% desacopladas unas de otras. En cada uno de estos módulos puedo
utilizar libremente mi estructura backbone. Lo ideal sería
mantener una estructura de carpetas y especios de nombres en cada una,
algo similar a la siguiente estructura:
* com/namespace/models/
* com/namespace/collections/
* com/namespace/views/
* com/namespace/routers/
* com/namespace/templates/
Y así sucesivamente...

### Agregando nuevos módulos (witgets)

Para agregar nuevos módulos, simplemente hay que editar los archivos 
`app/js/security/permissions.js` y `app/js/app.js`
Luego tengo que crear una carpeta en el directorio 
`app/js/witgets/`, un archivo llamado `main.js` en 
la carpeta creada, y a partir de allí puedo concentrarme
en desarrollar el módulo creado con estos pasos.

