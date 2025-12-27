import { Sequelize } from 'sequelize';
import { User } from './User.js'; // Importar el modelo de usuario
import { Post } from './Post.js'; // Importar el modelo de publicación

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Cambiar según la base de datos utilizada
});

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Sincronizar los modelos con la base de datos
const syncModels = async () => {
  try {
    await sequelize.sync();
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  }
};

syncModels();

export { sequelize, User, Post }; // Exportar sequelize y los modelos