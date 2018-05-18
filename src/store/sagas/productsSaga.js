import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_ALL_PRODUCTS_ASYNC,
  UPDATE_PRODUCT_ASYNC,
  DELETE_PRODUCT_BY_ID_ASYNC,
  SetAllProducts,
  UpdateProduct,
  DeleteProductById
} from '../actions/actionsProducts';
import {
  getProducts,
  deleteProduct,
  updateProduct
} from '../../services';

export function* getProductsAsync() {
  try {
    const products = yield getProducts();
    yield put(SetAllProducts(products));
  } catch (err) { }
}
export function* watchGetProductsAsync() {
  yield takeEvery(GET_ALL_PRODUCTS_ASYNC, getProductsAsync);
}

export function* updateProductsAsync(data) {
  try {
    const product = yield updateProduct(data.product);
    yield put(UpdateProduct(product));
  } catch (err) { }
}
export function* watchUpdateProductsAsync() {
  yield takeEvery(UPDATE_PRODUCT_ASYNC, updateProductsAsync);
}

export function* deleteProductAsync(data) {
  try {
    const product = yield deleteProduct(data.id);
    yield put(DeleteProductById(product.id));
  } catch (err) { }
}
export function* watchDeleteProductAsync() {
  yield takeEvery(DELETE_PRODUCT_BY_ID_ASYNC, deleteProductAsync);
}
