export const GET_ALL_PRODUCTS_ASYNC = 'Get all products async';
export const GetAllProductsAsync = () => ({ type: GET_ALL_PRODUCTS_ASYNC });
export const SET_ALL_PRODUCTS = 'Set all products';
export const SetAllProducts = products => ({ type: SET_ALL_PRODUCTS, products });

export const ADD_PRODUCT = 'Add new product';
export const AddProduct = product => ({ type: ADD_PRODUCT, product });
export const ADD_PRODUCT_ASYNC = 'Add new product async';
export const AddProductAsync = product => ({ type: ADD_PRODUCT_ASYNC, product });

export const UPDATE_PRODUCT = 'Update new product';
export const UpdateProduct = product => ({ type: UPDATE_PRODUCT, product });
export const UPDATE_PRODUCT_ASYNC = 'Update product async';
export const UpdateProductAsync = product => ({ type: UPDATE_PRODUCT_ASYNC, product });

export const GET_PRODUCT_BY_ID = 'Get product by id';
export const GetProductByIdAsync = id => ({ type: GET_PRODUCT_BY_ID, id });

export const DELETE_PRODUCT_BY_ID = 'Delete product by id';
export const DeleteProductById = id => ({ type: DELETE_PRODUCT_BY_ID, id });
export const DELETE_PRODUCT_BY_ID_ASYNC = 'Delete product by id async';
export const DeleteProductByIdAsync = id => ({ type: DELETE_PRODUCT_BY_ID_ASYNC, id });
