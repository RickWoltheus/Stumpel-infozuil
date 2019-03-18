import React, { Component } from 'react'

import './style.scss'

import { Row, Col, Spin, Empty, Carousel, Button, Card } from 'antd';
import HorizontalScrollList from './../../../components/HorizontalScrollList/index';
import Title from './../../../components/Typography/Title/index';


class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      searchData: null,
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.setNewData = this.setNewData.bind(this)
  }

  render() {
    const { posts, carousel } = this.props

    return (
      <div className="iz-home">

        <Carousel autoplay>
          {carousel && carousel.map((item, i) => {
            const src = item.fields.picture.fields.file.url
            return (<img key={i} style={{ width: '100%' }} src={`https:${src}`} alt="carousel" />)
          })}
        </Carousel>
        <Row type={'flex'} gutter={14} justify={'space-around'}>
          <Col span={11}>
            <Button type={'primary'} block>Categorieen</Button>
          </Col>
          <Col span={11}>
            <Button type={'primary'} block>Inloggen</Button>
          </Col>
        </Row>
        <Title moreLink={'bla'}>Top boeken</Title>

        <HorizontalScrollList>
          {posts.map(post => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          ))}
        </HorizontalScrollList>
        <Button type={'primary'} block>Bekijk alle aanbiedingen</Button>



        {/* <Input.Search
          className="iz-overviewList__search"
          placeholder="search..."
          value={this.state.searchData}
          onChange={this.handleChange}
        />
        <div className="iz-overviewList__list">{this.renderList()}</div> */}
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

    return <Empty />
  }
}

export default HomeView
