import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from './Modal-container';
import {
  toggleModal,
  getPokemonToModal,
} from '../../redux/actions/actions';

function ModalRedux(props) {
  const {
    toggleModalState,
    toggleModal: toggleModalAction,
    pokemonData,
    loading,
    error,
    evolutions,
    getPokemonToModal: getModalPokemon,
  } = props;
  return (
    <React.Fragment>
      <Modal
        toggleModalState={toggleModalState}
        toggleModalAction={toggleModalAction}
        pokemonData={pokemonData}
        loading={loading}
        error={error}
        evolutions={evolutions}
        getPokemonToModal={getModalPokemon}
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
  evolutions: state.modalReducer.evolutions,
});

export default connect(
  mapStateToProps,
  {
    toggleModal,
    getPokemonToModal,
  },
)(ModalRedux);

ModalRedux.propTypes = {
  toggleModalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  pokemonData: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  evolutions: PropTypes.instanceOf(Array).isRequired,
  getPokemonToModal: PropTypes.func.isRequired,

};
