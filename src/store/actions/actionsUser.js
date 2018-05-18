export const SET_USER = 'Set user state';
export const SetUser = data => ({ type: SET_USER, data });

export const UPDATE_USER = 'Update user state';
export const UpdateUser = data => ({ type: UPDATE_USER, data });

export const REMOVE_USER = 'Remove user in state';
export const RemoveUser = () => ({ type: REMOVE_USER });

export const GET_USER_ASYNC = 'Get user async';
export const getUserAsync = () => ({ type: GET_USER_ASYNC });

export const LOGOUT_USER_ASYNC = 'Logout user async';
export const logOutUserAsync = () => ({ type: LOGOUT_USER_ASYNC });

export const AUTH_USER_ASYNC = 'Authentication user async';
export const authUserAsync = data => ({ type: AUTH_USER_ASYNC, data });

export const REGIST_USER_ASYNC = 'Registration user async';
export const registUserAsync = data => ({ type: REGIST_USER_ASYNC, data });

export const UPDATE_USER_ASYNC = 'Update user async';
export const updateUserAsync = data => ({ type: UPDATE_USER_ASYNC, data });
