import React, { Component } from 'react';
import './style.scss';

class OverviewListItem extends Component {

  render() {
    return (
      <div className="iz-overview-list-item">
        <h1>{this.props.title}</h1>
        {this.props.author.map((e, i) => <div key={e.fields.title}>{e.fields.title}</div>) }
        <p>{this.props.isbn}</p>
        <p>{this.props.publisher.fields.title}</p>
        <p>{this.props.releaseDate}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default OverviewListItem;
