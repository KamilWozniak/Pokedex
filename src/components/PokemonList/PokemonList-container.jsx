import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import PokemonCard from '../PokemonCard';
import Loading from './Components/PokemonListLoading';
import NoResults from './Components/NoResults';
import ErrorPage from './Components/ErrorPage';

export default class PokemonListContainer extends Component {
  componentDidMount() {
    const { getPokemons, itemsOnPage } = this.props;
    getPokemons(`/?_page=1&_limit=${itemsOnPage}`);
  }

  render() {
    const {
      pokemons,
      toggleModal,
      getPokemonToModal,
      loading,
      error,
    } = this.props;

    const handleClick = (id) => {
      toggleModal(true);
      getPokemonToModal(id);
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
};
