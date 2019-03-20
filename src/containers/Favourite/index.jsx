import React, { Component } from 'react';
import { AppContext } from '../App';

import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import StumpelCard from '../../components/StumpelCard';
import Container from '../../components/Container';
import GoBackButton from './../../components/GoBackButton/index';

import './style.scss';
import { ChromeContext } from '../../implementations/Navigation/Chrome';
import CartItem from '../../components/CartItem';

class FavouriteView extends Component {

  componentDidMount() {
    const { configTopBar } = this.props;

    configTopBar({
      renderLeft: () => <GoBackButton />,
      renderRight: null,
      showLogo: false,
    });
  }

  render() {
    const { removeFromFavourite } = this.props;
    return (
      <Container className="iz-cart" small>
        <h3>Winkelmand</h3>
        <Row type="flex" gutter={14} justify="space-between" style={{ marginTop: 16, marginBottom: 30 }} >
          <Col span={12}>
            <Button size="large" type="primary" block>Verder winkelen</Button>
          </Col>
          <Col span={12}>
            <Link to="/login"><Button size="large" type="primary" block>Verder bestellen</Button></Link>
          </Col>
        </Row>
        { this.props.favourites
          ? Object.values(this.props.favourites).map((field, i) => (
            <Link key={field.id} to={`${field.id}/detail`}>
              <CartItem
                title={field.title}
                author={field.author[0].fields.title}
                image={field.bookCover.fields.file.url}
                price={field.price}
                removeFromFavourite={removeFromFavourite}
              />
            </Link>
          ))
          : <Loader />
        }
      </Container>
    );
  }
}

const Favourite = () => (
  <ChromeContext.Consumer>
    {({ configTopBar }) => (
      <AppContext.Consumer>
        {({ favourites, removeFromFavourite }) => (
          <FavouriteView
            favourites={favourites}
            configTopBar={configTopBar}
            removeFromFavourite={removeFromFavourite}
          />
        )}
      </AppContext.Consumer>
    )}
  </ChromeContext.Consumer>
);

export default Favourite;
