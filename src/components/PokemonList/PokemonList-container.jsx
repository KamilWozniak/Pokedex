import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import queryString from 'query-string';
import PokemonCard from '../PokemonCard';
import Loading from './Components/PokemonListLoading';
import NoResults from './Components/NoResults';
import ErrorPage from './Components/ErrorPage';

export default class PokemonListContainer extends Component {

  componentDidMount() {
    const {
      getPokemons, itemsOnPage, setPage, location, updateSearchValue, changeItemsNumber,
    } = this.props;

    if (!localStorage.getItem('itemsOnPage')) localStorage.setItem('itemsOnPage', '12');
    changeItemsNumber(Number(localStorage.getItem('itemsOnPage')));
    const searchQueryValues = queryString.parse(location.search);

    this.setCurrentPage(searchQueryValues.page, setPage);

    if (searchQueryValues.search) updateSearchValue(searchQueryValues.search);

    getPokemons(`?q=${searchQueryValues.search ? searchQueryValues.search : ''}
&_page=${searchQueryValues.page ? searchQueryValues.page : 1}
&_limit=${localStorage.getItem('itemsOnPage') ? localStorage.getItem('itemsOnPage') : itemsOnPage}`);
  }

  setCurrentPage = (page, setPage) => {
    if (!page) {
      setPage(1);
    } else {
      setPage(Number(page));
    }
  };

  render() {
    const {
      pokemons,
      toggleModal,
      getPokemonToModal,
      loading,
      error,
      location,
      setPage,
      getPokemons,
      itemsOnPage,
      updateSearchValue,
    } = this.props;

    const searchQueryValues = queryString.parse(location.search);
    this.setCurrentPage(searchQueryValues.page, setPage);

    window.onpopstate = () => {
      getPokemons(`?q=${searchQueryValues.search ? searchQueryValues.search : ''}
&_page=${searchQueryValues.page ? searchQueryValues.page : 1}
&_limit=${itemsOnPage}`);

      if (!searchQueryValues.search) {
        updateSearchValue('');
      }
    };

    const handleClick = (pokemonData) => {
      toggleModal(true);
      getPokemonToModal(pokemonData);
    };
    if (loading) {
      return (
        <Loading />
      );
    }
    if (error) {
      return (
        <ErrorPage />
      );
    }
    return (
      <Row className="w-100 ml-auto mr-auto">
        {pokemons.length > 0 && error === false ? (
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemonInfo={pokemon} handleClick={handleClick} />
          ))
        ) : (
          <NoResults />
        )}
      </Row>
    );
  }
}
PokemonListContainer.propTypes = {
  pokemons: PropTypes.instanceOf(Array).isRequired,
  toggleModal: PropTypes.func.isRequired,
  getPokemonToModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  getPokemons: PropTypes.func.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  setPage: PropTypes.func.isRequired,
  updateSearchValue: PropTypes.func.isRequired,
  changeItemsNumber: PropTypes.func.isRequired,
};
