import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

export default function SingleProperty(props) {
  const { property, propertyName } = props;
  return (
    <React.Fragment>
      <Row className="modal-row-style">
        <Col xs="6" className="modal-col-style">
          <p className="modal-property-header">{propertyName}</p>
        </Col>
        <Col xs="4" className="d-flex">
          <p className="modal-paragraph">{property}</p>
        </Col>
      </Row>
      <hr />
    </React.Fragment>
  );
}
SingleProperty.propTypes = {
  property: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  propertyName: PropTypes.string.isRequired,
};
