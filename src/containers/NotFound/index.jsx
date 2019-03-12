import React, { Component } from 'react';
import { Empty } from 'antd';

import './style.scss';

class NotFound extends Component {
  render() {
    return <Empty className="iz-not-found" description="Page not found..." />;
  }
}

export default NotFound;
