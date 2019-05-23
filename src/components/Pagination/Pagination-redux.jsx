import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from './Pagination-container';

function PaginationRedux(props) {
  const { total, itemsOnPage } = props;
  return (
    <React.Fragment>
      <Pagination total={total} itemsOnPage={itemsOnPage} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  total: state.pokemonReducer.total,
  itemsOnPage: state.selectReducer.itemsPerPage,
});

export default connect(
  mapStateToProps,
  null,
)(PaginationRedux);

PaginationRedux.propTypes = {
  total: PropTypes.number.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
};
