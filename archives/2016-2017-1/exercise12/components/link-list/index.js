import React, { Component } from 'react';
import { LinkItem } from '../';
import { linksService } from '../../services';
import './index.css';

export class LinkList extends Component {

  constructor(props) {
    super(props);
    this.state = { links: linksService.links };
  }

  componentDidMount() {
    linksService.change$.subscribe(() => {
      this.setState({ links: linksService.links });
    });
  }

  handleLinkChange(index, change) {
    linksService.changeLink(index, change);
  }

  render() {
    return (
      <div className={ 'link-list' }>
        { this._linkItems() }
      </div>
    );
  }

  _linkItems() {
    return this.state.links.map((link, index) =>
      <LinkItem
        key={ index }
        link={ link }
        onTextChange={ text => this.handleLinkChange(index, { text }) }
        onHrefChange={ href => this.handleLinkChange(index, { href }) }
      />
    );
  }

}
