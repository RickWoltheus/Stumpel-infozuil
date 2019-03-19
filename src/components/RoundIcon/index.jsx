import React, { Component } from 'react'
import { Icon } from 'antd';
import './style.scss'



class RoundIcon extends Component {
  render() {
    const { type, color } = this.props
    return (
      <div style={{ backgroundColor: color }} className={'iz-RoundIcon'}>
        <Icon type={type} />
      </div>
    )
  }
}

export default RoundIcon
