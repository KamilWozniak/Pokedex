import React from 'react';
import PropTypes from 'prop-types';
import {
  Pagination, PaginationItem, PaginationLink, Row, Col,
} from 'reactstrap';

export default function PaginationView(props) {
  const {
    handlePages,
    numberOfPages,
    itemsOnPage,
    lastSearch,
    handlePageChange,
    currentPage,
  } = props;
  if (numberOfPages > 1) {
    return (
      <Row>
        <Col>
          <Pagination>
            <PaginationItem disabled={Number(currentPage) === 1}>
              <PaginationLink first onClick={() => handlePageChange(1, itemsOnPage, lastSearch)} />
            </PaginationItem>
            <PaginationItem disabled={Number(currentPage) === 1}>
              <PaginationLink
                previous
                onClick={() => handlePageChange(currentPage - 1, itemsOnPage, lastSearch)}
              />
            </PaginationItem>
            {handlePages(numberOfPages)}
            <PaginationItem disabled={currentPage === numberOfPages}>
              <PaginationLink
                next
                onClick={() => handlePageChange(currentPage + 1, itemsOnPage, lastSearch)}
              />
            </PaginationItem>
            <PaginationItem disabled={currentPage === numberOfPages}>
              <PaginationLink
                last
                onClick={() => handlePageChange(numberOfPages, itemsOnPage, lastSearch)}
              />
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    );
  }
  return null;
}
PaginationView.propTypes = {
  handlePages: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  lastSearch: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
