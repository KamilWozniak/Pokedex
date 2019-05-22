import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonList from './PokemonList-container';
import { getPokemons } from '../../redux/actions/actions';

class PokemonListRedux extends Component {
  static propTypes = {
    getPokemons: PropTypes.func.isRequired,
    pokemons: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    pokemons: [],
  };

  componentDidMount() {
    const { getPokemons: fetchPokemons } = this.props;
    fetchPokemons('/?_page=1');
  }

  render() {
    const { pokemons } = this.props;
    return (
      <React.Fragment>
        <PokemonList pokemons={pokemons} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemonReducer.pokemons,
});

export default connect(
  mapStateToProps,
  { getPokemons },
)(PokemonListRedux);
