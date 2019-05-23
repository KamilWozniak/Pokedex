import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal-view';

export default class ModalContainer extends Component {
  static propTypes = {
    toggleModalState: PropTypes.bool.isRequired,
    toggleModalAction: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  componentDidUpdate() {
    const { toggleModalState, id } = this.props;
    if (toggleModalState) console.log('fetch data about pokemon number ', id);
  }

  render() {
    const { toggleModalState, toggleModalAction } = this.props;
    return (
      <React.Fragment>
        <Modal toggleModalState={toggleModalState} toggleModalAction={toggleModalAction} />
      </React.Fragment>
    );
  }
}
