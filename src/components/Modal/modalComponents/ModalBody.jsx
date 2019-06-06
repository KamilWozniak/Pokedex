import React from 'react';
import { Row, Col, Badge } from 'reactstrap';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {
  handleMultipliers,
  handleCandys,
  handleNextEvo,
  handlePrevEvo,
} from './modalDisplayFunctions';

export default function ModalBody(props) {
  const { pokemonData } = props;
  return (
    <React.Fragment>
      <div className="text-center">
        <img src={pokemonData.img} alt={`${pokemonData.name}`} />
        <h4 className="mt-3">{`#${pokemonData.num} ${pokemonData.name}`}</h4>

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header ">type</p>
          </Col>
          <Col xs="5">
            <ul className="modal-ul-style">
              {pokemonData.type.map(type => (
                <li key={uuid.v4()}>
                  <Badge className="badge-min-width" key={uuid.v4()} color={type}>
                    <p className="modal-list-item">{type}</p>
                  </Badge>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <hr />

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">height</p>
          </Col>
          <Col xs="5">
            <p className="m-0">{pokemonData.height}</p>
          </Col>
        </Row>
        <hr />

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">weight</p>
          </Col>
          <Col xs="5">
            <p className="modal-paragraph">{pokemonData.weight}</p>
          </Col>
        </Row>
        <hr />

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">candy type</p>
          </Col>
          <Col xs="5" className="d-flex">
            <p className="modal-paragraph align-self-center ml-auto mr-auto">{pokemonData.candy}</p>
          </Col>
        </Row>
        <hr />

        {handleCandys(pokemonData.candy_count)}

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">egg</p>
          </Col>
          <Col xs="5">
            <p className="modal-paragraph">{pokemonData.egg}</p>
          </Col>
        </Row>
        <hr />

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">spawn chance</p>
          </Col>
          <Col xs="5" className="d-flex">
            <p className="modal-paragraph align-self-center ml-auto mr-auto">
              {pokemonData.spawn_chance}
            </p>
          </Col>
        </Row>
        <hr />

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">average spawns</p>
          </Col>
          <Col xs="5" className="d-flex">
            <p className="modal-paragraph align-self-center ml-auto mr-auto">
              {pokemonData.avg_spawns}
            </p>
          </Col>
        </Row>
        <hr />

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header">spawn time</p>
          </Col>
          <Col xs="5" className="d-flex">
            <p className="modal-paragraph align-self-center ml-auto mr-auto">
              {pokemonData.spawn_time}
            </p>
          </Col>
        </Row>
        <hr />

        {handleMultipliers(pokemonData.multipliers)}

        <Row className="modal-row-style">
          <Col xs="5" className="modal-col-style">
            <p className="modal-property-header ">weaknesses</p>
          </Col>
          <Col xs="5">
            <ul className="modal-ul-style">
              {pokemonData.weaknesses.map(weak => (
                <li key={uuid.v4()}>
                  <Badge className="badge-min-width" key={uuid.v4()} color={weak}>
                    <p className="modal-list-item">{weak}</p>
                  </Badge>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <hr />

        {handlePrevEvo(pokemonData.prev_evolution)}
        <hr />

        {handleNextEvo(pokemonData.next_evolution)}
      </div>
    </React.Fragment>
  );
}

ModalBody.propTypes = {
  pokemonData: PropTypes.instanceOf(Object).isRequired,
};
