import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination(props) {
  const { handlePages, numberOfPages } = props;
  return <div>{handlePages(numberOfPages)}</div>;
}
Pagination.propTypes = {
  handlePages: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
};
