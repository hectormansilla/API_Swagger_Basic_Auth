# Basic API with Swagger
API con autentificación básica, creada para el análisis, estudio y de Swagger para la documentación de APIs.

## Comencemos 
Simplemenete clonar este repositorio

## Pre-requisitos
- Tener instalado node v14.13.0 u otra versión superior [node.js](https://nodejs.org/es/)
- Configurar y disponer de archivo .ENV

## Instalación
Instalar las dependencias mediante npm

```
npm install
```

## Iniciación 
Crear archivo .env y definir username/password para la API, por ejemplo:
```
USER_KEY="mi_username"
PASS_KEY="mi_password"
```

Para ejecutar la aplicación, puedes usar el siguiente comando

```
nodemon app.js
```

## Construido con
- [Dotenv](https://github.com/motdotla/dotenv)
- [Express](http://expressjs.com/)
- [Express Basic Auth](https://github.com/LionC/express-basic-auth)
- [CORS](https://github.com/expressjs/cors)
- [Swagger JSdoc](https://github.com/Surnet/swagger-jsdoc)
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)


## Autor
- Hector Mansilla 

## Colaboración
- Rodrigo Salazar
