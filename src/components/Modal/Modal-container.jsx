import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Modal from './Modal-view';

export default function ModalContainer(props) {
  const { toggleModalState, toggleModalAction, pokemonData } = props;
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
      return <p>Previous evolution: There is no previous evolutions </p>;
    }
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
      return <p>Next evolution: There is no next evolutions </p>;
    }
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
      />
    </React.Fragment>
  );
}

ModalContainer.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModalAction: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
};
