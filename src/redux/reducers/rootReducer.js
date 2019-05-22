import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import searchReducer from './searchReducer';
import selectReducer from './selectReducer';

const rootReducer = combineReducers({
  pokemonReducer,
  searchReducer,
  selectReducer,
});

export default rootReducer;
