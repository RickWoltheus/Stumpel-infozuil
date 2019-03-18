import React, { Component } from 'react'
import { Button } from 'antd';
import './style.scss'

class Title extends Component {
  render() {
    const { children, moreLink } = this.props
    return (
      <div className={'iz-Title'}>
        {children}
        {moreLink && (
          <Button type={'round'}>Meer</Button>
        )}
      </div>
    )
  }
}

export default Title
