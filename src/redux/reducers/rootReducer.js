import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import searchReducer from './searchReducer';
import selectReducer from './selectReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  pokemonReducer,
  searchReducer,
  selectReducer,
  modalReducer,
});

export default rootReducer;
