import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import ModalBodyContent from './modalComponents/ModalBody';
import ModalLoading from './modalComponents/ModalLoading';
import ModalFooterContent from './modalComponents/ModalFooter';
import ModalErrorPage from './modalComponents/ModalError';

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
    error,
    evolutions,
  } = props;
  if (loading) {
    return <ModalLoading toggleModalState={toggleModalState} closeModal={closeModal} />;
  }
  if (error) {
    return <ModalErrorPage toggleModalState={toggleModalState} closeModal={closeModal} />;
  }
  return (
    <aside>
      <Modal isOpen={toggleModalState}>
        <ModalHeader toggle={closeModal} className="border border-white" />
        <ModalBody>
          <ModalBodyContent pokemonData={pokemonData} />
        </ModalBody>
        <ModalFooter className="border border-white justify-content-center">
          <ModalFooterContent
            prevState={prevState}
            nextState={nextState}
            pokemonData={pokemonData}
            handleClickNext={handleClickNext}
            handleClickPrev={handleClickPrev}
            evolutions={evolutions}
          />
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
  error: PropTypes.bool.isRequired,
  evolutions: PropTypes.instanceOf(Array).isRequired,
};
