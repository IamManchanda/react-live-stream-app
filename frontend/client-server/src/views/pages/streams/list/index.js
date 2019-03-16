import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleFetchStreams } from '../../../../store/actions';

const StreamList = class extends Component {
  componentDidMount() {
    const { handleFetchStreams } = this.props;
    handleFetchStreams();
  }
  
  render() {
    const { streams, currentUserId, hasSignedInState } = this.props;
    return (
      <div className="grid-x grid-margin-x grid-padding-y">
        <div className="cell medium-6">
          <h3>All Streams</h3>
        </div>
        <div className="cell medium-6">
          { (hasSignedInState) ? <div className="text-right">
              <Link type="button" to="/streams/create" 
                className="button radius bordered shadow social google">
                <span className="google-text no-icon">Create New Stream</span>
              </Link>
            </div> : null }
        </div>
        <div className="cell medium-12 padding-top-0">
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
                          <button className="alert radius bordered shadow button">Delete</button>
                        </Fragment> : null }
                    </div> 
                  </div>
                </div>
              );
            }).reverse() }
        </div>
      </div>
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
