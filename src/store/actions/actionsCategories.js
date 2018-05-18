export const GET_ALL_CATEGORIES_ASYNC = 'Get all categories async';
export const GetAllCategoriesAsync = () => ({ type: GET_ALL_CATEGORIES_ASYNC });
export const SET_ALL_CATEGORIES = 'Set all categories';
export const SetAllCategories = categories => ({ type: SET_ALL_CATEGORIES, categories });

export const ADD_CATEGORY = 'Add new category';
export const AddCategory = category => ({ type: ADD_CATEGORY, category });
export const ADD_CATEGORY_ASYNC = 'Add new category async';
export const AddCategoryAsync = category => ({ type: ADD_CATEGORY_ASYNC, category });

export const UPDATE_CATEGORY = 'Update category';
export const UpdateCategory = category => ({ type: UPDATE_CATEGORY, category });
export const UPDATE_CATEGORY_ASYNC = 'Update category async';
export const UpdateCategoryAsync = category => ({ type: UPDATE_CATEGORY_ASYNC, category });

export const GET_CATEGORY_BY_ID = 'Get category by id';
export const GetCategoryById = id => ({ type: GET_CATEGORY_BY_ID, id });

export const DELETE_CATEGORY_BY_ID = 'Delete category by id';
export const DeleteCategoryById = id => ({ type: DELETE_CATEGORY_BY_ID, id });

export const DELETE_CATEGORY_BY_ID_ASYNC = 'Delete category by id async';
export const DeleteCategoryByIdAsync = id => ({ type: DELETE_CATEGORY_BY_ID_ASYNC, id });
