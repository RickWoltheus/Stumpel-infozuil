import React, { Component } from 'react';
import './style.scss';
import NavItem from '../NavItem';
import { iconType } from './../../../components/Icon/Icon';
import { withRouter } from 'react-router-dom';

const config = [
  { name: 'home', link: '/', icon: iconType.home },
  { name: 'home', link: '/other', icon: 'search' },
  { name: 'home', link: '/other2', icon: 'shopping-cart' },
  { name: 'home', link: '/other3', icon: 'heart' },
  { name: 'home', link: '/other3', icon: 'user' },
];

const Chrome = withRouter((props) => <NavigationComponent {...props} />);

const defaultState = {
  renderLeft: undefined,
  renderRight: undefined,
  showLogo: false,

};

export const ChromeContext = React.createContext(defaultState);

class NavigationComponent extends Component {
  state = { drawerVisible: false, topBarConfig: defaultState }

  handleDrawerToggle = () => {
    const { drawerVisible } = this.state;

    this.setState({
      drawerVisible: !drawerVisible,
    });
  }

  handleTopBarConfig = (config) => {
    this.setState({
      topBarConfig: config
    })
  }

  render() {
    const { children } = this.props;
    const { renderLeft, renderRight, showLogo } = this.state.topBarConfig

    return (
      <ChromeContext.Provider value={{
        configTopBar: (config) => this.handleTopBarConfig(config)
      }}>
        <div className="iz-navigation">
          <div className={'iz-navigation__topBar'}>
            <div>
              {renderLeft && renderLeft()}
            </div>
            {showLogo && <img className={'iz-navigation__logo'} src={require('./../../../assets/images/logostumpel.png')} />}
            <div>
              {renderRight && renderRight()}
            </div>

          </div>

          <div className="iz-navigation__content">{children}</div>

          <div className="iz-navigation__bottom">{this.renderNavItems()}</div>
        </div>
      </ChromeContext.Provider>

    );
  }

  renderNavItems() {
    const currentPath = this.props.location.pathname;

    return config.map((item, index, array) => (
      <NavItem
        key={`${index}-${array.length}`}
        linkTo={item.link}
        iconType={item.icon}
        active={currentPath === item.link}
      />
    ));
  }
}

export default Chrome;
