import React from 'react';
import PropTypes from 'prop-types';
import {
  handleNextEvo,
  handlePrevEvo,
} from './modalDisplayFunctions';
import SingleProperty from './SingleProperty';
import BadgedProperty from './BadgedProperty';

export default function ModalBody(props) {
  const { pokemonData } = props;
  return (
    <React.Fragment>
      <div className="text-center">
        <img src={pokemonData.img} alt={`${pokemonData.name}`} />
        <h4 className="mt-3">{`#${pokemonData.num} ${pokemonData.name}`}</h4>
      </div>

      <BadgedProperty property={pokemonData.type} propertyName="type" />
      <SingleProperty property={pokemonData.height} propertyName="height" />
      <SingleProperty property={pokemonData.weight} propertyName="weight" />
      <SingleProperty property={pokemonData.candy} propertyName="candy type" />
      {/* {pokemonData.candy_count ? <SingleProperty */}
      {/* property={pokemonData.candy_count} */}
      {/* propertyName="number of candys" /> : null} */}
      {/* <SingleProperty property={pokemonData.egg} propertyName="egg" /> */}
      {/* <SingleProperty property={pokemonData.spawn_chance} propertyName="spawn chance" /> */}
      {/* <SingleProperty property={pokemonData.avg_spawns} propertyName="average spawns" /> */}
      {/* <SingleProperty property={pokemonData.spawn_time} propertyName="spawn time" /> */}
      {/* {handleMultipliers(pokemonData.multipliers)} */}
      <BadgedProperty property={pokemonData.weaknesses} propertyName="weaknesses" />
      {handlePrevEvo(pokemonData.prev_evolution)}
      {handleNextEvo(pokemonData.next_evolution)}
    </React.Fragment>
  );
}

ModalBody.propTypes = {
  pokemonData: PropTypes.instanceOf(Object).isRequired,
};
