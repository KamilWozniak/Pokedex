import React from 'react';
import { Col, Row } from 'reactstrap';
import noResultImg from '../../../assets/images/no-results.png';

export default function NoResults() {
  return (
    <section className="w-100">
      <Row>
        <Col className="text-center">
          <img className="no-result mt-3" src={noResultImg} alt="no result" />
          <h3 className="pt-3 mb-5">Psyduck says that there is no such pokemon!</h3>
        </Col>
      </Row>
    </section>
  );
}
