import React, { Component } from 'react';
import { connect } from 'react-redux';
import _pick from 'lodash/pick';
import { Link } from 'react-router-dom';

import BaseGrid from '../../../layouts/base-grid';
import { handleFetchStream, handleEditStream } from '../../../../store/actions';
import StreamForm from '../../../components/stream-form';

const StreamEdit = class extends Component {
  componentDidMount() {
    const { handleFetchStream, match } = this.props;
    handleFetchStream(match.params.id);
  }

  onStreamEdit = (formValues) => {
    const { handleEditStream, match } = this.props;
    handleEditStream(match.params.id, formValues);
  }
  
  render() {
    const { stream, hasSignedInState } = this.props;
    if (!(hasSignedInState && stream)) return null;
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft>
          <h3>Edit your Stream</h3>
        </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight>
          <Link type="button" to="/" className="button radius bordered shadow secondary">
            Go back to Homepage
          </Link>
        </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          <div className="radius bordered shadow card">
            <div className="card-section">
              <StreamForm 
                initialValues={ _pick(stream, 'title', 'description') }
                handleFormSubmit={ this.onStreamEdit } 
              />
            </div>
          </div>
        </BaseGrid.CellMainContent>
      </BaseGrid>
    );
  }
};

StreamEdit.defaultProps = {
  stream: null,
  match: null,
  hasSignedInState: null,
  handleFetchStream: () => {},
  handleEditStream: () => {},
};

export default connect(
  ({ streams, auth: { hasSignedInState } = {}  }, { match }) => ({ 
    stream: streams[match.params.id], hasSignedInState,
  }),
  { handleFetchStream, handleEditStream },
)(StreamEdit);
