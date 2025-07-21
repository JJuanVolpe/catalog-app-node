import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { serverConfig } from '../../config/serverConfig.js'; // ✅ Usá serverConfig

// Rutas
import homeRoutes from '../routes/home.js';
import authRoutes from '../routes/auth.routes.js';
import userRoutes from '../routes/users.js';
import productRoutes from '../routes/products.routes.js';

const app = express();

// Configurar CORS para aceptar peticiones desde cualquier origen
app.use(cors());

// Middleware global para parsear JSON
app.use(bodyParser.json());

// Archivos estáticos
app.use(express.static(serverConfig.staticFolder)); // ✅ Bien hecho

// Rutas principales
app.use('/', homeRoutes);
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/products', productRoutes);

// Middleware para rutas desconocidas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

export default app;
