import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const generarToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const verificarToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const hashPassword = async (plainPassword) => {
  return await bcrypt.hash(plainPassword, 10);
};

export const validarPassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
