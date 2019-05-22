import { UPDATE_SEARCH, SEARCH } from '../actions/types';

const initialState = {
  searchValue: '',
  lastSearched: '',
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
        lastSearched: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
