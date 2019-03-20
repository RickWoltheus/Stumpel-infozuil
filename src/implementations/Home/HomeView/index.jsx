import React, { Component } from 'react';

import './style.scss';

import { Row, Col, Spin, Empty, Carousel, Button, Card } from 'antd';
import HorizontalScrollList from './../../../components/HorizontalScrollList/index';
import Title from './../../../components/Typography/Title/index';
import { Link } from 'react-router-dom';
import StumpelCard from './../../../components/StumpelCard/index';


class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchData: null,
    };
    // this.handleChange = this.handleChange.bind(this)
    // this.setNewData = this.setNewData.bind(this)
  }

  render() {
    const { posts, carousel } = this.props;

    return (
      <div className="iz-home">

        <Carousel loading={!carousel.length} autoplay>
          {carousel && carousel.map((item, i) => {
            const src = item.fields.picture.fields.file.url;
            return (<img key={i} style={{ width: '100%' }} src={`https:${src}`} alt="carousel" />);
          })}
        </Carousel>
        <div className="iz-home__content-container">
          <Row type="flex" gutter={14} justify="space-between" style={{ marginTop: 16 }} >
            <Col span={12}>
              <Button size="large" type="primary" block>Categorieen</Button>
            </Col>
            <Col span={12}>
              { localStorage.getItem('isAuth') === 'true'
                ? <Link to="/profile"><Button size="large" type="primary" block>Mijn profiel</Button></Link>
                : <Link to="/login"><Button size="large" type="primary" block>Inloggen</Button></Link>
              }
            </Col>
          </Row>

          <div style={{ marginTop: 16 }}>
            <Title moreLink="bla">Top boeken</Title>
          </div>

          <div style={{ marginTop: 16 }}>
            <HorizontalScrollList>
              {posts.map((post) => (
                <div style={{ paddingLeft: 8, marginRight: 8 }}>
                  <Link key={post.sys.id} to={`${post.sys.id}/detail`}>
                    <StumpelCard
                      book={post.fields}
                      title={post.fields.title}
                      image={post.fields.bookCover.fields.file.url}
                      price={post.fields.price}
                    />
                  </Link>

                </div>
              ))}
            </HorizontalScrollList>
          </div>
          <div style={{ marginTop: 16 }}>
            <Button type="primary" block>Bekijk alle aanbiedingen</Button>
          </div>
        </div>


        {/* <Input.Search
          className="iz-overviewList__search"
          placeholder="search..."
          value={this.state.searchData}
          onChange={this.handleChange}
        />
        <div className="iz-overviewList__list">{this.renderList()}</div> */}
      </div >
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

    return <Empty />;
  }
}

export default HomeView;
