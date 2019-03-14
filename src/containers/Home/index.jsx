import React, { Component } from 'react';
import { AppContext } from './../App/index';
import HomeView from '../../implementations/Home/HomeView';

class Home extends Component {
  async componentDidMount() {
    await getOneProduct(this.props.match.params.id).then(this.setPosts)
    this.setState({ loading: false })
}

setPosts = response => {
    this.setState({
        post: response.items[0].fields,
    })
}
  render() {
    return (
      <React.Fragment>
        <AppContext.Consumer>{({ temp, changeTemp }) => Home}</AppContext.Consumer>
        <div>
          <HomeView />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
