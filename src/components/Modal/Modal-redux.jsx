import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from './Modal-container';
import { toggleModal } from '../../redux/actions/actions';

function ModalRedux(props) {
  const { toggleModalState, pokemonId, toggleModal: toggleModalAction } = props;
  return (
    <React.Fragment>
      <Modal
        toggleModalState={toggleModalState}
        id={pokemonId}
        toggleModalAction={toggleModalAction}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  toggleModalState: state.modalReducer.toggleModal,
  pokemonId: state.modalReducer.id,
});

export default connect(
  mapStateToProps,
  { toggleModal },
)(ModalRedux);

ModalRedux.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  pokemonId: PropTypes.number.isRequired,
};
