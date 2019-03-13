import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Login from '../Login';

import './style.scss';
import { Chrome } from '../../implementations';

const defaultAppState = {
  temp: 1,
};

export const AppContext = React.createContext(defaultAppState);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultAppState,
    };
  }

  render() {

    const isLoggedIn = localStorage.getItem('isAuth');
    console.log(isLoggedIn);

    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Chrome>
            <main>
              <Switch>
                { isLoggedIn === 'true'
                  ? <Route strict path="/" component={Home} />
                  : <Route strict path="/" component={Login} />
                }

                <Route component={NotFound} />
              </Switch>
            </main>
          </Chrome>
        </div>
      </AppContext.Provider>
    );
  }

    handleChangeTemp = () => {
      this.setState({ temp: this.state.temp + 1 });
    }
}

export default App;
