import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Modal from './Modal-view';

export default function ModalContainer(props) {
  const {
    toggleModalState,
    toggleModalAction,
    pokemonData,
    onPrevChange,
    prevState,
    onNextChange,
    nextState,
    filterPokemon,
  } = props;
  const closeModal = () => toggleModalAction(false);

  const handleMultipliers = (data) => {
    if (data === null) {
      return null;
    }
    return (
      <div>
        <p>Multipliers:</p>
        <ul>
          {data.map(multi => (
            <li key={uuid.v4()}>{multi}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleCandys = (data) => {
    if (!data) {
      return null;
    }
    return <p>{`Number of candys: ${data}`}</p>;
  };

  const handlePrevEvo = (data) => {
    if (!data) {
      onPrevChange(false);
      return <p>Previous evolution: There is no previous evolution </p>;
    }
    onPrevChange(true);
    return (
      <div>
        <p>Previous evolutions: </p>
        <ul>
          {data.map(item => (
            <li key={uuid.v4()}>{`#${item.num} ${item.name}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleNextEvo = (data) => {
    if (!data) {
      onNextChange(false);
      return <p>Next evolution: There is no next evolution </p>;
    }
    onNextChange(true);
    return (
      <div>
        <p>Next evolutions: </p>
        <ul>
          {data.map(item => (
            <li key={uuid.v4()}>{`#${item.num} ${item.name}`}</li>
          ))}
        </ul>
      </div>
    );
  };

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
        handleMultipliers={handleMultipliers}
        handleCandys={handleCandys}
        handlePrevEvo={handlePrevEvo}
        handleNextEvo={handleNextEvo}
        prevState={prevState}
        nextState={nextState}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
    </React.Fragment>
  );
}

ModalContainer.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModalAction: PropTypes.func.isRequired,
  onPrevChange: PropTypes.func.isRequired,
  onNextChange: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
  prevState: PropTypes.bool.isRequired,
  nextState: PropTypes.bool.isRequired,
  filterPokemon: PropTypes.func.isRequired,
};
