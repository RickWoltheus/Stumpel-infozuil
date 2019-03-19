import React, { Component } from 'react'
import { Icon } from 'antd';
import history from '../..';

class GoBackButton extends Component {
  render() {
    return (
      <div className={'iz-goBack'}>
        <Icon className="iz-goBack__icon" onClick={() => { history.goBack(); }} type="left" />
      </div>
    )
  }
}

export default GoBackButton
