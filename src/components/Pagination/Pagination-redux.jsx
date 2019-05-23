import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from './Pagination-container';
import { onPageChange } from '../../redux/actions/actions';

function PaginationRedux(props) {
  const {
    total, itemsOnPage, onPageChange: changePage, lastSearch, currentPage,
  } = props;
  return (
    <React.Fragment>
      <Pagination
        total={total}
        itemsOnPage={itemsOnPage}
        onPageChange={changePage}
        lastSearch={lastSearch}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  total: state.pokemonReducer.total,
  itemsOnPage: state.selectReducer.itemsPerPage,
  lastSearch: state.searchReducer.lastSearched,
  currentPage: state.pokemonReducer.currentPage,
});

export default connect(
  mapStateToProps,
  { onPageChange },
)(PaginationRedux);

PaginationRedux.propTypes = {
  total: PropTypes.number.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  lastSearch: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};
