import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_USER_ASYNC,
  SetUser,
  AUTH_USER_ASYNC,
  UpdateUser,
  RemoveUser,
  LOGOUT_USER_ASYNC,
  REGIST_USER_ASYNC,
  UPDATE_USER_ASYNC

} from '../actions/actionsUser';
import {
  checkUser,
  login,
  logOut,
  registration,
  updateUser
} from '../../services';

export function* getUser() {
  try {
    const user = yield checkUser();
    yield put(SetUser(user));
  } catch (ex) {
    yield put(RemoveUser());
  }
}
export function* watchGetUserAsync() {
  yield takeEvery(GET_USER_ASYNC, getUser);
}

export function* loginUser({ data }) {
  try {
    const user = yield login(data);
    yield put(SetUser(user));
  } catch (err) { }
}
export function* watchLoginUserAsync() {
  yield takeEvery(AUTH_USER_ASYNC, loginUser);
}

export function* logoutUser() {
  try {
    yield logOut();
    yield put(RemoveUser());
  } catch (ex) { }
}
export function* watchLogoutUserAsync() {
  yield takeEvery(LOGOUT_USER_ASYNC, logoutUser);
}

export function* registUser({ data }) {
  try {
    const user = yield registration(data);
    yield put(SetUser(user));
  } catch (err) { }
}
export function* watchRegistUserAsync() {
  yield takeEvery(REGIST_USER_ASYNC, registUser);
}

export function* updateUserAs({ data }) {
  try {
    const user = yield updateUser(data);
    yield put(UpdateUser(user));
  } catch (err) { }
}
export function* watchUpdateUserAsync() {
  yield takeEvery(UPDATE_USER_ASYNC, updateUserAs);
}
