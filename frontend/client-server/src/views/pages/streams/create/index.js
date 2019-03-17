import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleCreateStream } from '../../../../store/actions'
import StreamForm from '../../../components/stream-form';

const StreamCreate = class extends Component {
  onStreamCreation = (formValues) => {
    const { handleCreateStream } = this.props;
    handleCreateStream(formValues);
  }

  render() {
    return (
      <div className="grid-x grid-margin-x grid-padding-y">
        <div className="cell medium-12">
          <h3>Create a New Stream</h3>
        </div>
        <div className="cell medium-12 padding-top-0">
          <div className="radius bordered shadow card">
            <div className="card-section">
              <StreamForm handleFormSubmit={ this.onStreamCreation } />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

StreamCreate.defaultProps = {
  handleCreateStream: () => {},
};

export default connect(
  null,
  { handleCreateStream }
)(StreamCreate);
