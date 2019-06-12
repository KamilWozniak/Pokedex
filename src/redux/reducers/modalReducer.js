import {
  TOGGLE_MODAL,
  GET_MODAL_POKEMON,
  CHANGE_PREV,
  CHANGE_NEXT,
  LOADING_MODAL_OFF,
  LOADING_MODAL_ON,
  FETCHING_MODAL_ERROR,
  GET_MODAL_EVO,
} from '../actions/types';

const initialState = {
  toggleModal: false,
  pokemonInModal: {
    type: [],
    multipliers: [],
    weaknesses: [],
    next_evolution: [],
  },
  prevEvo: false,
  nextEvo: false,
  loadingModal: false,
  errorModal: false,
  evolutions: [],
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
    case CHANGE_PREV: { // not used since number of properties in modal decreased
      return {
        ...state,
        prevEvo: action.payload,
      };
    }
    case CHANGE_NEXT: { // not used since number of properties in modal decreased
      return {
        ...state,
        nextEvo: action.payload,
      };
    }

    case LOADING_MODAL_ON: {
      return {
        ...state,
        loadingModal: true,
        errorModal: false,
      };
    }
    case LOADING_MODAL_OFF: {
      return {
        ...state,
        loadingModal: false,
      };
    }
    case FETCHING_MODAL_ERROR: { // not used anymore
      return {
        ...state,
        errorModal: true,
        loadingModal: false,
      };
    }
    case GET_MODAL_EVO: {
      return {
        ...state,
        evolutions: action.payload,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
