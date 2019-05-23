import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  Col, Card, CardImg, CardBody, CardTitle, Badge,
} from 'reactstrap';

export default function PokemonCard(props) {
  const { pokemonInfo, toggleModal } = props;
  return (
    <Col xs="12" sm="6" lg="3" className="my-2">
      <Card className="p-2 cursor-pointer" onClick={() => toggleModal(true, pokemonInfo.id)}>
        <CardImg top src={pokemonInfo.img} alt="Pokemon image" />
        <CardBody>
          <CardTitle className="text-center">
            <strong>{`#${pokemonInfo.num} ${pokemonInfo.name}`}</strong>
          </CardTitle>
          <div className="d-flex justify-content-center">
            {pokemonInfo.type.map(type => (
              <Badge className="mx-1 p-1" key={uuid.v4()} color="danger">
                {type}
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
  toggleModal: PropTypes.func.isRequired,
};
