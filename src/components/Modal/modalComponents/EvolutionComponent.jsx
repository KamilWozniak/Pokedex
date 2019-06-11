import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import uuid from 'uuid';

export default function EvolutionComponent(props) {
  const { evolutions } = props;
  if (evolutions.length > 0 && typeof evolutions[0] === 'object') {
    return (
      <React.Fragment>
        {evolutions.map(item => <Col key={uuid.v4()}><img src={item.img} alt="alt" /></Col>)}
      </React.Fragment>
    );
  }
  if (evolutions.length === 0) {
    return null;
  }

  return <p>We could not download evolutions</p>; // TODO: style this element

}
EvolutionComponent.propTypes = {
  evolutions: PropTypes.instanceOf(Array).isRequired,
};
