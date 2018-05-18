import { rest } from './rest';

export const getCategories = () => rest.get('public/categories');

export const getCategoryById = (id = 0) => rest.get(`public/categories/${id}`);

export const updateCategory = category => rest.put(
  `categories/${category.id}`,
  category
);
export const addCategory = (category = {}) => rest.post(
  'categories',
  category
);

export const deleteCategory = id => rest.delete(`categories/${id}`);
