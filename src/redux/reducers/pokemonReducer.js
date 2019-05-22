import { GET_POKEMONS, SEARCH } from '../actions/types';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case SEARCH: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    default:
      return state;
  }
};
export default pokemonReducer;
