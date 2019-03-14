import React, { Component } from 'react';
import { AppContext } from './../App/index';
import HomeView from '../../implementations/Home/HomeView';
import { getAllProducts, getAllCarouselItems } from '../../service/ProductService';

class HomeComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      posts: [],
      carousel: []
    }
  }

  async componentDidMount() {
    const { onChangeValues } = this.props

    Promise.all([
      await getAllProducts(),
      await getAllCarouselItems()
    ]).then((values) => this.setValues(values, onChangeValues));

    this.setState({ loading: false })
  }

  setValues = (values, onChangeValues) => {
    const value = {
      posts: values[0].items,
      carousel: values[1].items
    }

    onChangeValues(value)

    this.setState(value)
  }

  render() {
    const { contextPosts } = this.props
    const { posts, carousel } = this.state

    return (
      <HomeView
        posts={posts ? posts : contextPosts}
        carousel={carousel}
      />
    )
  }
}

const Home = () => (
  <AppContext.Consumer>
    {({ posts, carousel, onChangeValues }) => <HomeComponent posts={posts} carousel={carousel} onChangeValues={onChangeValues} />}
  </AppContext.Consumer>
)

export default Home;
