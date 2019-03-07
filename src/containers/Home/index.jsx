import React, { Component } from 'react';
import { AppContext } from './../App/index';

class Home extends Component {
  render() {
    return (

      <AppContext.Consumer>
        {({ temp, changeTemp }) => (

          <div>Home

            <button onClick={changeTemp}>count {temp} </button>
          </div>

        )}
      </AppContext.Consumer>

    );
  }
}

export default Home;
