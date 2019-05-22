import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from './Search-view';
import { updateSearch } from '../../redux/actions/actions';

function SearchRedux(props) {
  const { searchValue, updateSearch: updateSearchAction } = props;
  const handleChange = (e) => {
    updateSearchAction(e.target.value);
  };

  return (
    <React.Fragment>
      <Search searchValue={searchValue} handleChange={handleChange} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  searchValue: state.searchReducer.searchValue,
});

export default connect(
  mapStateToProps,
  { updateSearch },
)(SearchRedux);

SearchRedux.propTypes = {
  searchValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
};
