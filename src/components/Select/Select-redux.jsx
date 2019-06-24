import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import Select from './Select-view';
import { changeItemsNumber, getPokemons } from '../../redux/actions/actions';

function SelectRedux(props) {
  const {
    changeItemsNumber: changeItemsNumberAction,
    lastSearch,
    getPokemons: fetchPokemons,
    location,
    history,
  } = props;

  const searchQueryValues = queryString.parse(location.search);

  const handleChange = (e) => {
    changeItemsNumberAction(e.target.value);
    if (lastSearch === '') {
      fetchPokemons(`/?_page=1&_limit=${e.target.value}`);
      history.push(`${location.pathname}?page=1`);
    } else {
      fetchPokemons(`/?q=${lastSearch}&_page=1&_limit=${e.target.value}`);
      history.push(`${location.pathname}?search=${searchQueryValues.search}&page=1`);
    }
  };

  return (
    <React.Fragment>
      <Select handleChange={handleChange} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  lastSearch: state.searchReducer.lastSearched,
});

export default withRouter(connect(
  mapStateToProps,
  { changeItemsNumber, getPokemons },
)(SelectRedux));

SelectRedux.propTypes = {
  changeItemsNumber: PropTypes.func.isRequired,
  getPokemons: PropTypes.func.isRequired,
  lastSearch: PropTypes.string.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
