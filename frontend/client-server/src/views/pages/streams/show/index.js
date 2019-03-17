import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseGrid from '../../../layouts/base-grid';
import { handleFetchStream } from '../../../../store/actions';

const StreamShow = class extends Component {
  componentDidMount() {
    const { handleFetchStream, match } = this.props;
    handleFetchStream(match.params.id);
  }
  
  render() {
    const { stream, hasSignedInState } = this.props;
    if (!(hasSignedInState && stream)) return null;
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft>
          <h3>{ stream.title }</h3>
        </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight>
          <Link type="button" to="/" className="button radius bordered shadow secondary">
            Go back to Homepage
          </Link>
        </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          <div className="radius bordered shadow card">
            <div className="card-section">
              <p>{ stream.description }</p>
            </div>
          </div>
        </BaseGrid.CellMainContent>
      </BaseGrid>
    );
  }
};

StreamShow.defaultProps = {
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
)(StreamShow);
