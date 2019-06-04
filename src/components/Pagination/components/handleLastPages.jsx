import React from 'react';
import uuid from 'uuid';
import { PaginationItem, PaginationLink } from 'reactstrap';

const handleLastPages = (
  pages,
  numberOfPages,
  currentPage,
  handlePageChange,
  itemsOnPage,
  lastSearch,
) => (
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

export default handleLastPages;
