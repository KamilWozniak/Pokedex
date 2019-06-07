import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Col, Row, Badge } from 'reactstrap';

export default function BadgedProperty(props) {
  const { property, propertyName } = props;
  return (
    <React.Fragment>
      <Row className="modal-row-style">
        <Col xs="6" className="modal-col-style">
          <p className="modal-property-header">{propertyName}</p>
        </Col>
        <Col xs="4">
          <ul className="modal-ul-style text-center">
            {property.map(item => (
              <li key={uuid.v4()}>
                <Badge className="badge-min-width" key={uuid.v4()} color={item}>
                  <p className="modal-list-item">{item}</p>
                </Badge>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <hr />
    </React.Fragment>
  );
}
BadgedProperty.propTypes = {
  property: PropTypes.arrayOf(PropTypes.string).isRequired,
  propertyName: PropTypes.string.isRequired,
};
