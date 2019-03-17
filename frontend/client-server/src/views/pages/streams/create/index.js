import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BaseGrid from '../../../layouts/base-grid';
import { handleCreateStream } from '../../../../store/actions'
import StreamForm from '../../../components/stream-form';

const StreamCreate = class extends Component {
  onStreamCreate = (formValues) => {
    const { handleCreateStream } = this.props;
    handleCreateStream(formValues);
  }

  render() {
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft>
        <h3>Create a New Stream</h3>
        </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight>
          <Link type="button" to="/" className="button radius bordered shadow secondary">
            Go back to Homepage
          </Link>
        </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          <div className="radius bordered shadow card">
            <div className="card-section">
              <StreamForm handleFormSubmit={ this.onStreamCreate } />
            </div>
          </div>
        </BaseGrid.CellMainContent>
      </BaseGrid>
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
