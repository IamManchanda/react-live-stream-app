import React, { Component } from 'react';

const CellHeaderLeft = () => null;
const CellHeaderRight = () => null;
const CellMainContent = () => null;

const BaseGrid = class extends Component {
  static CellHeaderLeft = CellHeaderLeft;
  static CellHeaderRight = CellHeaderRight;
  static CellMainContent = CellMainContent;

  render() {
    const { children } = this.props
    const cellHeaderLeft = children.find(child => child.type === CellHeaderLeft);
    const cellHeaderRight = children.find(child => child.type === CellHeaderRight);
    const cellMainContent = children.find(child => child.type === CellMainContent);
    return (
      <div className="grid-x grid-margin-x grid-padding-y">
        <div className="cell medium-6">
          <div className="text-left">
            { cellHeaderLeft ? cellHeaderLeft.props.children : null }
          </div>
        </div>
        <div className="cell medium-6">
          <div className="text-right">
            { cellHeaderRight ? cellHeaderRight.props.children : null }
          </div>
        </div>
        <div className="cell medium-12 padding-top-0">
          { cellMainContent ? cellMainContent.props.children : null }
        </div>
      </div>
    );
  }
};

BaseGrid.defaultProps = {
  children: [],
};

export default BaseGrid;
