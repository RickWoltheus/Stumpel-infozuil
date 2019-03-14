import React, { Component } from 'react';
import { AppContext } from './../App/index';
import HomeView from '../../implementations/Home/HomeView';
import OverviewList from './../../implementations/Overview/OverviewList/index';

class Overview extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContext.Consumer>{({ temp, changeTemp }) => Overview}</AppContext.Consumer>
        <div>
          <OverviewList />
        </div>
      </React.Fragment>
    );
  }
}

export default Overview;
