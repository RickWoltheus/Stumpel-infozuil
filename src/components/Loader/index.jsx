import React, { Component } from 'react';

import './style.scss';

class Loader extends Component {
  render() {
    return (
      <div>
        <img className="iz-loader" src="https://loading.io/spinners/dual-ring/lg.dual-ring-loader.gif" alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
