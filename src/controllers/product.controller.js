import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById
} from '../models/product.model.js';

export const fetchProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos.' });
  }
};

export const fetchProductById = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado.' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el producto.' });
  }
};

export const createNewProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  if (!name || price == null || stock == null) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  try {
    const newProduct = await createProduct({ name, price, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto.' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await deleteProductById(req.params.id);
    res.status(200).json({ message: 'Producto eliminado.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto.' });
  }
};
