import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

export default function ComplexProperty(props) {
  const { data, title } = props;
  return (
    <React.Fragment>
      <Row className="modal-row-style">
        <Col xs="6" className="modal-col-style">
          <p className="modal-property-header">{title}</p>
        </Col>
        <Col xs="4" className="d-flex">
          <ul className="modal-ul-style w-100 align-self-center">
            {data.map(pokemon => (
              <li key={uuid.v4()} className=" text-center my-auto">
                <p className="m-0">{`#${pokemon.num} ${pokemon.name}`}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <hr />
    </React.Fragment>
  );
}

ComplexProperty.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  title: PropTypes.string.isRequired,
};
