import React, { Component } from 'react';
import * as contentful from 'contentful';
import {
  OverviewListItem,
  Loader,
} from '../';

import './style.scss';

class OverviewList extends Component {
  state = {
    posts: [],
    loading: true,
  }

  client = contentful.createClient({
    space: process.env.REACT_APP_CONTENFULL_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  })

  async componentDidMount() {
    await this.fetchPosts().then(this.setPosts);
    this.setState({ loading: false });
  }

  fetchPosts = () => this.client.getEntries({
    content_type: 'book',
  })

  setPosts = (response) => {
    this.setState({
      posts: response.items,
    });
  }

  render() {
    console.log(this.state.loading);
    return (
      <div>
        {this.state.loading === true
          ? <Loader />
          : this.state.posts.map(({ fields }, i) => <OverviewListItem key={i} {...fields} />)
        }
      </div>
    );
  }
}

export default OverviewList;
