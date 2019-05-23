import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from './Modal-container';
import { toggleModal } from '../../redux/actions/actions';

function ModalRedux(props) {
  const { toggleModalState, toggleModal: toggleModalAction, pokemonData } = props;
  return (
    <React.Fragment>
      <Modal
        toggleModalState={toggleModalState}
        toggleModalAction={toggleModalAction}
        pokemonData={pokemonData}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  toggleModalState: state.modalReducer.toggleModal,
  pokemonData: state.modalReducer.pokemonInModal,
});

export default connect(
  mapStateToProps,
  { toggleModal },
)(ModalRedux);

ModalRedux.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
};
