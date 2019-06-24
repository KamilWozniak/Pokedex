import React from 'react';
import PropTypes from 'prop-types';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './pagination.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import queryString from 'query-string';

export default function PaginationView(props) {
  const {
    handlePages,
    numberOfPages,
    itemsOnPage,
    lastSearch,
    handlePageChange,
    currentPage,
    loading,
    location,
  } = props;

  const searchQueryValues = queryString.parse(location.search);

  if (loading) {
    return null;
  }


  if (numberOfPages > 1) {
    return (
      <React.Fragment>
        <Row className="my-5">
          <Col className="d-flex justify-content-center">
            <Pagination style={{ marginBottom: 0 }}>
              <PaginationItem disabled={Number(currentPage) === 1}>
                <PaginationLink
                  first
                  onClick={() => handlePageChange(1, itemsOnPage, lastSearch)}
                  className="pagination-link-style"
                >

                  <Link
                    className="pagination-router-link-edges"
                    to={`${location.pathname}?${searchQueryValues.search
                      ? `search=${searchQueryValues.search}` : ''}&page=1`}
                  >
                    <i className="fas fa-angle-double-left" />
                  </Link>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={Number(currentPage) === 1}>
                <PaginationLink
                  previous
                  onClick={() => handlePageChange(currentPage - 1, itemsOnPage, lastSearch)}
                  className="pagination-link-style"
                >
                  <Link
                    className="pagination-router-link-edges"
                    to={`${location.pathname}?${searchQueryValues.search
                      ? `search=${searchQueryValues.search}` : ''}&page=${currentPage - 1}`}
                  >
                    <i className="fas fa-angle-left" />
                  </Link>
                </PaginationLink>
              </PaginationItem>

              {handlePages(numberOfPages)}

              <PaginationItem disabled={currentPage === numberOfPages}>
                <PaginationLink
                  next
                  onClick={() => handlePageChange(currentPage + 1, itemsOnPage, lastSearch)}
                  className="pagination-link-style"
                >
                  <Link
                    className="pagination-router-link-edges"
                    to={`${location.pathname}?${searchQueryValues.search
                      ? `search=${searchQueryValues.search}` : ''}&page=${currentPage + 1}`}
                  >
                    <i className="fas fa-angle-right" />
                  </Link>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={currentPage === numberOfPages}>
                <PaginationLink
                  last
                  onClick={() => handlePageChange(numberOfPages, itemsOnPage, lastSearch)}
                  className="pagination-link-style"
                >
                  <Link
                    className="pagination-router-link-edges"
                    to={`${location.pathname}?${searchQueryValues.search
                      ? `search=${searchQueryValues.search}` : ''}&page=${numberOfPages}`}
                  >
                    <i className="fas fa-angle-double-right" />
                  </Link>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </React.Fragment>
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
  loading: PropTypes.bool.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
