import React, { Component } from 'react';
import './style.scss';
import { Card, Icon } from 'antd';

class OverviewListItem extends Component {
  render() {
    const { title, author, isbn, publisher, releaseDate, description, bookCover } = this.props;

    return (
      <div className="iz-overview-list-item">

        <Card
          hoverable
          cover={
            <img
              alt="example"
              src={bookCover ? bookCover.fields ? bookCover.fields.file.url : null : null}
            />
          }
        >
          <div className="iz-overview-list-item__title  ">{title}</div>
        </Card>

      </div>
    );
  }
}

export default OverviewListItem;
