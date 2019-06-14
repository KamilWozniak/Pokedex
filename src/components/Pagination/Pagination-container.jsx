import React from 'react';
import PropTypes from 'prop-types';
import PaginationView from './Pagination-view';
import createNormalPagination from './components/createNormalPagination';
import handleFirstPages from './components/handleFirstPages';
import handleLastPages from './components/handleLastPages';
import handleMiddlePages from './components/handleMiddlePages';
import {
  ITEMS_TO_ACTIVATE_BOTH_DOTTS,
  BOUNDARY_OF_NORMAL_PAGINATION,
} from './components/paginationControll';

function PaginationContainer(props) {
  const {
    total,
    itemsOnPage,
    onPageChange,
    lastSearch,
    currentPage,
    loading,
  } = props;

  const numberOfPages = Math.ceil(total / itemsOnPage);

  const handlePageChange = (pageNumber, itemsPerPage, query) => {
    onPageChange(pageNumber, itemsPerPage, query);
  };

  const handlePages = (pages) => {
    if (pages > 1
      && pages <= BOUNDARY_OF_NORMAL_PAGINATION) {
      return createNormalPagination(
        pages,
        handlePageChange,
        currentPage,
        itemsOnPage,
        lastSearch,
      );
    }
    if (pages > BOUNDARY_OF_NORMAL_PAGINATION
      && currentPage <= ITEMS_TO_ACTIVATE_BOTH_DOTTS) {
      return handleFirstPages(
        currentPage,
        handlePageChange,
        itemsOnPage,
        lastSearch,
      );
    }
    if (pages > BOUNDARY_OF_NORMAL_PAGINATION
      && currentPage > numberOfPages - ITEMS_TO_ACTIVATE_BOTH_DOTTS) {
      return handleLastPages(
        pages,
        numberOfPages,
        currentPage,
        handlePageChange,
        itemsOnPage,
        lastSearch,
      );
    }
    if (pages > BOUNDARY_OF_NORMAL_PAGINATION
      && currentPage > ITEMS_TO_ACTIVATE_BOTH_DOTTS
      && currentPage <= numberOfPages - ITEMS_TO_ACTIVATE_BOTH_DOTTS) {
      return handleMiddlePages(
        pages,
        currentPage,
        handlePageChange,
        itemsOnPage,
        lastSearch,
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <PaginationView
        handlePages={handlePages}
        numberOfPages={numberOfPages}
        itemsOnPage={itemsOnPage}
        lastSearch={lastSearch}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        loading={loading}
      />
    </React.Fragment>
  );
}

export default PaginationContainer;

PaginationContainer.propTypes = {
  total: PropTypes.number.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  lastSearch: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
