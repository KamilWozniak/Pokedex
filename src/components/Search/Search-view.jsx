import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Form,
} from 'reactstrap';
import { DebounceInput } from 'react-debounce-input';

export default function Search(props) {
  const {
    searchValue,
    handleLiveSearch,
  } = props;
  return (
    <React.Fragment>
      <section role="search" className="mt-4">
        <Row>
          <Col className="text-center">
            <p>
              <strong>Find Pokémon</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Form onSubmit={e => e.preventDefault()}>
              <DebounceInput
                className="w-100"
                minLength={1}
                debounceTimeout={400}
                type="text"
                value={searchValue}
                placeholder="Start typing a name of Pokémon"
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
  handleLiveSearch: PropTypes.func.isRequired,
};
