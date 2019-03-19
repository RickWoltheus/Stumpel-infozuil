import React, { Component } from 'react'
import { Icon } from 'antd';
import './style.scss'



class SideBarButton extends Component {
  render() {
    return (
      <div className={'iz-SideBarButton'}>
        <Icon type={'align-left'} />
      </div>
    )
  }
}

export default SideBarButton
