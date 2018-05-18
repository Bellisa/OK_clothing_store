import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_ALL_CATEGORIES_ASYNC,
  UPDATE_CATEGORY_ASYNC,
  DELETE_CATEGORY_BY_ID_ASYNC,
  SetAllCategories,
  UpdateCategory,
  DeleteCategoryById
} from '../actions/actionsCategories';
import {
  getCategories,
  deleteCategory,
  updateCategory
} from '../../services';

export function* getCategoriesAsync() {
  try {
    const categories = yield getCategories();
    yield put(SetAllCategories(categories));
  } catch (err) { }
}
export function* watchGetCategoriesAsync() {
  yield takeEvery(GET_ALL_CATEGORIES_ASYNC, getCategoriesAsync);
}

export function* updateCategoryAsync(data) {
  try {
    const category = yield updateCategory(data.category);
    yield put(UpdateCategory(category));
  } catch (err) { }
}
export function* watchUpdateCategoryAsync() {
  yield takeEvery(UPDATE_CATEGORY_ASYNC, updateCategoryAsync);
}

export function* deleteCategoryAsync(data) {
  try {
    const category = yield deleteCategory(data.id);
    yield put(DeleteCategoryById(category.id));
  } catch (err) { }
}
export function* watchDeleteCategoryAsync() {
  yield takeEvery(DELETE_CATEGORY_BY_ID_ASYNC, deleteCategoryAsync);
}
