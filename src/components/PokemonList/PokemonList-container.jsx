import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import PokemonCard from '../PokemonCard';

export default function PokemonListContainer(props) {
  const { pokemons, toggleModal } = props;
  return (
    <Row>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemonInfo={pokemon} toggleModal={toggleModal} />
      ))}
    </Row>
  );
}
PokemonListContainer.propTypes = {
  pokemons: PropTypes.instanceOf(Array),
  toggleModal: PropTypes.func.isRequired,
};

PokemonListContainer.defaultProps = {
  pokemons: [],
};
