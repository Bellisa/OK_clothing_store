import {
  GET_CATEGORY_BY_ID,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY_BY_ID,
  SET_ALL_CATEGORIES
}
  from '../actions/actionsCategories';

export const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      const newState = [...state, action.category];
      return newState;
    }
    case DELETE_CATEGORY_BY_ID: {
      const newState = state.map(day => day.filter(e => e.id !== action.id));
      return newState;
    }
    case UPDATE_CATEGORY: {
      const newState = state.map(day => day.map(ts => (
        ts.id === action.category.id ? { ...action.category } : { ...ts })));
      return newState;
    }
    case GET_CATEGORY_BY_ID: {
      const newState = state.map(day => day.filter(e => e.id === action.id));
      return newState;
    }
    case SET_ALL_CATEGORIES: {
      const newState = [...action.categories];
      return newState;
    }
  }
  return state;
};
