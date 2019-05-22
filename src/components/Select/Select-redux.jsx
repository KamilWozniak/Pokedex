import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select-view';
import { changeItemsNumber } from '../../redux/actions/actions';

function SelectRedux(props) {
  const { changeItemsNumber: changeItemsNumberAction } = props;

  const handleChange = (e) => {
    changeItemsNumberAction(e.target.value);
  };

  return (
    <React.Fragment>
      <Select handleChange={handleChange} />
    </React.Fragment>
  );
}

export default connect(
  null,
  { changeItemsNumber },
)(SelectRedux);

SelectRedux.propTypes = {
  changeItemsNumber: PropTypes.func.isRequired,
};
