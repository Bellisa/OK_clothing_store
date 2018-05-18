import { all } from 'redux-saga/effects';
import {
  watchGetUserAsync,
  watchLoginUserAsync,
  watchLogoutUserAsync,
  watchRegistUserAsync,
  watchUpdateUserAsync
} from './userSaga';

import {
  watchGetProductsAsync,
  watchUpdateProductsAsync,
  watchDeleteProductAsync
} from './productsSaga';

import {
  watchGetCategoriesAsync,
  watchUpdateCategoryAsync,
  watchDeleteCategoryAsync
} from './categoriesSaga';

export function* rootSaga() {
  yield all([
    watchGetUserAsync(),
    watchLoginUserAsync(),
    watchLogoutUserAsync(),
    watchRegistUserAsync(),
    watchUpdateUserAsync(),

    watchGetProductsAsync(),
    watchUpdateProductsAsync(),
    watchDeleteProductAsync(),

    watchGetCategoriesAsync(),
    watchUpdateCategoryAsync(),
    watchDeleteCategoryAsync()
  ]);
}

