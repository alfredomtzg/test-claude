# Test Claude Project

Este proyecto es una aplicación web que utiliza Node.js para el backend, SQL como base de datos y React para el frontend. A continuación se detallan las instrucciones de instalación y uso.

## Estructura del Proyecto

```
test-claude
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   └── index.js
│   │   ├── models
│   │   │   └── index.js
│   │   ├── routes
│   │   │   └── index.js
│   │   └── utils
│   │       └── helpers.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── ExampleComponent.js
│   │   ├── pages
│   │   │   └── HomePage.js
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/alfredomtzg/test-claude.git
   cd test-claude
   ```

2. **Instalar dependencias del backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Instalar dependencias del frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

## Uso

### Backend

1. **Iniciar el servidor:**

   ```bash
   cd backend
   npm start
   ```

   El servidor se ejecutará en `http://localhost:3000`.

### Frontend

1. **Iniciar la aplicación React:**

   ```bash
   cd frontend
   npm start
   ```

   La aplicación se ejecutará en `http://localhost:3001`.

## Docker

Para ejecutar la aplicación utilizando Docker, asegúrate de tener Docker y Docker Compose instalados. Luego, ejecuta:

```bash
docker-compose up
```

Esto levantará los contenedores para el backend y el frontend.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.