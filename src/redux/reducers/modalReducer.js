import { TOGGLE_MODAL, GET_MODAL_POKEMON } from '../actions/types';

const initialState = {
  toggleModal: false,
  pokemonInModal: {
    type: [],
    multipliers: [],
    weaknesses: [],
    next_evolution: [],
  },
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        toggleModal: action.modalState,
      };
    }
    case GET_MODAL_POKEMON: {
      return {
        ...state,
        pokemonInModal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
