import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Login from '../Login';
import Detail from '../Detail';

import { Chrome } from '../../implementations';
import Overview from '../Overview';

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


    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Chrome>
            <main>
              <Switch>
                {isLoggedIn === 'true'
                  ? <Route exact strict path="/" component={Home} />
                  : <Route strict path="/" component={Login} />
                }
                <Route path="/:cat/overview" component={Overview} />
                <Route path="/:id/detail" component={Detail} />
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
