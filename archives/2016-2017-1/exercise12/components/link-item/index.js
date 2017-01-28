import React, { Component } from 'react';
import './index.css';

export class LinkItem extends Component {

  get text() {
    return this.props.link.text;
  }

  get href() {
    return this.props.link.href;
  }

  render() {
    return (
      <div className={ 'link-item' }>
        <div className={ 'link-item__left' }>
          <span className={ 'link-item__name' }>Link Text:</span>
          <input
            type={ 'text' }
            value={ this.text }
            onChange={ ({ target }) => this.props.onTextChange(target.value) }
          />
        </div>
        <div>
          <span className={ 'link-item__name' }>Link URL:</span>
          <input
            type={ 'text' }
            value={ this.href }
            onChange={ ({ target }) => this.props.onHrefChange(target.value) }
          />
        </div>
      </div>
    );
  }

}
