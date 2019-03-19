import React, { Component } from 'react';
import * as contentful from 'contentful';

import './style.scss';
import { Spin, Input, Col, Row } from 'antd';
import { withRouter } from 'react-router-dom';
import OverviewListItem from '../OverviewListItem';
import { getGenre } from '../../../service/ProductService';


const OverviewList = withRouter((props) => <OverviewListComponent {...props} />);


class OverviewListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      searchData: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.setNewData = this.setNewData.bind(this);
  }

    client = contentful.createClient({
      space: process.env.REACT_APP_CONTENFULL_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    })

    async componentDidMount() {
      await getGenre(this.props.match.params.cat).then(this.setPosts);
      this.setState({ loading: false });
    }

    async handleChange(event) {
      await this.setState({
        searchData: event.target.value,
      });
      this.setNewData();
    }

    async setNewData() {
      await this.fetchPosts().then(this.setPosts);
    }

    setPosts = (response) => {
      this.setState({
        posts: response.items,
      });
    }

    fetchPosts = () =>
      this.client.getEntries({
        'fields.title': this.state.searchData,
        'fields.genre': this.props.match.params.cat,
        content_type: 'book',
      })

    render() {
      return (
        <div className="iz-overviewList">
          <Input.Search
            className="iz-overviewList__search"
            placeholder="search..."
            value={this.state.searchData}
            onChange={this.handleChange}
          />
          <div className="iz-overviewList__list">{this.renderList()}</div>
        </div>
      );
    }

    renderList() {
      const { posts, loading } = this.state;

      if (loading) {
        return (
          <Row type="flex" align="middle">
            <Col>
              <Spin />
            </Col>
          </Row>
        );
      }

      if (!posts.length) {
        return (
          <div className="iz-overviewList--loading">
            <Spin size="large" />
          </div>
        );
      }

      return posts.map(({ fields, sys }, i) => (
        <OverviewListItem key={i} id={sys.id} {...fields} />
      ));
    }
}

export default OverviewList;
