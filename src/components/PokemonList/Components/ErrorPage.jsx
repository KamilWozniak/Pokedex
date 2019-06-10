import React from 'react';
import { Col, Row } from 'reactstrap';
import errorImg from '../../../assets/images/no-results.png';

export default function ErrorPage() {
  return (
    <section className="w-100">
      <Row>
        <Col className="text-center">
          <img className="no-result mt-3" src={errorImg} alt="Psyduck" />
          <h3 className="pt-3 mb-5">Sorry. Something went wrong. Try again.</h3>
        </Col>
      </Row>
    </section>
  );
}
