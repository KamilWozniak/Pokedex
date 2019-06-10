import React from 'react';
import { Col, Row } from 'reactstrap';
import pokeball from '../../../assets/images/pokeball-loading.png';

export default function PokemonListLoading() {
  return (
    <section>
      <Row className="mt-5 pb-3 ">
        <Col className="d-flex justify-content-center">
          <img src={pokeball} alt="pokeball" className="loading-image" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-2 mb-5">
          <h1 className="text-uppercase text-center">loading, please wait</h1>
        </Col>
      </Row>
    </section>
  );
}
