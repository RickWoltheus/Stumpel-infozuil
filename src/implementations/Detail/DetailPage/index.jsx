import React, { Component } from 'react';
import './style.scss';

import { Rate, Col, Row, Button, Spin, Empty } from 'antd';
import AvailabilityLabel from './../../../components/AvailabilityLabel/index';
import { withRouter } from 'react-router-dom';
import { getOneProduct } from '../../../service/ProductService';
import { generateBTWPrice } from './../../../utils/price';

const DetailPage = withRouter((props) => <DetailPageComponent {...props} />);

class DetailPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerVisible: false,
      loading: true,
      post: null,
    };
  }

  async componentDidMount() {
    await getOneProduct(this.props.match.params.id).then(this.setPosts);
    this.setState({ loading: false });
  }

  setPosts = (response) => {
    this.setState({
      post: response.items[0].fields,
    });
  }

  render() {
    const { loading, post } = this.state;

    if (loading) {
      return (
        <Row type="flex" align="middle">
          <Col>
            <Spin />
          </Col>
        </Row>
      );
    }

    if (!post) {
      return (
        <Row type="flex" align="middle">
          <Col>
            <Empty />
          </Col>
        </Row>
      );
    }

    return (
      <div className="iz-detail">
        <div className="iz-detail__showcase">
          <img
            className="iz-detail__image"
            src={post.bookCover.fields.file.url}
            alt="detail"
          />
        </div>

        <div className="iz-detail__information">
          <h1 className="iz-detail__title">{post.title}</h1>
          <div className="iz-detail__meta">
            {post.author[0].fields.title} | {post.bindingMethod} | {post.isbn}
          </div>
          <Row type="flex" className="iz-detail__rating">
            <Rate />
            <span>11 beoordelingen</span>
          </Row>
          <div>
            <AvailabilityLabel available={post.available} />
          </div>
          <Row type="flex">
            <Col span={12}>
              <div className="iz-detail__price">
                <p>€ {post.price}</p>
                <small className="iz-detail__btwPrice">
                  € {generateBTWPrice(post.price)} (excl. btw)
                  </small>
              </div>
            </Col>
          </Row>
          <Button type="primary" icon="cart" size="large" block>
            In de winkelwagen
            </Button>

          <div className="iz-detail__description-wrapper">
            <h2>Beschrijving</h2>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
