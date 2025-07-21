import { db } from '../../config/firebaseConfig.js';

const productsRef = db.collection('products');

export const getAllProducts = async () => {
  const snapshot = await productsRef.get();
  const products = [];
  snapshot.forEach(doc => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const getProductById = async (id) => {
  const doc = await productsRef.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

export const createProduct = async (productData) => {
  const docRef = await productsRef.add(productData);
  return { id: docRef.id, ...productData };
};

export const deleteProductById = async (id) => {
  await productsRef.doc(id).delete();
  return true;
};
