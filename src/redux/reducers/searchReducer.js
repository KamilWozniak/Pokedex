import { UPDATE_SEARCH, SEARCH } from '../actions/types';

const initialState = {
  searchValue: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case SEARCH: {
      return {
        ...state,
        searchValue: '',
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
