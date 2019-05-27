import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  Col, Card, CardImg, CardBody, CardTitle, Badge,
} from 'reactstrap';

export default function PokemonCard(props) {
  const { pokemonInfo, handleClick } = props;
  return (
    <Col xs="8" sm="6" md="4" lg="3" className="my-2 text-center ml-auto mr-auto ml-sm-0 mr-sm-0 ">
      <Card
        className="px-0 pt-0 cursor-pointer card-style"
        onClick={() => handleClick(pokemonInfo.id)}
      >
        <div className="mt-auto mb-auto">
          <div className="img-wrapper d-flex">
            <CardImg
              top
              src={pokemonInfo.img}
              alt="Pokemon image"
              className="pokemon-img text-center align-self-center"
            />
          </div>
          <CardBody className="m-0 p-0">
            <CardTitle className="text-center font-weight-bold px-1">
              <p>{`#${pokemonInfo.num} ${pokemonInfo.name}`}</p>
            </CardTitle>
            <div className="d-flex justify-content-center">
              {pokemonInfo.type.map(type => (
                <Badge className="mx-1 p-1" key={uuid.v4()} color={type}>
                  <p className="text-white m-0 px-1">{type}</p>
                </Badge>
              ))}
            </div>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
}

PokemonCard.propTypes = {
  pokemonInfo: PropTypes.PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};
