import React, { Component } from 'react';
import { Icon } from 'antd';
import { AppContext } from '../../containers/App';
import './style.scss';

class StumpelCard extends Component {
  state = {
    isFavourite: false,
  }

  render() {
    const { image, title, price, book } = this.props;
    return (
      <AppContext.Consumer>
        {({ addToFavourites, removeFromFavourites }) => (
          <div className="iz-StumpelCard">
            <div className="iz-StumpelCard__image-container">
              <img src={image} />
            </div>
            <div>
              <p className="iz-StumpelCard__title">{title}</p>

            </div>
            <div className="iz-StumpelCard__bottom-bar">
              <p className="iz-StumpelCard__price">€{price}</p>
            </div>
            {this.state.isFavourite === false
              ? <Icon className="iz-StumpelCard__heart" type="heart" onClick={(event) => { event.preventDefault(); addToFavourites(title, book); this.setState({ isFavourite: true }); }} />
              : <Icon theme="filled" className="iz-StumpelCard__heart" type="heart" onClick={(event) => { event.preventDefault(); removeFromFavourites(title); this.setState({ isFavourite: false }); }} />
            }
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default StumpelCard;
