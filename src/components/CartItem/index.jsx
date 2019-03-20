import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.scss';

class CartItem extends Component {

  render() {
    const { image, title, price, author } = this.props;
    return (
      <div className="iz-CartItem">
        <div className="iz-CartItem__image-container">
          <img src={image} alt={title} />
        </div>
        <div className="iz-CartItem__content">
          <p className="iz-CartItem__author">{author}</p>
          <p className="iz-CartItem__title">{title}</p>
          <p className="iz-CartItem__price">€{price}</p>
          {this.props.removeFromCart
            ? <Icon type="cross" onClick={(event) => { event.preventDefault(); this.props.removeFromCart(title); }} />
            : <Icon type="cross" onClick={(event) => { event.preventDefault(); this.props.removeFromFavourite(title); }} />
          }
        </div>
      </div>
    );
  }
}

export default CartItem;
