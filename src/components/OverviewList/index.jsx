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
    space: '7uxruoy0v5qq',
    accessToken: '9d308ff7fd2ffbe956d1d5780b82a6625ee963a6617236d9fa36fb54a894ed65',
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
