import React, { Component } from 'react';
import { Item } from '../';

export class ItemList extends Component {

  static get defaultProps() {
    return { items: [] };
  }

  render() {
    return (
      <ul>
        {
          this.props.items.map(item =>
            <Item
              key={ item.name }
              name={ item.name }
              price={ item.price }
              category={ item.category }
            />
          )
        }
      </ul>
    );
  }

}
