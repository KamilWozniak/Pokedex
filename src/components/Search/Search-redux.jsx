import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { debounce } from 'lodash';
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
    location,
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
    if (searchValue) {
      history.push(`?search=${searchValue}`);
    } else {
      history.push(location.pathname);
    }
  };

  const handleLiveSearch = (e) => {
    updateSearchAction(e.target.value);
    fetchPokemons(`?q=${e.target.value}&_page=1&_limit=${itemsOnPage}`);
    handleSearchSubmit(e.target.value);
    if (e.target.value) {
      history.push(`?search=${e.target.value}`);
    } else {
      history.push(location.pathname);
    }
  };

  return (
    <React.Fragment>
      <Search
        searchValue={searchValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleLiveSearch={handleLiveSearch}
      />
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
  location: PropTypes.instanceOf(Object).isRequired,
};
