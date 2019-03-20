import React, { Component } from 'react';
import { AppContext } from './../App/index';
import OverviewList from './../../implementations/Overview/OverviewList/index';
import { ChromeContext } from './../../implementations/Navigation/Chrome/index';

const Overview = () => (
  <ChromeContext.Consumer>
    {({ configTopBar }) => (
      <AppContext.Consumer>
        {() => (
          <div>
            <OverviewList />
          </div>
        )}
      </AppContext.Consumer>
    )}
  </ChromeContext.Consumer>
);

export default Overview;
