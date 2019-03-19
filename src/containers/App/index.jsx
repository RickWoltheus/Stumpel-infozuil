import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Login from '../Login';
import Detail from '../Detail';

import { Chrome } from '../../implementations';
import Overview from '../Overview';

const defaultAppState = {
  posts: [],
  carousel: [],
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
      <AppContext.Provider value={{
        ...this.state,
        onChangeValues: this.handleChangeValues,
      }}>
        <div className="App">
          <Chrome>
            <main>
              <Switch>
                <Route exact strict path="/" component={Home} />
                <Route exact strict path="/login" component={Login} />
                <Route path="/categories/:cat/overview" component={Overview} />
                <Route path="/categories/:cat/:id" component={Detail} />
                <Route path="/:id/detail" component={Detail} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </Chrome>
        </div>
      </AppContext.Provider>
    );
  }

  handleChangeValues = (values) => {
    this.setState(values);
  }
}

export default App;
