import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Row, Col } from 'reactstrap';
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
      <Row className="modal-row-style">
        <Col xs="5" className="modal-col-style">
          <p className="modal-property-header ">multipliers</p>
        </Col>
        <Col xs="5">
          <ul className="modal-ul-style">
            {data.map(multi => (
              <li key={uuid.v4()}>
                <li key={uuid.v4()} color={multi}>
                  {multi}
                </li>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    );
  };

  const handleCandys = (data) => {
    if (!data) {
      return null;
    }
    return (
      <Row className="modal-row-style">
        <Col xs="5" className="modal-col-style">
          <p className="modal-property-header">
            number of candys
          </p>
        </Col>
        <Col xs="5" className="d-flex">
          <p className="modal-paragraph align-self-center ml-auto mr-auto">{data}</p>
        </Col>
      </Row>
    );
  };

  const handlePrevEvo = (data) => {
    if (!data) {
      onPrevChange(false);
      return (
        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">
              previous evolutions
            </p>
          </Col>
          <Col xs="5" className="d-flex">
            <p className="modal-paragraph align-self-center ml-auto mr-auto">none</p>
          </Col>
        </Row>
      );
    }
    onPrevChange(true);
    return (
      <Row className="modal-row-style">
        <Col xs="5" className="modal-col-style">
          <p className="modal-property-header">
            previous evolutions
          </p>
        </Col>
        <Col xs="5" className="d-flex">
          <ul className="modal-ul-style w-100 align-self-center">
            {data.map(evo => (
              <li key={uuid.v4()} className=" text-center my-auto">
                <p className="m-0">{`#${evo.num} ${evo.name}`}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    );
  };

  const handleNextEvo = (data) => {
    if (!data) {
      onNextChange(false);
      return (
        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">
              next evolutions
            </p>
          </Col>
          <Col xs="5" className="d-flex">
            <p className="modal-paragraph align-self-center ml-auto mr-auto">none</p>
          </Col>
        </Row>
      );
    }
    onNextChange(true);
    return (

      <Row className="modal-row-style">
        <Col xs="5" className="modal-col-style">
          <p className="modal-property-header">
            next evolutions
          </p>
        </Col>
        <Col xs="5" className="d-flex">
          <ul className="modal-ul-style w-100 align-self-center">
            {data.map(evo => (
              <li key={uuid.v4()} className=" text-center my-auto">
                <p className="m-0">{`#${evo.num} ${evo.name}`}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
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
