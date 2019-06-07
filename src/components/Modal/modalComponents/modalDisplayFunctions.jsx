import React from 'react';
import { Row, Col } from 'reactstrap';
import uuid from 'uuid';
import { onPrevChange, onNextChange } from '../../../redux/actions/actions';
import store from '../../../redux/store';
import SingleProperty from './SingleProperty';
import ComplexProperty from './ComplexProperty';

export const handleMultipliers = (data) => {
  if (data === null) {
    return null;
  }
  return (
    <React.Fragment>
      <Row className="modal-row-style">
        <Col xs="6" className="modal-col-style">
          <p className="modal-property-header ">multipliers</p>
        </Col>
        <Col xs="4">
          <ul className="modal-ul-style">
            {data.map(multi => (
              <li key={uuid.v4()}>
                {multi}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <hr />
    </React.Fragment>
  );
};

export const handlePrevEvo = (data) => {
  if (!data) {
    store.dispatch(onPrevChange(false));
    return (
      <SingleProperty property="None" propertyName="previous evolutions" />
    );
  }
  store.dispatch(onPrevChange(true));
  return (
    <ComplexProperty data={data} title="previous evolutions" />
  );
};

export const handleNextEvo = (data) => {
  if (!data) {
    store.dispatch(onNextChange(false));
    return (
      <SingleProperty property="None" propertyName="next evolutions" />
    );
  }
  store.dispatch(onNextChange(true));
  return (
    <ComplexProperty data={data} title="next evolutions" />
  );
};
