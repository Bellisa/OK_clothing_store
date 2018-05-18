import { SET_USER, UPDATE_USER, REMOVE_USER } from '../actions/actionsUser';

export const user = (state = false, { type, data }) => {
  switch (type) {
    case SET_USER:
    case UPDATE_USER: {
      return data;
    }

    case REMOVE_USER:
      return null;
  }

  return state;
};
