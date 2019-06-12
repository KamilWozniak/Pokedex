import React from 'react';
import PropTypes from 'prop-types';
import EvoComponent from './EvolutionComponent';


export default function ModalFooter(props) {
  const {
    evolutions,
    getPokemonToModal,
  } = props;

  if (evolutions.length > 0 && typeof evolutions[0] === 'object') {
    return (
      <EvoComponent evolutions={evolutions} getPokemonToModal={getPokemonToModal} />
    );
  }
  if (evolutions.length === 0) {
    return null;
  }

  return <h3 className="align-self-center text-center mb-4 text-danger">We could not download evolutions.</h3>;
}

ModalFooter.propTypes = {
  evolutions: PropTypes.instanceOf(Array).isRequired,
  getPokemonToModal: PropTypes.func.isRequired,


};
