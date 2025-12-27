# Backend Project Documentation

Este archivo contiene la documentación del backend del proyecto `test-claude`, que utiliza Node.js y SQL como base de datos.

## Estructura del Proyecto

El backend está organizado de la siguiente manera:

```
backend
├── src
│   ├── app.js          # Punto de entrada de la aplicación
│   ├── config
│   │   └── db.js      # Configuración de la conexión a la base de datos
│   ├── controllers
│   │   └── index.js    # Controladores para manejar la lógica de negocio
│   ├── models
│   │   └── index.js    # Modelos de datos para interactuar con la base de datos
│   ├── routes
│   │   └── index.js    # Configuración de las rutas de la aplicación
│   └── utils
│       └── helpers.js   # Funciones utilitarias
├── package.json         # Configuración de npm del backend
└── README.md            # Documentación del backend
```

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/alfredomtzg/test-claude.git
   ```

2. Navega al directorio del backend:
   ```
   cd test-claude/backend
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando en el directorio del backend:

```
npm start
```

El servidor se ejecutará en `http://localhost:3000` por defecto.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.