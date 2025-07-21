import { db } from '../../config/firebaseConfig.js';

const usersRef = db.collection('users');

export const findUserByEmail = async (email) => {
  const snapshot = await usersRef.where('email', '==', email).limit(1).get();
  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

export const createUser = async (userData) => {
  const docRef = await usersRef.add(userData);
  return { id: docRef.id, ...userData };
};
