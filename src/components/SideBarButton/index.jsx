import React, { Component } from 'react'
import { Icon, Drawer, Collapse } from 'antd';
import './style.scss'
import { Link } from 'react-router-dom';
import { getAllGenres } from '../../service/ProductService';



class SideBarButton extends Component {
  state = { visible: false, placement: 'left' };
  render() {
    const { children } = this.props

    return (
      <div className={'iz-SideBarButton'}>
        <div onClick={() => this.handleToggle()}>
          {children}
        </div>
        <Drawer
          placement={this.state.placement}
          closable={false}
          onClose={this.handleToggle}
          visible={this.state.visible}
          destroyOnClose={true}
        >
          <img style={{ height: 44 }} src={require('./../../assets/images/logostumpel.png')} />
          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Collapse.Panel header="Genres" key="1">
              {getAllGenres().map(item => (
                <Link key={item} to={`/categories/${item}/overview`}>
                  <p style={{ paddingTop: 12 }}>{this.stripTitle(item)}</p>
                </Link>
              ))}
            </Collapse.Panel>
            <Collapse.Panel header="Kantoor artikelen" key="2">
              Not available
            </Collapse.Panel>
            <Collapse.Panel header="School artikelen" key="3">
              Not available
            </Collapse.Panel>
            <Collapse.Panel header="Hobby en vrije tijd" key="3">
              Not available
            </Collapse.Panel>
          </Collapse>
        </Drawer>
      </div>
    )
  }

  stripTitle(text) {
    const newText = text.replace(/\_/g, ' ')
    console.log(newText)
    return newText.charAt(0).toUpperCase() + newText.slice(1);
  }

  handleToggle = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }
}

export default SideBarButton
