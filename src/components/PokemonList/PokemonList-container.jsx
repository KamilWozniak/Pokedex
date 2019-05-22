// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import PokemonCard from '../PokemonCard';

export default function PokemonListContainer(props) {
  const { pokemons } = props;
  return (
    <Row>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemonInfo={pokemon} />
      ))}
    </Row>
  );
}
PokemonListContainer.propTypes = {
  pokemons: PropTypes.instanceOf(Array),
};

PokemonListContainer.defaultProps = {
  pokemons: [],
};
