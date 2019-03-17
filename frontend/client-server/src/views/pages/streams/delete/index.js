import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BaseGrid from '../../../layouts/base-grid';
import DeleteModal from '../../../components/delete-modal';
import history from '../../../../history';
import { handleFetchStream, handleDeleteStream } from '../../../../store/actions'; 

const StreamDelete = class extends Component {
  componentDidMount(){
    document.addEventListener('keydown', this.handleEscapeKey, false);
    const { handleFetchStream, match } = this.props;
    handleFetchStream(match.params.id);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleEscapeKey, false);
  }

  handleEscapeKey = (event) => {
    if(event.keyCode === 27) history.push('/');
  }

  render() {
    const { stream, hasSignedInState, handleDeleteStream, match } = this.props;
    if (!(hasSignedInState && stream)) return null;
    return (
      <Fragment>
        <DeleteModal
          title="Delete your Stream"
          content="Are you sure you want to delete this stream?"
          actionsMarkup={ (
            <div className="button-group">
              <button className="alert radius bordered shadow button"
                onClick={ () => handleDeleteStream(match.params.id) }>Delete</button>
              <Link to="/" type="button" 
                className="secondary radius bordered shadow button">Cancel</Link>
            </div>
          ) }
          handleDismiss={ () => history.push('/') }
        />
        <BaseGrid>
          <BaseGrid.CellHeader>
            <div className="grid-x grid-margin-x">
              <div className="cell medium-6">
                <h3>{ stream.title }</h3>
              </div>
              <div className="cell medium-6">
                <div className="text-right">
                  <Link type="button" to="/" className="button radius bordered shadow secondary">
                    Go back to Homepage
                  </Link>
                </div>
              </div>
            </div> 
          </BaseGrid.CellHeader>
          <BaseGrid.CellBody>
            <div className="radius bordered shadow card">
              <div className="card-section">
                <p>{ stream.description }</p>
              </div>
            </div>
          </BaseGrid.CellBody>
        </BaseGrid>
      </Fragment>
    );
  };
};

StreamDelete.defaultProps = {
  stream: null,
  match: null,
  hasSignedInState: null,
  handleFetchStream: () => {},
  handleDeleteStream: () => {},
};

export default connect(
  ({ streams, auth: { hasSignedInState } = {}  }, { match }) => ({ 
    stream: streams[match.params.id], hasSignedInState,
  }),
  { handleFetchStream, handleDeleteStream },
)(StreamDelete);

