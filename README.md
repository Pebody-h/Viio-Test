# Guia para levantar el proyecto Viio-Test el cual fue fue contruido con

### Frontend: React, vite, sass.

### Backend: express, axios, swagger, itrm-tools, sequelize.

### DataBase: postgresql

### Docker se usa para hacer una imagen de cada parte del proyecto y se deja estructurado para se monte un contenedor con el pryecto y se pueda probar.

1- Crear un archivo `.env` en el directorio `/server` con el siguiente contenido:

```
SERVER_PORT=3001
DB_USER=admin
DB_PASSWORD=admin
DB_HOST=db
DB_NAME=viiotest
JWT_SECRET=secretKey
```

2- Instalar las dependencias manualmente ejecutando `npm install` en los directorios `/client` y `/server`

3- Crear y levantar el contenedor docker, parace en el directorio raiz del proyecto y ejecutar el comando

```bash
docker-compose up --build
```

4- Si falla el montaje de algun servicio en docker se puede levantar manualmente llendo al directorio del servicio que no se monto ej: servidor ir a `/server` y ejecutar `npm start` correra el el puerto `http://localhost:3001` o si falla el cliente ir a `/client` y ejecutar `npm run dev` correra el el puerto `http://localhost:3000` antes de ejecutar estos comandos ejecutar `npm install` para que instale las dependencias y pueda funcionar el levantamiento de los servicios manualmente.

5- Para visualizar la documentacion creada con swagger buscar en el navegador la ruta `http://localhost:3001/docs`
