import dotenv from 'dotenv';
dotenv.config(); // Carga las variables desde .env

import app from './app.js';

const PORT = process.env.PORT || 3000;

// Manejadores de errores globales

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Rechazo no manejado:', reason);
  // Dependiendo del caso, puedes hacer cleanup aquí y cerrar el server
});

process.on('uncaughtException', err => {
  console.error('💥 Excepción no capturada:', err);
  process.exit(1); // Salida obligatoria por seguridad
});

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
