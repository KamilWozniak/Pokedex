import {
  GET_POKEMONS,
  SEARCH,
  SET_ITEMS_PER_PAGE,
  CHANGE_PAGE,
  LOADING_OFF,
  LOADING_ON,
  FETCHING_ERROR,
  SET_PAGE,
} from '../actions/types';

const initialState = {
  pokemons: [],
  total: 0,
  currentPage: 1,
  loading: true,
  error: false,
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
    case LOADING_ON: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOADING_OFF: {
      return {
        ...state,
        loading: false,
      };
    }
    case FETCHING_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    default:
      return state;
  }
};
export default pokemonReducer;
