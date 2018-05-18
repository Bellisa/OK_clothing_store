import { rest } from './rest';

export const getProducts = () => rest.get('public/products');

export const getProductById = (id = 0) => rest.get(`public/products/${id}`);

export const updateProduct = product => rest.put(
  `products/${product.id}`,
  product
);
export const addProduct = (product = {}) => rest.post(
  'products',
  product
);

export const deleteProduct = id => rest.delete(`products/${id}`);
