import React, { Component } from 'react';
import { Drawer, Icon } from 'antd';
import './style.scss';
import NavItem from '../NavItem';
import { iconType } from './../../../components/Icon/Icon';
import { withRouter } from 'react-router-dom';

const config = [
  { name: 'home', link: '/', icon: iconType.home },
  { name: 'home', link: '/other', icon: 'environment' },
  { name: 'home', link: '/other2', icon: 'phone' },
  { name: 'home', link: '/other3', icon: 'eye' },
];

const Chrome = withRouter((props) => <NavigationComponent {...props} />);

class NavigationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerVisible: false,
    };
  }

  render() {
    const { children } = this.props;
    const { drawerVisible } = this.state;

    return (
      <div className="iz-navigation">

        <div className="iz-navigation__content">{children}</div>

        <div className="iz-navigation__bottom">{this.renderNavItems()}</div>
      </div>
    );
  }

  renderNavItems() {
    const currentPath = this.props.location.pathname;

    return config.map((item, index, array) => (
      <NavItem
        key={`${index}-${array.length}`}
        label={item.name}
        linkTo={item.link}
        iconType={item.icon}
        active={currentPath === item.link}
      />
    ));
  }

    handleDrawerToggle = () => {
      const { drawerVisible } = this.state;
      this.setState({
        drawerVisible: !drawerVisible,
      });
    }
}

export default Chrome;
