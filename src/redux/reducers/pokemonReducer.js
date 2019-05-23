import {
  GET_POKEMONS, SEARCH, SET_ITEMS_PER_PAGE, CHANGE_PAGE,
} from '../actions/types';

const initialState = {
  pokemons: [],
  total: 0,
  currentPage: 1,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
        total: Number(action.total),
      };
    }
    case SEARCH: {
      return {
        ...state,
        currentPage: 1,
      };
    }
    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        currentPage: 1,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        pokemons: action.pokemons,
        currentPage: action.currPage,
      };
    }
    default:
      return state;
  }
};
export default pokemonReducer;
