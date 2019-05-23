import { TOGGLE_MODAL } from '../actions/types';

const initialState = {
  toggleModal: false,
  id: 0,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        toggleModal: action.modalState,
        id: action.id,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
