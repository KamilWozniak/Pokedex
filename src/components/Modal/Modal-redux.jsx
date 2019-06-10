import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from './Modal-container';
import {
  toggleModal,
  onPrevChange,
  onNextChange,
  filterPokemon,
} from '../../redux/actions/actions';

function ModalRedux(props) {
  const {
    toggleModalState,
    toggleModal: toggleModalAction,
    pokemonData,
    onPrevChange: togglePrev,
    prevState,
    onNextChange: toggleNext,
    nextState,
    filterPokemon: fetchNewModalPokemon,
    loading,
    error,
  } = props;
  return (
    <React.Fragment>
      <Modal
        toggleModalState={toggleModalState}
        toggleModalAction={toggleModalAction}
        pokemonData={pokemonData}
        onPrevChange={togglePrev}
        prevState={prevState}
        onNextChange={toggleNext}
        nextState={nextState}
        filterPokemon={fetchNewModalPokemon}
        loading={loading}
        error={error}
      />
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  toggleModalState: state.modalReducer.toggleModal,
  pokemonData: state.modalReducer.pokemonInModal,
  prevState: state.modalReducer.prevEvo,
  nextState: state.modalReducer.nextEvo,
  loading: state.modalReducer.loadingModal,
  error: state.modalReducer.errorModal,
});

export default connect(
  mapStateToProps,
  {
    toggleModal,
    onPrevChange,
    onNextChange,
    filterPokemon,
  },
)(ModalRedux);

ModalRedux.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onPrevChange: PropTypes.func.isRequired,
  onNextChange: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
  prevState: PropTypes.bool.isRequired,
  nextState: PropTypes.bool.isRequired,
  filterPokemon: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
