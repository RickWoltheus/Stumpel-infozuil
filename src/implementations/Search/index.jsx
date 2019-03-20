import React, { Component } from 'react';
import './style.scss';

class SearchView extends Component {
  render() {

    return (
      <div className="iz-SearchView">
        <Input.Search
          className="iz-SearchView__search"
          placeholder="search..."
          value={this.state.searchData}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchView;
