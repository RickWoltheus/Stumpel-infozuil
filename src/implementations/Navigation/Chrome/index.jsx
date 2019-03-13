import React, { Component } from 'react';
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
  state = { drawerVisible: false }

  handleDrawerToggle = () => {
    const { drawerVisible } = this.state;
    this.setState({
      drawerVisible: !drawerVisible,
    });
  }

  render() {
    const { children } = this.props;
    const { drawerVisible } = this.state;
    const isLoggedIn = localStorage.getItem('isAuth');

    if (isLoggedIn === true) {
      return (
        <div className="iz-navigation">

          <div className="iz-navigation__content">{children}</div>

          <div className="iz-navigation__bottom">{this.renderNavItems()}</div>
        </div>
      );
    } else {
      return <div className="iz-navigation__content">{children}</div>;
    }
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
}

export default Chrome;
