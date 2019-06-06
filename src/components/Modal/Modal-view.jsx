import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col,
} from 'reactstrap';
import pokeball from '../../assets/images/pokeball-loading.png';
import ModalBodyContent from './modalComponents/ModalBody';

export default function PokemonModal(props) {
  const {
    toggleModalState,
    closeModal,
    pokemonData,
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
          <ModalBodyContent pokemonData={pokemonData} />
        </ModalBody>
        <ModalFooter className="border border-white justify-content-center">
          <Row className="w-100 justify-content-between">
            <Col xs="12" sm="6" className="p-0 text-center align-self-center">
              <Button
                color="logoBlue"
                disabled={!prevState}
                onClick={() => handleClickPrev(pokemonData.prev_evolution)}
                className="modal-button w-75 my-1"
              >
                previous
                <br />
                evolution
              </Button>
            </Col>

            <Col xs="12" sm="6" className="p-0 text-center align-self-center">
              <Button
                className="modal-button w-75 my-1"
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
  nextState: PropTypes.bool.isRequired,
  prevState: PropTypes.bool.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  handleClickPrev: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
