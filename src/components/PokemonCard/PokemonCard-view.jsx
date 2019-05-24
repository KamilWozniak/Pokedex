import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  Col, Card, CardImg, CardBody, CardTitle, Badge,
} from 'reactstrap';

export default function PokemonCard(props) {
  const { pokemonInfo, handleClick } = props;
  return (
    <Col xs="12" sm="6" lg="3" className="my-2">
      <Card className="p-2 cursor-pointer" onClick={() => handleClick(pokemonInfo.id)}>
        <CardImg top src={pokemonInfo.img} alt="Pokemon image" />
        <CardBody>
          <CardTitle className="text-center">
            <strong>{`#${pokemonInfo.num} ${pokemonInfo.name}`}</strong>
          </CardTitle>
          <div className="d-flex justify-content-center">
            {pokemonInfo.type.map(type => (
              <Badge className="mx-1 p-1" key={uuid.v4()} color={type}>
                <p className="text-white m-0 px-1">{type}</p>
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

PokemonCard.propTypes = {
  pokemonInfo: PropTypes.PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};
