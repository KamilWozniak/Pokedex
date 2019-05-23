import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import uuid from 'uuid';
import PaginationView from './Pagination-view';

export default function PaginationContainer(props) {
  const { total, itemsOnPage } = props;
  const numberOfPages = Math.ceil(total / itemsOnPage);

  const handlePages = (pages) => {
    if (pages <= 1) {
      return null;
    }
    if (pages === 2) {
      return (
        <Pagination>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
        </Pagination>
      );
    }
    return (
      <Pagination>
        <PaginationItem>
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous />
        </PaginationItem>
        {Array(pages)
          .fill(1)
          .map((item, id) => (
            <PaginationItem key={uuid.v4()}>
              <PaginationLink key={uuid.v4()}>{id + 1}</PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationLink next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last />
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
};
