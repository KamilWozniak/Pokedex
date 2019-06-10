import axios from 'axios';
import * as actionType from './types';

const PORT = 4000;
const HOST = 'localhost:';

export const getPokemons = (url = '') => (dispatch) => {
  dispatch({ type: actionType.LOADING_ON });
  axios.get(`http://${HOST}${PORT}/pokemon${url}`).then((response) => {
    dispatch({
      type: actionType.GET_POKEMONS,
      payload: response.data,
      total: response.headers['x-total-count'],
    });
    dispatch({ type: actionType.LOADING_OFF });
  }).catch((error) => {
    // eslint-disable-next-line no-console
    console.log('Error while getting pokemons: ', error);
    dispatch({ type: actionType.FETCHING_ERROR });
  });
};

export const updateSearch = value => (dispatch) => {
  dispatch({ type: actionType.UPDATE_SEARCH, payload: value });
};

export const onSearchSubmit = value => (dispatch) => {
  dispatch({ type: actionType.SEARCH, payload: value });
};

export const changeItemsNumber = number => (dispatch) => {
  dispatch({ type: actionType.SET_ITEMS_PER_PAGE, payload: Number(number) });
};

export const toggleModal = value => (dispatch) => {
  dispatch({ type: actionType.TOGGLE_MODAL, modalState: value });
};

export const getPokemonToModal = id => (dispatch) => {
  dispatch({ type: actionType.LOADING_MODAL_ON });
  fetch(`http://${HOST}${PORT}/pokemon/${id}`)
    .then(response => response.json())
    .then((data) => {
      dispatch({ type: actionType.GET_MODAL_POKEMON, payload: data });
      dispatch({ type: actionType.LOADING_MODAL_OFF });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Error while getting modal pokemon: ', error);
      dispatch({ type: actionType.FETCHING_MODAL_ERROR });
    });
};

export const onPageChange = (pageNumber = 1, itemsPerPage = 12, query = '') => (dispatch) => {
  dispatch({ type: actionType.LOADING_ON });
  fetch(`http://${HOST}${PORT}/pokemon/?_page=${pageNumber}&_limit=${itemsPerPage}&q=${query}`)
    .then(response => response.json())
    .then((data) => {
      dispatch({ type: actionType.CHANGE_PAGE, pokemons: data, currPage: pageNumber });
      dispatch({ type: actionType.LOADING_OFF });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Error while changing page: ', error);
      dispatch({ type: actionType.FETCHING_ERROR });
    });
};

export const onPrevChange = val => (dispatch) => {
  dispatch({ type: actionType.CHANGE_PREV, payload: val });
};

export const onNextChange = val => (dispatch) => {
  dispatch({ type: actionType.CHANGE_NEXT, payload: val });
};

export const filterPokemon = value => (dispatch) => {
  dispatch({ type: actionType.LOADING_MODAL_ON });
  fetch(`http://${HOST}${PORT}/pokemon/?num=${value}`)
    .then(response => response.json())
    .then((data) => {
      dispatch({ type: actionType.FILTER_POKEMON, payload: data[0] });
      dispatch({ type: actionType.LOADING_MODAL_OFF });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Error while changing modal pokemon: ', error);
      dispatch({ type: actionType.FETCHING_MODAL_ERROR });
    });
};
