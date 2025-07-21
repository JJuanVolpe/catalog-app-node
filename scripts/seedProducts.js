// scripts/seedProducts.js
import { db } from '../config/firebaseConfig.js'; // ✅ No toca el JSON

const products = [
  { name: 'Laptop', price: 1500, stock: 10 },
  { name: 'Mouse', price: 25, stock: 100 },
  { name: 'Teclado', price: 40, stock: 80 },
  { name: 'Monitor', price: 300, stock: 20 }
];

async function seedProducts() {
  const batch = db.batch();
  const ref = db.collection('products');

  products.forEach((product) => {
    const docRef = ref.doc(); // ID automático
    batch.set(docRef, product);
  });

  await batch.commit();
  console.log('✔ Productos insertados con éxito');
}

seedProducts().catch(console.error);
