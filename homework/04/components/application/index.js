import React, { Component } from 'react';
import initialItems from './initial-items.json';
import { ItemList } from '../';

export class Application extends Component {

  constructor(props) {
    super(props);
    this.state = { items: initialItems };
  }


  handleSearchTextChange({ value }) {
    const newItems = initialItems.filter(item => item.name.includes(value));
    this.setState({ items: newItems });
  }


  render() {
    return (
      <div>
        <input type={ 'text' } onChange={ ({ target }) => this.handleSearchTextChange(target) }/>
        <ItemList items={ this.state.items } />
      </div>
    );
  }

}
