import React from 'react';
import PropTypes from 'prop-types';
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
      <BadgedProperty property={pokemonData.weaknesses} propertyName="weaknesses" />
    </React.Fragment>
  );
}
ModalBody.propTypes = {
  pokemonData: PropTypes.instanceOf(Object).isRequired,
};
