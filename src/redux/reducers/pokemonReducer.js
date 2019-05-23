import { GET_POKEMONS } from '../actions/types';

const initialState = {
  pokemons: [],
  total: 0,
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
    default:
      return state;
  }
};
export default pokemonReducer;
