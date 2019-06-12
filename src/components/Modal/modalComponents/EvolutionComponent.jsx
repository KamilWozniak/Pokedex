import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import uuid from 'uuid';

export default function EvolutionComponent(props) {
  const { evolutions, getPokemonToModal } = props;
  if (evolutions.length > 0 && typeof evolutions[0] === 'object') {
    return (
      <Row>
        {evolutions.map(item => (
          <Col key={uuid.v4()}>
            <button type="button" onClick={() => getPokemonToModal(item)}>
              <img src={item.img} alt="Evolution" />
            </button>
          </Col>
        ))}
      </Row>
    );
  }
}
// TODO: style this buttons
EvolutionComponent.propTypes = {
  evolutions: PropTypes.instanceOf(Array).isRequired,
  getPokemonToModal: PropTypes.func.isRequired,

};
