import { rest } from './rest';

export const login = (data = {}) => rest.post(
  'public/login',
  data
);

export const checkUser = () => rest.get('public/checkUser');

export const logOut = () => rest.get('logout');

export const registration = data => rest.post(
  'public/user',
  data
);

export const updateUser = data => rest.put(
  'user',
  data
);
