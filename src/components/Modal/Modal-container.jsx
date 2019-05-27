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
    loading,
  } = props;
  const closeModal = () => toggleModalAction(false);

  const handleMultipliers = (data) => {
    if (data === null) {
      return null;
    }
    return (
      <React.Fragment>
        <p className="property-header">multipliers:</p>
        <ul className="ul-style">
          {data.map(multi => (
            <li key={uuid.v4()}>{multi}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  };

  const handleCandys = (data) => {
    if (!data) {
      return null;
    }
    return (
      <React.Fragment>
        <p className="property-header">number of candys:</p>
        <p>{data}</p>
      </React.Fragment>
    );
  };

  const handlePrevEvo = (data) => {
    if (!data) {
      onPrevChange(false);
      return (
        <React.Fragment>
          <p className="property-header">previous evolution:</p>
          <p>
            <small>There is no previous evolution</small>
          </p>
        </React.Fragment>
      );
    }
    onPrevChange(true);
    return (
      <React.Fragment>
        <p className="property-header">previous evolution:</p>
        <ul className="ul-style">
          {data.map(item => (
            <li key={uuid.v4()}>{`#${item.num} ${item.name}`}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  };

  const handleNextEvo = (data) => {
    if (!data) {
      onNextChange(false);
      return (
        <React.Fragment>
          <p className="property-header">next evolution:</p>
          <p>
            <small>There is no next evolution</small>
          </p>
        </React.Fragment>
      );
    }
    onNextChange(true);
    return (
      <React.Fragment>
        <p className="property-header">next evolution:</p>
        <ul className="ul-style">
          {data.map(item => (
            <li key={uuid.v4()}>{`#${item.num} ${item.name}`}</li>
          ))}
        </ul>
      </React.Fragment>
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
        loading={loading}
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
  loading: PropTypes.bool.isRequired,
};
