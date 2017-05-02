import React, { Component } from 'react';
import initialItems from './initial-items.json';
import { connect } from 'react-redux'
import { ItemList } from '../';

class Application extends Component {

  constructor(props) {
    super(props);
    this.state = { items: initialItems };
  }


  handleSearchText({ value }) {
    const newItems = initialItems.filter(item => item.name.includes(value));
    this.setState({ items: newItems });
  }


  render() {
    return (
      <div>
        <input type={ 'text' } onChange={ ({ target }) => this.handleSearchText(target) }/>
        <ItemList items={ this.state.items } />
      </div>
    );
  }

}

export const App = connect(())(Application);
