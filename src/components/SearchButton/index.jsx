import React, { Component } from 'react'
import './style.scss'
import RoundIcon from './../RoundIcon/index';
import { Drawer, Input } from 'antd';
import SearchView from '../../implementations/Search';

class SearchButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  render() {
    const { active } = this.state

    return (
      <div className={'iz-SearchButton'}>
        <div style={{ width: 40, height: 40, backgroundColor: 'green' }} onClick={this.handleToggle}>
          <RoundIcon color={'#1A3D73'} type={'search'} />
        </div>

        <Drawer
          title="Basic Drawer"
          placement={'bottom'}
          height={'100%'}
          closable={true}
          onClose={this.handleToggle}
          visible={active}
        >
          <SearchView />
        </Drawer>
      </div>
    )
  }

  handleToggle = () => {
    const { active } = this.state
    this.setState({ active: !active })
  }
}

export default SearchButton
