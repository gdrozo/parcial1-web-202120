# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

El entpoint es un GET con url 'api/:height' donde :height es el parametro de la altura. El empoint debuelve la lista completa de jugadores porque hacer un loop doble toma mucho tiempo y no supe como hacerlo de otra manera. :(
