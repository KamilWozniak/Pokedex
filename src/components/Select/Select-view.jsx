import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  FormGroup,
  Label,
  CustomInput,
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
            <CustomInput
              type="select"
              bsSize="sm"
              id="select"
              className="select-max-width cursor-pointer"
              onChange={handleChange}
            >
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 12} value="12">12</option>
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 24} value="24">24</option>
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 36} value="36">36</option>
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 48} value="48">48</option>
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 60} value="60">60</option>
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 72} value="72">72</option>
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 84} value="84">84</option>
              <option selected={Number(localStorage.getItem('itemsOnPage')) === 96} value="96">96</option>
            </CustomInput>
          </FormGroup>
        </div>
      </Col>
    </Row>
  );
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
