import React, { Component } from 'react'

import './style.scss'
import { Spin, Input, Col, Row } from 'antd'

class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      searchData: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.setNewData = this.setNewData.bind(this)
  }

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
    )
  }

  renderList() {
    const { posts, loading } = this.state

    if (loading) {
      return (
        <Row type="flex" align="middle">
          <Col>
            <Spin />
          </Col>
        </Row>
      )
    }

    if (!posts.length) {
      return (
        <div className="iz-overviewList--loading">
          <Spin size="large" />
        </div>
      )
    }

    console.log(posts)

    return <Empty />
  }
}

export default HomeView
