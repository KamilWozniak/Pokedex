import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import PokemonCard from '../PokemonCard';

export default function PokemonListContainer(props) {
  const { pokemons, toggleModal, getPokemonToModal } = props;
  const handleClick = (id) => {
    toggleModal(true);
    getPokemonToModal(id);
  };
  return (
    <Row>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemonInfo={pokemon} handleClick={handleClick} />
      ))}
    </Row>
  );
}
PokemonListContainer.propTypes = {
  pokemons: PropTypes.instanceOf(Array).isRequired,
  toggleModal: PropTypes.func.isRequired,
  getPokemonToModal: PropTypes.func.isRequired,
};
