import {
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT_BY_ID,
  SET_ALL_PRODUCTS
} from '../actions/actionsProducts';

export const products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newState = [...state, action.product];
      return newState;
    }
    case DELETE_PRODUCT_BY_ID: {
      const newState = state.map(day => day.filter(e => e.id !== action.id));
      return newState;
    }
    case UPDATE_PRODUCT: {
      const newState = state.map(day => day.map(ts => (
        ts.id === action.product.id ? { ...action.product } : { ...ts })));
      return newState;
    }
    case GET_PRODUCT_BY_ID: {
      const newState = state.map(day => day.filter(e => e.id === action.id));
      return newState;
    }
    case SET_ALL_PRODUCTS: {
      const newState = [...action.products];
      return newState;
    }
  }
  return state;
};
