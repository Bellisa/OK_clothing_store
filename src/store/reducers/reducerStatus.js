
import { SET_ERROR, SET_SUCCESS } from '../actions/actionStatus';


export const status = (state = { error: '', success: '' }, { type, data = '' }) => {
  switch (type) {
    case SET_ERROR:
      return [...state].error = data;
    case SET_SUCCESS:
      return [...state].success = data;
  }

  return state;
};
