import React from 'react';
import {
  Row, Col, Form, Input, InputGroup, InputGroupAddon, Button,
} from 'reactstrap';

export default function Search() {
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col className="text-center">
          <p>
            <strong>Find Pokémon</strong>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Form>
            <InputGroup>
              <Input type="text" placeholder="Search" />
              <InputGroupAddon addonType="append">
                <Button>Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}
