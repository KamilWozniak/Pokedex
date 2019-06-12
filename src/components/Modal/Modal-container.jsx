import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal-view';

export default function ModalContainer(props) {
  const {
    toggleModalState,
    toggleModalAction,
    pokemonData,
    loading,
    error,
    evolutions,
    getPokemonToModal,
  } = props;

  const closeModal = () => toggleModalAction(false);
  return (
    <React.Fragment>
      <Modal
        toggleModalState={toggleModalState}
        closeModal={closeModal}
        pokemonData={pokemonData}
        loading={loading}
        error={error}
        evolutions={evolutions}
        getPokemonToModal={getPokemonToModal}
      />
    </React.Fragment>
  );
}

ModalContainer.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModalAction: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  evolutions: PropTypes.instanceOf(Array).isRequired,
  getPokemonToModal: PropTypes.func.isRequired,

};
