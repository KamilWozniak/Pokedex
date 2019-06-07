import React from 'react';
import { Row, Col, Container } from 'reactstrap';

export default function FooterView() {
  return (
    <footer className="footer">
      <hr className="m-0 p-0" />
      <Container fluid className="bg-logoYellow">
        <Row>
          <Col className="text-center">
            <p className="pt-3 font-weight-bold text-logoDarkBlue">
              Pokémon and Pokémon character names are trademarks and property of Nintendo.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
