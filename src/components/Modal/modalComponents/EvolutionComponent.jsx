import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import uuid from 'uuid';
import '../modal.scss';

export default function EvolutionComponent(props) {
  const { evolutions, getPokemonToModal } = props;
  if (evolutions.length > 0 && typeof evolutions[0] === 'object') {
    return (
      <Row className="w-100">
        {evolutions.map(item => (
          <Col key={uuid.v4()} className="text-center my-2">
            <button className="evoButton" type="button" onClick={() => getPokemonToModal(item)}>
              <img src={item.img} alt="Evolution" />
            </button>
          </Col>
        ))}
      </Row>
    );
  }
}
EvolutionComponent.propTypes = {
  evolutions: PropTypes.instanceOf(Array).isRequired,
  getPokemonToModal: PropTypes.func.isRequired,

};
