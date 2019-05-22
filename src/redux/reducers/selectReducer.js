import { SET_ITEMS_PER_PAGE } from '../actions/types';

const initialState = {
  itemsPerPage: 10,
};

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default selectReducer;
