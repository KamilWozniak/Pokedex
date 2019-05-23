import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
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

  const handlePages = (pages) => {
    if (pages <= 1) {
      return null;
    }
    return (
      <Pagination>
        <PaginationItem>
          <PaginationLink first onClick={() => handlePageChange(1, itemsOnPage, lastSearch)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            onClick={() => handlePageChange(currentPage - 1, itemsOnPage, lastSearch)}
          />
        </PaginationItem>
        {Array(pages)
          .fill(1)
          .map((item, id) => {
            if (id + 1 === currentPage) {
              return (
                <React.Fragment key={uuid.v4()}>
                  <PaginationItem active key={uuid.v4()}>
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
            return (
              <React.Fragment key={uuid.v4()}>
                <PaginationItem key={uuid.v4()}>
                  <PaginationLink
                    onClick={() => handlePageChange(id + 1, itemsOnPage, lastSearch)}
                    key={uuid.v4()}
                  >
                    {id + 1}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            );
          })}
        <PaginationItem>
          <PaginationLink
            next
            onClick={() => handlePageChange(currentPage + 1, itemsOnPage, lastSearch)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            onClick={() => handlePageChange(numberOfPages, itemsOnPage, lastSearch)}
          />
        </PaginationItem>
      </Pagination>
    );
  };

  return (
    <React.Fragment>
      <PaginationView handlePages={handlePages} numberOfPages={numberOfPages} />
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
