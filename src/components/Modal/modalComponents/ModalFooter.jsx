import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import EvoComponent from './EvolutionComponent';


export default function ModalFooter(props) {
  const {
    // prevState,
    // nextState,
    // pokemonData,
    // handleClickNext,
    // handleClickPrev,
    evolutions,
  } = props;
  return (
    <React.Fragment>
      <Row className="w-100">
        <EvoComponent evolutions={evolutions} />
      </Row>
      {/*<Row className="w-100 justify-content-between">*/}
      {/*  <Col xs="12" sm="6" className="p-0 text-center align-self-center">*/}
      {/*    <Button*/}
      {/*      color="logoBlue"*/}
      {/*      disabled={!prevState}*/}
      {/*      onClick={() => handleClickPrev(pokemonData.prev_evolution)}*/}
      {/*      className="modal-button w-75 my-1"*/}
      {/*    >*/}
      {/*      previous*/}
      {/*      <br />*/}
      {/*      evolution*/}
      {/*    </Button>*/}
      {/*  </Col>*/}
      {/*  <Col xs="12" sm="6" className="p-0 text-center align-self-center">*/}
      {/*    <Button*/}
      {/*      className="modal-button w-75 my-1"*/}
      {/*      color="logoBlue"*/}
      {/*      disabled={!nextState}*/}
      {/*      onClick={() => handleClickNext(pokemonData.next_evolution)}*/}
      {/*    >*/}
      {/*      next*/}
      {/*      <br />*/}
      {/*      evolution*/}
      {/*    </Button>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
    </React.Fragment>
  );
}
ModalFooter.propTypes = {
  // pokemonData: PropTypes.instanceOf(Object).isRequired,
  // prevState: PropTypes.bool.isRequired,
  // nextState: PropTypes.bool.isRequired,
  // handleClickNext: PropTypes.func.isRequired,
  // handleClickPrev: PropTypes.func.isRequired,
  evolutions: PropTypes.instanceOf(Array).isRequired,

};
