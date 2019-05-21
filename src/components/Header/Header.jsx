import React from 'react';
import { Row, Col } from 'reactstrap';
import pokemonLogo from '../../assets/images/pokemonLogo.svg';

export default function Header() {
  return (
    <Row>
      <Col className="text-center">
        <img src={pokemonLogo} width="80%" alt="Pokemon international logo" />
      </Col>
    </Row>
  );
}
