import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button,
} from 'reactstrap';

export default function PokemonModal(props) {
  const { toggleModalState, toggleModalAction } = props;
  return (
    <React.Fragment>
      <Modal isOpen={toggleModalState}>
        {/* after fetching data about one pokemon, put its id to the toggleaction */}
        <ModalHeader toggle={() => toggleModalAction(false, 0)}>Hello from header</ModalHeader>
        <ModalBody>Hello from body</ModalBody>
        <ModalFooter>
          Hello from footer
          <Button onClick={() => toggleModalAction(false, 0)}>Close</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

PokemonModal.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModalAction: PropTypes.func.isRequired,
};
