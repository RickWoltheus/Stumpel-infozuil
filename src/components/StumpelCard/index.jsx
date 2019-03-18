import React, { Component } from 'react'
import './style.scss'

class StumpelCard extends Component {
  render() {
    const { image, title, price } = this.props
    return (
      <div className={'iz-StumpelCard'}>
        <div className={'iz-StumpelCard__image-container'}>
          <img src={image} />
        </div>
        <div>
          <p className={'iz-StumpelCard__title'}>{title}</p>

        </div>
        <div className={'iz-StumpelCard__bottom-bar'}>
          <p className={'iz-StumpelCard__price'}>€{price}</p>
        </div>
      </div>
    )
  }
}

export default StumpelCard
