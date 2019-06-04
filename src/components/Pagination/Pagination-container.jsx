import React from 'react';
import PropTypes from 'prop-types';
import PaginationView from './Pagination-view';
import createNormalPagination from './components/createNormalPagination';
import handleFirstPages from './components/handleFirstPages';
import handleLastPages from './components/handleLastPages';
import handleMiddlePages from './components/handleMiddlePages';


export default function PaginationContainer(props) {
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
    if (pages > 1 && pages < 7) {
      return createNormalPagination(
        pages,
        handlePageChange,
        currentPage,
        itemsOnPage,
        lastSearch,
      );
    }
    if (pages > 6 && currentPage < 4) {
      return handleFirstPages(
        currentPage,
        handlePageChange,
        itemsOnPage,
        lastSearch,
      );
    }
    if (pages > 6 && currentPage > numberOfPages - 3) {
      return handleLastPages(
        pages,
        numberOfPages,
        currentPage,
        handlePageChange,
        itemsOnPage,
        lastSearch,
      );
    }
    if (pages > 6 && currentPage >= 4 && currentPage <= numberOfPages - 3) {
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
  // add variable that describe how many page items on site
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

PaginationContainer.propTypes = {
  total: PropTypes.number.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  lastSearch: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
