import React, { Component } from 'react';
import Pagination from '../Pagination/Pagination';
import Banks from '../Banks/Banks';

export default class Main extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 10
  };

  changePageHandler = (e, page) => {
    e.preventDefault();
    this.setState({ currentPage: page });
  };

  render() {
    let lastItemIndex = this.state.currentPage * this.state.itemsPerPage;
    let firstItemIndex = lastItemIndex - this.state.itemsPerPage;
    let itemsToLoad = this.props.banks.slice(firstItemIndex, lastItemIndex);
    console.log();
    return (
      <div>
        <Banks banks={itemsToLoad} />
        {this.props.banks.length > 10 ? (
          <Pagination
            currentPage={this.state.currentPage}
            totalItems={this.props.banks.length}
            itemsPerPage={this.state.itemsPerPage}
            changePageHandler={this.changePageHandler}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}
