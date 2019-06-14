import React from 'react';
import uuid from 'uuid';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { ITEMS_TO_DISPLAY_WHEN_IN_MIDDLE } from './paginationControll';
import { POKEMON_PAGES_URL } from "../../../URLs";
import { Link } from 'react-router-dom';

const handleMiddlePages = (
  pages,
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
        if (id + 1 > currentPage - ITEMS_TO_DISPLAY_WHEN_IN_MIDDLE
          && id + 1 < currentPage + ITEMS_TO_DISPLAY_WHEN_IN_MIDDLE) {
          return (
            <React.Fragment key={uuid.v4()}>
              <PaginationItem active={id + 1 === currentPage} key={uuid.v4()}>
                <Link className="pagination-router-link-inner" to={`${POKEMON_PAGES_URL}${id + 1}`}>
                  <PaginationLink
                    onClick={() => handlePageChange(id + 1, itemsOnPage, lastSearch)}
                    key={uuid.v4()}
                  >
                    <span className="font-weight-bold">
                      {id + 1}
                    </span>
                  </PaginationLink>
                </Link>
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

export default handleMiddlePages;
