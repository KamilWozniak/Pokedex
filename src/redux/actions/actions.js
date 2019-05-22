import * as actionType from './types';

export const getPokemons = (url = '') => (dispatch) => {
  fetch(`http://localhost:4000/pokemon${url}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: actionType.GET_POKEMONS,
      payload: data,
    }));
};

export const updateSearch = value => (dispatch) => {
  dispatch({ type: actionType.UPDATE_SEARCH, payload: value });
};
