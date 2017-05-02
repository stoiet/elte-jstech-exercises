import React, { Component } from 'react';
import './style.css';

export class Item extends Component {

  render() {
    return (
      <li className={ 'item' }>
        <table>
          <tbody>
            <tr>
              <td className={ 'item-cell' }>{ this.props.name }</td>
              <td className={ 'item-cell' }>{ this.props.price }</td>
              <td className={ 'item-cell' }>{ this.props.category }</td>
            </tr>
          </tbody>
        </table>
      </li>
    );
  }

}
