import React, { Component } from 'react';
import './style.scss';

import { Rate, Col, Row, Button, Empty } from 'antd';
import AvailabilityLabel from './../../../components/AvailabilityLabel/index';
import { generateBTWPrice } from './../../../utils/price';
import { AppContext } from '../../../containers/App';

class DetailPage extends Component {
  render() {
    const { post } = this.props;
    return (
      <AppContext.Consumer>
        {({ addToCart }) => {
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
                <Button type="primary" icon="cart" size="large" block onClick={() => { addToCart(post.title, post); }} >
                    In de winkelwagen
                </Button>

                <div className="iz-detail__description-wrapper">
                  <h2>Beschrijving</h2>
                  <p>{post.description}</p>
                </div>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default DetailPage;
