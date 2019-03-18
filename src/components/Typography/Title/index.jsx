import React, { Component } from 'react'
import { Button } from 'antd';
import './style.scss'
import { Link } from 'react-router-dom';

class Title extends Component {
  render() {
    const { children, moreLink } = this.props
    return (
      <div className={'iz-Title'}>
        {children}
        {moreLink && (
          <Link to={moreLink} >
            <Button type={'round'}>Meer</Button>
          </Link>
        )}
      </div>
    )
  }
}

export default Title
