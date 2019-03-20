import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import StumpelCard from './../../../components/StumpelCard/index';

class OverviewListItem extends Component {
  render() {
    const { title, bookCover, id, price, book } = this.props;
    return (
      <div className="iz-overview-list-item">
        <Link key={id} to={`${id}/detail`}>
          <StumpelCard
            title={title}
            image={bookCover.fields.file.url}
            price={price}
            book={book}
          />
        </Link>
      </div>
    );
  }
}

export default OverviewListItem;
