import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Badge,
} from 'reactstrap';
import uuid from 'uuid';
import pokeball from '../../assets/images/pokeball-loading.png';

export default function PokemonModal(props) {
  const {
    toggleModalState,
    closeModal,
    pokemonData,
    handleMultipliers,
    handleCandys,
    handlePrevEvo,
    handleNextEvo,
    prevState,
    nextState,
    handleClickNext,
    handleClickPrev,
    loading,
  } = props;
  if (loading) {
    return (
      <aside>
        <Modal isOpen={toggleModalState}>
          <ModalHeader toggle={closeModal} className="border border-white" />
          <ModalBody>
            <Row className="m-0 pb-3 ">
              <Col className="d-flex justify-content-center">
                <img src={pokeball} alt="pokeball" className="modal-loading-image" />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <h3 className="text-uppercase">loading, please wait</h3>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </aside>
    );
  }
  return (
    <aside>
      <Modal isOpen={toggleModalState}>
        <ModalHeader toggle={closeModal} className="border border-white" />
        <ModalBody>
          <div className="text-center">
            <img src={pokemonData.img} alt={`${pokemonData.name}`} />
            <h4 className="mt-3">{`#${pokemonData.num} ${pokemonData.name}`}</h4>

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <p className="modal-property-header ">type:</p>
              </Col>
              <Col xs="5">
                <ul className="modal-ul-style">
                  {pokemonData.type.map(type => (
                    <li key={uuid.v4()}>
                      <Badge className="badge-min-width" key={uuid.v4()} color={type}>
                        <p className="modal-list-item">{type}</p>
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <p className="modal-property-header">height:</p>
              </Col>
              <Col xs="5">
                <p className="m-0">{pokemonData.height}</p>
              </Col>
            </Row>

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <p className="modal-property-header">weight:</p>
              </Col>
              <Col xs="5">
                <p className="modal-paragraph">{pokemonData.weight}</p>
              </Col>
            </Row>

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <div className="modal-property-header">
                  <p className="m-0 text-right">candy</p>
                  <p className="m-0 text-right">type:</p>
                </div>
              </Col>
              <Col xs="5" className="d-flex">
                <p className="modal-paragraph align-self-center ml-auto mr-auto">
                  {pokemonData.candy}
                </p>
              </Col>
            </Row>

            {handleCandys(pokemonData.candy_count)}

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <p className="modal-property-header">egg:</p>
              </Col>
              <Col xs="5">
                <p className="modal-paragraph">{pokemonData.egg}</p>
              </Col>
            </Row>

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <div className="modal-property-header">
                  <p className="m-0 text-right">spawn</p>
                  <p className="m-0 text-right">chance:</p>
                </div>
              </Col>
              <Col xs="5" className="d-flex">
                <p className="modal-paragraph align-self-center ml-auto mr-auto">
                  {pokemonData.spawn_chance}
                </p>
              </Col>
            </Row>
            
            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <div className="modal-property-header">
                  <p className="m-0 text-right">average</p>
                  <p className="m-0 text-right">spawns:</p>
                </div>
              </Col>
              <Col xs="5" className="d-flex">
                <p className="modal-paragraph align-self-center ml-auto mr-auto">
                  {pokemonData.avg_spawns}
                </p>
              </Col>
            </Row>

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <div className="modal-property-header">
                  <p className="m-0 text-right">spawn</p>
                  <p className="m-0 text-right">time:</p>
                </div>
              </Col>
              <Col xs="5" className="d-flex">
                <p className="modal-paragraph align-self-center ml-auto mr-auto">
                  {pokemonData.spawn_time}
                </p>
              </Col>
            </Row>

            {handleMultipliers(pokemonData.multipliers)}

            <Row className="modal-row-style">
              <Col xs={{ size: '3', offset: 2 }} className="modal-col-style">
                <p className="modal-property-header ">weaknesses:</p>
              </Col>
              <Col xs="5">
                <ul className="modal-ul-style">
                  {pokemonData.weaknesses.map(weak => (
                    <li key={uuid.v4()}>
                      <Badge className="badge-min-width" key={uuid.v4()} color={weak}>
                        <p className="modal-list-item">{weak}</p>
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>

            {handlePrevEvo(pokemonData.prev_evolution)}
            {handleNextEvo(pokemonData.next_evolution)}
          </div>
        </ModalBody>
        <ModalFooter className="border border-white justify-content-center p-1 m-1">
          <Row className="w-100 justify-content-between">
            <Col xs="12" sm="auto" className="p-0 text-center align-self-center">
              <Button
                color="logoBlue"
                disabled={!prevState}
                onClick={() => handleClickPrev(pokemonData.prev_evolution)}
                className="modal-button w-100 my-1"
              >
                previous
                <br />
                evolution
              </Button>
            </Col>
            <Col xs="12" sm="auto" className="p-0 text-center align-self-center">
              <Button color="logoBlue" className="modal-button w-100 my-1" onClick={closeModal}>
                close
              </Button>
            </Col>
            <Col xs="12" sm="auto" className="p-0 text-center align-self-center">
              <Button
                className="modal-button w-100 my-1"
                color="logoBlue"
                disabled={!nextState}
                onClick={() => handleClickNext(pokemonData.next_evolution)}
              >
                next
                <br />
                evolution
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </aside>
  );
}

PokemonModal.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
  handleMultipliers: PropTypes.func.isRequired,
  handleCandys: PropTypes.func.isRequired,
  handlePrevEvo: PropTypes.func.isRequired,
  handleNextEvo: PropTypes.func.isRequired,
  nextState: PropTypes.bool.isRequired,
  prevState: PropTypes.bool.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  handleClickPrev: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
