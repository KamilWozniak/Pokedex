import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import './Select-view.scss';

export default function Select(props) {
  const { handleChange } = props;
  return (
    <Row className="mt-5">
      <Col className="d-flex ml-auto">
        <div className="ml-auto">
          <FormGroup className="d-flex align-items-center">
            <Label for="select" className="m-0">
              <small className="mr-2 font-weight-bold">Pokémons per page: </small>
            </Label>
            <Input
              type="select"
              bsSize="sm"
              id="select"
              className="select-max-width cursor-pointer"
              onChange={handleChange}
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
              <option value="60">60</option>
              <option value="72">72</option>
              <option value="84">84</option>
              <option value="96">96</option>
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
