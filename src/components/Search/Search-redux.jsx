import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from './Search-view';
import {
  updateSearch,
  onSearchSubmit,
  getPokemons,
} from '../../redux/actions/actions';

function SearchRedux(props) {
  const {
    searchValue,
    updateSearch: updateSearchAction,
    onSearchSubmit: handleSearchSubmit,
    getPokemons: fetchPokemons,
    itemsOnPage,
    history,
  } = props;

  const handleChange = (e) => {
    updateSearchAction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemons(`?q=${searchValue}&_page=1&_limit=${itemsOnPage}`);
    handleSearchSubmit(searchValue);
    if (window.scrollY < 50) {
      window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
    }
    history.push('1');
  };

  return (
    <React.Fragment>
      <Search searchValue={searchValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  searchValue: state.searchReducer.searchValue,
  itemsOnPage: state.selectReducer.itemsPerPage,
});

export default withRouter(connect(
  mapStateToProps,
  {
    updateSearch,
    onSearchSubmit,
    getPokemons,
  },
)(SearchRedux));

SearchRedux.propTypes = {
  searchValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  getPokemons: PropTypes.func.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
