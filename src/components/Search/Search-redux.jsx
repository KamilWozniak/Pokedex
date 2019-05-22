import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from './Search-view';
import { updateSearch, onSearchSubmit } from '../../redux/actions/actions';

function SearchRedux(props) {
  const {
    searchValue,
    updateSearch: updateSearchAction,
    onSearchSubmit: handleSearchSubmit,
  } = props;
  const handleChange = (e) => {
    updateSearchAction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(searchValue);
  };

  return (
    <React.Fragment>
      <Search searchValue={searchValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  searchValue: state.searchReducer.searchValue,
});

export default connect(
  mapStateToProps,
  { updateSearch, onSearchSubmit },
)(SearchRedux);

SearchRedux.propTypes = {
  searchValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};
