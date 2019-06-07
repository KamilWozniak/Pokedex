import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import PokemonCard from '../PokemonCard';
import Loading from './Components/PokemonListLoading';
import NoResults from './Components/NoResults';

export default class PokemonListContainer extends Component {
  componentDidMount() {
    const { getPokemons, itemsOnPage } = this.props;
    getPokemons(`/?_page=1&_limit=${itemsOnPage}`);
  }

  render() {
    const {
      pokemons, toggleModal,
      getPokemonToModal,
      loading,
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
    return (
      <Row className="w-100 ml-auto mr-auto">
        {pokemons.length > 0 ? (
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
  getPokemons: PropTypes.func.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
};
