import { verificarToken } from '../services/auth.service.js';

export const protectRoute = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token no provisto' });

  const token = authHeader.split(' ')[1];
  const payload = verificarToken(token);

  if (!payload) return res.status(403).json({ error: 'Token inválido o expirado' });

  req.user = payload; // Info útil para siguientes middlewares
  next();
};
