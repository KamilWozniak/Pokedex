import { GET_POKEMONS } from '../actions/types';

const initialState = {
  pokemons: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS: {
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
