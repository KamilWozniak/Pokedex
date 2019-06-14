import React from 'react';
import uuid from 'uuid';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { BOUNDARY_OF_NORMAL_PAGINATION } from './paginationControll';
import { Link } from 'react-router-dom';
import { POKEMON_PAGES_URL } from "../../../URLs";

const handleFirstPages = (
  currentPage,
  handlePageChange,
  itemsOnPage,
  lastSearch,
) => (
  <React.Fragment>
    {Array(BOUNDARY_OF_NORMAL_PAGINATION)
      .fill(1)
      .map((item, id) => (
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
      ))}
    <PaginationItem disabled>
      <PaginationLink>...</PaginationLink>
    </PaginationItem>
  </React.Fragment>
);

export default handleFirstPages;
