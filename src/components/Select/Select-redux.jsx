import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Select from './Select-view';
import { changeItemsNumber, getPokemons } from '../../redux/actions/actions';

function SelectRedux(props) {
  const {
    changeItemsNumber: changeItemsNumberAction,
    lastSearch,
    getPokemons: fetchPokemons,
    history,
  } = props;

  const handleChange = (e) => {
    changeItemsNumberAction(e.target.value);
    if (lastSearch === '') {
      fetchPokemons(`/?_page=1&_limit=${e.target.value}`);
    } else {
      fetchPokemons(`/?q=${lastSearch}&_page=1&_limit=${e.target.value}`);
    }
    history.push('1');
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
  history: PropTypes.instanceOf(Object).isRequired,
};
