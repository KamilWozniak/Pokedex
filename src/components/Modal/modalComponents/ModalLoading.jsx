import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, Row, Col,
} from 'reactstrap';
import pokeball from '../../../assets/images/pokeball-loading.png';

export default function ModalLoading(props) {
  const { toggleModalState, closeModal } = props;
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
              <h3 className="text-uppercase text-center">loading, please wait</h3>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </aside>
  );
}
ModalLoading.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
