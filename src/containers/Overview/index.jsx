import React, { Component } from 'react';
import { AppContext } from './../App/index';
import OverviewList from './../../implementations/Overview/OverviewList/index';
import GoBackButton from '../../components/GoBackButton';
import RoundIcon from './../../components/RoundIcon/index';
import { ChromeContext } from './../../implementations/Navigation/Chrome/index';

class OverviewView extends Component {

  componentDidMount() {
    const { configTopBar } = this.props
    configTopBar({
      renderLeft: () => <GoBackButton />,
      renderRight: () => <RoundIcon color={'#1A3D73'} type={'search'} />,
      showLogo: false,
    })
  }

  render() {
    return (
      <OverviewList />
    );
  }
}

const Overview = () => (
  <ChromeContext.Consumer>
    {({ configTopBar }) => (
      <OverviewView
        configTopBar={configTopBar}
      />
    )}
  </ChromeContext.Consumer>
)

export default Overview;
