import React from 'react';
import { Row, Col } from 'reactstrap';
import uuid from 'uuid';
import { onPrevChange, onNextChange } from '../../../redux/actions/actions';
import store from '../../../redux/store';

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

export const handleCandys = (data) => {
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <Row className="modal-row-style">
        <Col xs="6" className="modal-col-style">
          <p className="modal-property-header">number of candys</p>
        </Col>
        <Col xs="4" className="d-flex">
          <p className="modal-paragraph align-self-center ml-auto mr-auto">{data}</p>
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
      <Row className="modal-row-style">
        <Col xs="6" className="modal-col-style">
          <p className="modal-property-header">previous evolutions</p>
        </Col>
        <Col xs="4" className="d-flex">
          <p className="modal-paragraph align-self-center ml-auto mr-auto">none</p>
        </Col>
      </Row>
    );
  }
  store.dispatch(onPrevChange(true));
  return (
    <Row className="modal-row-style">
      <Col xs="6" className="modal-col-style">
        <p className="modal-property-header">previous evolutions</p>
      </Col>
      <Col xs="4" className="d-flex">
        <ul className="modal-ul-style w-100 align-self-center">
          {data.map(evo => (
            <li key={uuid.v4()} className=" text-center my-auto">
              <p className="m-0">{`#${evo.num} ${evo.name}`}</p>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export const handleNextEvo = (data) => {
  if (!data) {
    store.dispatch(onNextChange(false));
    return (
      <Row className="modal-row-style">
        <Col xs="6" className="modal-col-style">
          <p className="modal-property-header">next evolutions</p>
        </Col>
        <Col xs="4" className="d-flex">
          <p className="modal-paragraph align-self-center ml-auto mr-auto">none</p>
        </Col>
      </Row>
    );
  }
  store.dispatch(onNextChange(true));
  return (
    <Row className="modal-row-style">
      <Col xs="6" className="modal-col-style">
        <p className="modal-property-header">next evolutions</p>
      </Col>
      <Col xs="4" className="d-flex">
        <ul className="modal-ul-style w-100 align-self-center">
          {data.map(evo => (
            <li key={uuid.v4()} className=" text-center my-auto">
              <p className="m-0">{`#${evo.num} ${evo.name}`}</p>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};
