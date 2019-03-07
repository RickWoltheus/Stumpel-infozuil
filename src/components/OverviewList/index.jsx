import React, { Component } from 'react';
import * as contentful from 'contentful';
import {
  OverviewListItem
} from '../'

class OverviewList extends Component {
  state = {
    posts: [],
  }

  client = contentful.createClient({
    space: process.env.REACT_APP_CONTENFULL_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
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
    return (
      <div>
        { this.state.posts.map(({ fields }, i) => <OverviewListItem key={i} {...fields} />
        )}
      </div>
    );
  }
}

export default OverviewList;
