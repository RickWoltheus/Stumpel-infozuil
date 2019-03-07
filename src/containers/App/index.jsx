import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';

import './style.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route strict exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
