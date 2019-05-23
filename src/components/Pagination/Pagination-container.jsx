import React from 'react';
import PropTypes from 'prop-types';
import { PaginationItem, PaginationLink } from 'reactstrap';
import uuid from 'uuid';
import PaginationView from './Pagination-view';

export default function PaginationContainer(props) {
  const {
    total, itemsOnPage, onPageChange, lastSearch, currentPage,
  } = props;

  const numberOfPages = Math.ceil(total / itemsOnPage);

  const handlePageChange = (pageNumber, itemsPerPage, query) => {
    onPageChange(pageNumber, itemsPerPage, query);
  };

  const createNormalPagination = pages => Array(pages)
    .fill(1)
    .map((item, id) => (
      <React.Fragment key={uuid.v4()}>
        <PaginationItem active={id + 1 === currentPage} key={uuid.v4()}>
          <PaginationLink
            onClick={() => handlePageChange(id + 1, itemsOnPage, lastSearch)}
            key={uuid.v4()}
          >
            {id + 1}
          </PaginationLink>
        </PaginationItem>
      </React.Fragment>
    ));

  const handleFirstPages = () => (
    <React.Fragment>
      {Array(6)
        .fill(1)
        .map((item, id) => (
          <React.Fragment key={uuid.v4()}>
            <PaginationItem active={id + 1 === currentPage} key={uuid.v4()}>
              <PaginationLink
                onClick={() => handlePageChange(id + 1, itemsOnPage, lastSearch)}
                key={uuid.v4()}
              >
                {id + 1}
              </PaginationLink>
            </PaginationItem>
          </React.Fragment>
        ))}
      <PaginationItem disabled>
        <PaginationLink>...</PaginationLink>
      </PaginationItem>
    </React.Fragment>
  );

  const handleLastPages = pages => (
    <React.Fragment>
      <PaginationItem disabled>
        <PaginationLink>...</PaginationLink>
      </PaginationItem>
      {Array(pages)
        .fill(1)
        .map((item, id) => {
          if (id + 1 > numberOfPages - 6) {
            return (
              <React.Fragment key={uuid.v4()}>
                <PaginationItem active={id + 1 === currentPage} key={uuid.v4()}>
                  <PaginationLink
                    onClick={() => handlePageChange(id + 1, itemsOnPage, lastSearch)}
                    key={uuid.v4()}
                  >
                    {id + 1}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            );
          }
          return null;
        })}
    </React.Fragment>
  );

  const handleMiddlePages = pages => (
    <React.Fragment>
      <PaginationItem disabled>
        <PaginationLink>...</PaginationLink>
      </PaginationItem>
      {Array(pages)
        .fill(1)
        .map((item, id) => {
          if (id + 1 > currentPage - 3 && id + 1 < currentPage + 3) {
            return (
              <React.Fragment key={uuid.v4()}>
                <PaginationItem active={id + 1 === currentPage} key={uuid.v4()}>
                  <PaginationLink
                    onClick={() => handlePageChange(id + 1, itemsOnPage, lastSearch)}
                    key={uuid.v4()}
                  >
                    {id + 1}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            );
          }
          return null;
        })}

      <PaginationItem disabled>
        <PaginationLink>...</PaginationLink>
      </PaginationItem>
    </React.Fragment>
  );

  const handlePages = (pages) => {
    if (pages > 1 && pages < 7) {
      return createNormalPagination(pages);
    }
    if (pages > 6 && currentPage < 4) {
      return handleFirstPages();
    }
    if (pages > 6 && currentPage > numberOfPages - 3) {
      return handleLastPages(pages);
    }
    if (pages > 6 && currentPage >= 4 && currentPage <= numberOfPages - 3) {
      return handleMiddlePages(pages);
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
};
