import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { handleFetchStream } from '../../../../store/actions';

const StreamEdit = class extends Component {
  componentDidMount() {
    const { handleFetchStream, match } = this.props;
    handleFetchStream(match.params.id);
  }
  
  render() {
    const { stream, hasSignedInState } = this.props;
    return (
      <Fragment>
        { (hasSignedInState && stream) ? (
          <div className="grid-x grid-margin-x grid-padding-y">
            <div className="cell medium-12">
              <h3>Edit Details: { stream.title }</h3>
            </div>
            <div className="cell medium-12 padding-top-0">
              <div className="radius bordered shadow card">
                <div className="card-section">
                  <p>{ stream.description }</p>
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
};

export default connect(
  ({ streams, auth: { hasSignedInState } = {}  }, { match }) => ({ 
    stream: streams[match.params.id], hasSignedInState,
  }),
  { handleFetchStream },
)(StreamEdit);
