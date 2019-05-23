import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonList from './PokemonList-container';
import { getPokemons, toggleModal } from '../../redux/actions/actions';

class PokemonListRedux extends Component {
  static propTypes = {
    getPokemons: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    pokemons: PropTypes.instanceOf(Array).isRequired,
    itemsOnPage: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { getPokemons: fetchPokemons, itemsOnPage } = this.props;
    fetchPokemons(`/?_page=1&_limit=${itemsOnPage}`);
  }

  render() {
    const { pokemons, toggleModal: handleModal } = this.props;
    return (
      <React.Fragment>
        <PokemonList pokemons={pokemons} toggleModal={handleModal} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemonReducer.pokemons,
  itemsOnPage: state.selectReducer.itemsPerPage,
});

export default connect(
  mapStateToProps,
  { getPokemons, toggleModal },
)(PokemonListRedux);
