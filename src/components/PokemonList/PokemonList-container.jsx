import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PokemonCard from '../PokemonCard';
import pokeball from '../../assets/images/pokeball-loading.png';
import noResultImg from '../../assets/images/no-results.png';

export default class PokemonListContainer extends Component {
  componentDidMount() {
    const { getPokemons, itemsOnPage } = this.props;
    getPokemons(`/?_page=1&_limit=${itemsOnPage}`);
  }

  render() {
    const {
      pokemons, toggleModal, getPokemonToModal, loading,
    } = this.props;

    const handleClick = (id) => {
      toggleModal(true);
      getPokemonToModal(id);
    };
    if (loading) {
      return (
        <React.Fragment>
          <Row className="mt-5 pb-3 ">
            <Col className="d-flex justify-content-center">
              <img src={pokeball} alt="pokeball" className="loading-image" />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-2 font-weight-bold">
              <p>LOADING, PLEASE WAIT</p>
            </Col>
          </Row>
        </React.Fragment>
      );
    }

    return (
      <Row className="w-100 ml-auto mr-auto">
        {pokemons.length > 0 ? (
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemonInfo={pokemon} handleClick={handleClick} />
          ))
        ) : (
          <Row className="w-100 my-5">
            <Col className="text-center">
              <img className="no-result mb-5" src={noResultImg} alt="no result" />
              <h3>Psyduck says that there is no such pokemon!</h3>
            </Col>
          </Row>
        )}
      </Row>
    );
  }
}
PokemonListContainer.propTypes = {
  pokemons: PropTypes.instanceOf(Array).isRequired,
  toggleModal: PropTypes.func.isRequired,
  getPokemonToModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  getPokemons: PropTypes.func.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
};
