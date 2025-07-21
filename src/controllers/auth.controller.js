import {
  generarToken,
  validarPassword,
  hashPassword
} from '../services/auth.service.js';

import { findUserByEmail, createUser } from '../models/user.model.js';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

  const isValid = await validarPassword(password, user.password);
  if (!isValid) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = generarToken({ email: user.email, id: user.id });
  res.status(200).json({ token });
};

export const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name)
    return res.status(400).json({ error: 'Faltan datos obligatorios' });

  const existing = await findUserByEmail(email);
  if (existing) return res.status(409).json({ error: 'Usuario ya registrado' });

  const hashed = await hashPassword(password);
  const newUser = await createUser({ email, password: hashed, name });

  res.status(201).json({ id: newUser.id, email: newUser.email, name: newUser.name });
};
