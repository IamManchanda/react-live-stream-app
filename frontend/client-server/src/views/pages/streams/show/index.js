import React, { createRef, Component } from 'react';
import flv from 'flv.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseGrid from '../../../layouts/base-grid';
import { handleFetchStream } from '../../../../store/actions';

const StreamShow = class extends Component {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
  }

  componentDidMount() {
    const { handleFetchStream, match } = this.props;
    handleFetchStream(match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer = () => {
    const { stream, match } = this.props;
    if (this.player || !stream) return;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  
  render() {
    const { stream } = this.props;
    if (!stream) return null;
    return (
      <BaseGrid>
        <BaseGrid.CellHeaderLeft>
          <h3>View your Stream</h3>
        </BaseGrid.CellHeaderLeft>
        <BaseGrid.CellHeaderRight>
          <Link type="button" to="/" className="button radius bordered shadow secondary">
            Go back to Homepage
          </Link>
        </BaseGrid.CellHeaderRight>
        <BaseGrid.CellMainContent>
          <div className="radius bordered shadow card">
            <div className="card-section">
              <h4>{ stream.title }</h4>
              <p>{ stream.description }</p>
              <video 
                ref={ this.videoRef } 
                className="video-container radius bordered shadow"
                controls
              />
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
  handleFetchStream: () => {},
};

export default connect(
  ({ streams  }, { match }) => ({ 
    stream: streams[match.params.id],
  }),
  { handleFetchStream },
)(StreamShow);
