import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseGrid from '../../../layouts/base-grid';
import { handleFetchStreams } from '../../../../store/actions';

const StreamList = class extends Component {
  componentDidMount() {
    const { handleFetchStreams } = this.props;
    handleFetchStreams();
  }
  
  render() {
    const { streams, currentUserId, hasSignedInState } = this.props;
    if (!streams.length) return null;
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft>
          <h3>All Streams</h3>
        </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight>
          { (hasSignedInState) ? <div className="text-right">
              <Link type="button" to="/streams/create" 
                className="button radius bordered shadow social google">
                <span className="google-text no-icon">Create New Stream</span>
              </Link>
            </div> : null }
        </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          { streams.map(function iterateStreams(item) {
              const { id, title, description, userId } = item;
              return (
                <div className="radius bordered shadow card" key={ id }>
                  <div className="card-section">
                    <h4>{ title }</h4>
                    <p>{ description }</p>
                    <div className="button-group">
                      <Link
                        type="button" to={ `/streams/${id}` } 
                        className="secondary radius bordered shadow button">View</Link>
                      { (hasSignedInState && currentUserId === userId) ? <Fragment>
                          <Link type="button" to={ `/streams/${id}/edit` } 
                            className="success radius bordered shadow button">Edit</Link>
                          <Link type="button" to={ `/streams/${id}/delete` } 
                            className="alert radius bordered shadow button">Delete</Link>
                        </Fragment> : null }
                    </div> 
                  </div>
                </div>
              );
            }).reverse() }
        </BaseGrid.CellMainContent>
      </BaseGrid>
    );
  }
};

StreamList.defaultProps = {
  streams: [],
  currentUserId: null,
  hasSignedInState: null,
  handleFetchStreams: () => {},
};

export default connect(
  ({ streams, auth: { userId: currentUserId, hasSignedInState } = {} }) => ({ 
    streams: Object.values(streams), currentUserId, hasSignedInState,
  }),
  { handleFetchStreams }
)(StreamList);
