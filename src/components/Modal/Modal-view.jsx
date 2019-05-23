import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button,
} from 'reactstrap';
import uuid from 'uuid';

export default function PokemonModal(props) {
  const {
    toggleModalState,
    closeModal,
    pokemonData,
    handleMultipliers,
    handleCandys,
    handlePrevEvo,
    handleNextEvo,
  } = props;

  return (
    <React.Fragment>
      <Modal isOpen={toggleModalState}>
        <ModalHeader toggle={closeModal}>
          <img src={pokemonData.img} alt={`${pokemonData.name}`} />
          <p>
            <strong>{`#${pokemonData.num} ${pokemonData.name}`}</strong>
          </p>
        </ModalHeader>
        <ModalBody>
          <p>Type:</p>
          <ul>
            {pokemonData.type.map(type => (
              <li key={uuid.v4()}>{type}</li>
            ))}
          </ul>
          <p>{`Height: ${pokemonData.height}`}</p>
          <p>{`Weight: ${pokemonData.weight}`}</p>
          <p>{`Candy Type: ${pokemonData.candy}`}</p>
          {handleCandys(pokemonData.candy_count)}
          <p>{`Egg: ${pokemonData.egg}`}</p>
          <p>{`Spawn chance: ${pokemonData.spawn_chance}`}</p>
          <p>{`Average spawns: ${pokemonData.avg_spawns}`}</p>
          <p>{`Spawn time: ${pokemonData.spawn_time}`}</p>
          {handleMultipliers(pokemonData.multipliers)}
          <p>Weaknesses:</p>
          <ul>
            {pokemonData.weaknesses.map(weak => (
              <li key={uuid.v4()}>{weak}</li>
            ))}
          </ul>
          {handlePrevEvo(pokemonData.prev_evolution)}
          {handleNextEvo(pokemonData.next_evolution)}
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
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
};
