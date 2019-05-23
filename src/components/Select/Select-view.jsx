import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, FormGroup, Label, Input,
} from 'reactstrap';
import './Select-view.scss';

export default function Select(props) {
  const { handleChange } = props;
  return (
    <Row className="mt-5">
      <Col xs="5" className="d-flex ml-auto">
        <div className="ml-auto">
          <FormGroup className="d-flex align-items-center">
            <Label for="select" className="m-0">
              <small className="mr-2">Pokémons per page: </small>
            </Label>
            <Input
              type="select"
              bsSize="sm"
              id="select"
              className="select-max-width cursor-pointer"
              onChange={handleChange}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
            </Input>
          </FormGroup>
        </div>
      </Col>
    </Row>
  );
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
