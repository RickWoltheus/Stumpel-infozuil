import React, { Component } from 'react';
import './style.scss';

class HorizontalScrollList extends Component {
  render() {
    return (
      <div className="iz-horizontalScrollList">
        {this.props.children}
      </div>
    );
  }
}

export default HorizontalScrollList;
