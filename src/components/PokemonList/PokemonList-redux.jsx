import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonList from './PokemonList-container';
import {
  getPokemons,
  toggleModal,
  getPokemonToModal,
  setPage,
  updateSearchValue,
} from '../../redux/actions/actions';

function PokemonListRedux(props) {
  const {
    pokemons,
    toggleModal: handleModal,
    getPokemonToModal: fetchPokemonToModal,
    loading,
    itemsOnPage,
    getPokemons: fetchPokemons,
    error,
    // match,
    location,
    setPage: setCurrPage,
    updateSearchValue: setSearchValue,
  } = props;

  return (
    <React.Fragment>
      <PokemonList
        pokemons={pokemons}
        toggleModal={handleModal}
        getPokemonToModal={fetchPokemonToModal}
        loading={loading}
        getPokemons={fetchPokemons}
        itemsOnPage={itemsOnPage}
        error={error}
        // match={match}
        setPage={setCurrPage}
        location={location}
        updateSearchValue={setSearchValue}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  pokemons: state.pokemonReducer.pokemons,
  loading: state.pokemonReducer.loading,
  error: state.pokemonReducer.error,
  itemsOnPage: state.selectReducer.itemsPerPage,
});

export default connect(
  mapStateToProps,
  { getPokemons, toggleModal, getPokemonToModal, setPage, updateSearchValue },
)(PokemonListRedux);

PokemonListRedux.propTypes = {
  getPokemons: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  pokemons: PropTypes.instanceOf(Array).isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  getPokemonToModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  // match: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  setPage: PropTypes.func.isRequired,
  updateSearchValue: PropTypes.func.isRequired,
};
