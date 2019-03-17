import React, { Component } from 'react';

const CellHeader = () => null;
const CellBody = () => null;

const BaseGrid = class extends Component {
  static CellHeader = CellHeader;
  static CellBody = CellBody;

  render() {
    const { children } = this.props
    const cellHeader = children.find(child => child.type === CellHeader);
    const cellBody = children.find(child => child.type === CellBody);
    return (
      <div className="grid-x grid-margin-x grid-padding-y">
        <div className="cell medium-12">
          { cellHeader ? cellHeader.props.children : null }
        </div>
        <div className="cell medium-12 padding-top-0">
          { cellBody ? cellBody.props.children : null }
        </div>
      </div>
    );
  }
};

BaseGrid.defaultProps = {
  children: [],
};

export default BaseGrid;
