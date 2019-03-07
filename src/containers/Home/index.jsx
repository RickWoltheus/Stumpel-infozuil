import React, { Component } from 'react';
import { AppContext } from './../App/index';
import { OverviewList } from '../../components';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <AppContext.Consumer>
        {({ temp, changeTemp }) => (

          <div>Home

            <button onClick={changeTemp}>count {temp} </button>
          </div>

        )}
      </AppContext.Consumer>
      <div><OverviewList /></div>
      </React.Fragment>
    );
  }
}

export default Home;
