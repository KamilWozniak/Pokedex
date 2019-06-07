import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal-view';

export default function ModalContainer(props) {
  const {
    toggleModalState,
    toggleModalAction,
    pokemonData,
    prevState,
    nextState,
    filterPokemon,
    loading,
  } = props;

  const closeModal = () => toggleModalAction(false);

  const handleClickNext = (nextEvoArr) => {
    if (nextState) {
      const { num } = nextEvoArr[0];
      filterPokemon(num);
    }
    return null;
  };

  const handleClickPrev = (prevEvoArr) => {
    if (prevState) {
      const { num } = prevEvoArr[0];
      filterPokemon(num);
    }
    return null;
  };

  return (
    <React.Fragment>
      <Modal
        toggleModalState={toggleModalState}
        closeModal={closeModal}
        pokemonData={pokemonData}
        prevState={prevState}
        nextState={nextState}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        loading={loading}
      />
    </React.Fragment>
  );
}

ModalContainer.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModalAction: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
  prevState: PropTypes.bool.isRequired,
  nextState: PropTypes.bool.isRequired,
  filterPokemon: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
