import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';
import { DebounceInput } from 'react-debounce-input';

export default function Search(props) {
  const {
    searchValue,
    handleChange,
    handleSubmit,
    handleLiveSearch,
  } = props;
  return (
    <React.Fragment>
      <section role="search">
        <Row>
          <Col className="text-center">
            <p>
              <strong>Find Pokémon</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Form onSubmit={
              handleSubmit
            }
            >
              <InputGroup>
                <Input type="text" placeholder="Search" value={searchValue} onChange={handleChange} />
                <InputGroupAddon addonType="append">
                  <Button color="logoBlue">
                    <span className="text-logoYellow font-weight-bold text-capitalize">search</span>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </section>

      <section role="search" className="mt-4">
        <Row>
          <Col className="text-center">
            <p>
              <strong>Live Search</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Form onSubmit={e => e.preventDefault()}>
              <DebounceInput
                className="w-50"
                minLength={1}
                debounceTimeout={400}
                type="text"
                value={searchValue}
                placeholder="Type name of Pokemon"
                onChange={handleLiveSearch}
              />
            </Form>
          </Col>
        </Row>
      </section>
    </React.Fragment>

  );
}
Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleLiveSearch: PropTypes.func.isRequired,
};
