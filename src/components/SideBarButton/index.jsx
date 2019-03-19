import React, { Component } from 'react'
import { Icon, Drawer, Collapse } from 'antd';
import './style.scss'



class SideBarButton extends Component {
  state = { visible: false, placement: 'left' };
  render() {
    return (
      <div className={'iz-SideBarButton'}>
        <Icon onClick={() => this.handleToggle()} type={'align-left'} />
        <Drawer
          placement={this.state.placement}
          closable={false}
          onClose={this.handleToggle}
          visible={this.state.visible}
          destroyOnClose={true}
        >
          <img style={{ height: 44 }} src={require('./../../assets/images/logostumpel.jpg')} />
          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Collapse.Panel header="Genres" key="1">
              orkior
            </Collapse.Panel>
            <Collapse.Panel header="Kantoor artikelen" key="2">
              orkior
            </Collapse.Panel>
            <Collapse.Panel header="School artikelen" key="3">
              orkior
            </Collapse.Panel>
            <Collapse.Panel header="Hobby en vrije tijd" key="3">
              orkior
            </Collapse.Panel>
          </Collapse>
        </Drawer>
      </div>
    )
  }

  handleToggle = () => {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }
}

export default SideBarButton
