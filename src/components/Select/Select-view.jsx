import React from 'react';
import {
  Row, Col, FormGroup, Label, Input,
} from 'reactstrap';
import './Select-view.scss';

export default function Select() {
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
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </Input>
          </FormGroup>
        </div>
      </Col>
    </Row>
  );
}
