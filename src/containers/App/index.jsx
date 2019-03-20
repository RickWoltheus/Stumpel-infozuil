import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Login from '../Login';
import Detail from '../Detail';
import Cart from '../Cart';
import Favourite from '../Favourite';

import { Chrome } from '../../implementations';
import Overview from '../Overview';

const defaultAppState = {
  posts: [],
  carousel: [],
  shoppingCart: [],
  favourites: [],
};

export const AppContext = React.createContext(defaultAppState);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultAppState,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('cart')) {
      this.restoreStore(JSON.parse(localStorage.getItem('cart')), JSON.parse(localStorage.getItem('favourites')));
    }
  }

  render() {

    const isLoggedIn = localStorage.getItem('isAuth');

    return (
      <AppContext.Provider value={{
        ...this.state,
        onChangeValues: this.handleChangeValues,
        addToCart: this.handleCartChange,
        removeFromCart: this.removeCartItem,
        addToFavourites: this.handleFavouriteChange,
        removeFromFavourite: this.removeFavouriteItem,
      }}>
        <div className="App">
          <Chrome>
            <main>
              <Switch>
                <Route exact strict path="/" component={Home} />
                <Route exact strict path="/login" component={Login} />
                <Route exact path="/categories/" component={Overview} />
                <Route path="/categories/:cat/overview" component={Overview} />
                <Route path="/categories/:cat/:id" component={Detail} />
                <Route path="/:id/detail" component={Detail} />
                <Route path="/cart" component={Cart} />
                <Route path="/favourites" component={Favourite} />
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

  handleCartChange = (key, book) => {
    this.setState((prevState) => ({
      shoppingCart: {
        ...prevState.shoppingCart,
        [key]: book,
      },
    }), () => {
      localStorage.setItem('cart', JSON.stringify(this.state.shoppingCart));
    });
  }

  removeCartItem = (key) => {
    const { shoppingCart } = this.state;

    delete shoppingCart[key];

    this.setState(({
      shoppingCart,
    }), () => {
      localStorage.setItem('cart', JSON.stringify(this.state.shoppingCart));
    });
  }

  handleFavouriteChange = (key, book) => {
    this.setState((prevState) => ({
      favourites: {
        ...prevState.favourites,
        [key]: book,
      },
    }), () => {
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    });
  }

  removeFavouriteItem = (key) => {
    const { favourites } = this.state;

    delete favourites[key];

    this.setState(({
      favourites,
    }), () => {
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    });
  }

  restoreStore = (cart, favourites) => {
    this.setState(() => ({
      favourites,
      shoppingCart: cart,
    }), () => {
      localStorage.setItem('cart', JSON.stringify(this.state.shoppingCart));
    });
  }

}

export default App;
