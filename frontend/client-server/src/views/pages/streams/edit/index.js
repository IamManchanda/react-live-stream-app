import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import _pick from 'lodash/pick';

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
    return (
      <Fragment>
        { (hasSignedInState && stream) ? (
          <div className="grid-x grid-margin-x grid-padding-y">
            <div className="cell medium-12">
              <h3>Edit Your Stream</h3>
            </div>
            <div className="cell medium-12 padding-top-0">
              <div className="radius bordered shadow card">
                <div className="card-section">
                  <StreamForm 
                    initialValues={ _pick(stream, 'title', 'description') }
                    handleFormSubmit={ this.onStreamEdit } 
                  />
                </div>
              </div>
            </div>
          </div>
          ) : null }
      </Fragment>
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
