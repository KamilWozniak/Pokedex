import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  pokemonReducer,
  searchReducer,
});

export default rootReducer;
