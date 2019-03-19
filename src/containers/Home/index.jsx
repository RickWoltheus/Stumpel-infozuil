import React, { Component } from 'react';
import { AppContext } from './../App/index';
import HomeView from '../../implementations/Home/HomeView';
import { getAllProducts, getAllCarouselItems } from '../../service/ProductService';
import { ChromeContext } from './../../implementations/Navigation/Chrome/index';
import history from './../../index';
import RoundIcon from './../../components/RoundIcon/index';
import SideBarButton from './../../components/SideBarButton/index';

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
    const { onChangeValues, configTopBar } = this.props

    configTopBar({
      renderLeft: () => <SideBarButton />,
      renderRight: () => <RoundIcon color={'#1A3D73'} type={'search'} />,
      showLogo: true,
    })

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
  <ChromeContext.Consumer>
    {({ configTopBar }) => (
      <AppContext.Consumer>
        {({ posts, carousel, onChangeValues }) => (
          <HomeComponent
            posts={posts}
            carousel={carousel}
            onChangeValues={onChangeValues}
            configTopBar={configTopBar}
          />
        )}
      </AppContext.Consumer>
    )}
  </ChromeContext.Consumer>
)

export default Home;
