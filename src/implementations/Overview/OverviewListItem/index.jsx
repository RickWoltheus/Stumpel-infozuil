import React, { Component } from 'react';
import './style.scss';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

class OverviewListItem extends Component {
  render() {
    const { title, bookCover, id } = this.props;

    return (
      <div className="iz-overview-list-item">
        <Link replace to={`${id}/detail`}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={
                  bookCover
                    ? bookCover.fields
                      ? bookCover.fields.file.url
                      : null
                    : null
                }
              />
            }
          >
            <div className="iz-overview-list-item__title  ">{title}</div>
          </Card>
        </Link>
      </div>
    );
  }
}

export default OverviewListItem;
