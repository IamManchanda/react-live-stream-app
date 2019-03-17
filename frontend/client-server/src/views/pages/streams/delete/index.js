import React, { Fragment, Component } from 'react';
import DeleteModal from '../../../components/delete-modal';

import history from '../../../../history';

const StreamDelete = class extends Component {
  componentDidMount(){
    document.addEventListener('keydown', this.handleEscapeKey, false);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleEscapeKey, false);
  }

  handleEscapeKey = (event) => {
    if(event.keyCode === 27) history.push('/');
  }

  render() {
    const actionsMarkup = (
      <Fragment>
        <button className="alert radius bordered shadow button">Delete</button>
        <button className="secondary radius bordered shadow button"
          onClick={ () => history.push('/') }>Cancel</button>
      </Fragment>
    );
    return <Fragment>
    <DeleteModal
      title="Delete your Stream"
      content="Are you sure you want to delete this stream?"
      actionsMarkup={ actionsMarkup }
      handleDismiss={ () => history.push('/') }
    />
  </Fragment>;
  };
};

export default StreamDelete;
