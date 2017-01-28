import React, { Component } from 'react';
import { Editor, LinkList } from '../';
import { sourceStore } from '../../stores';
import { collectLinks } from './collect-links';

export class Application extends Component {

  state = { source: '' };

  get links() {
    return collectLinks(this.state.source);
  }

  componentWillMount() {
    sourceStore.subscribe(source => this.setState({ source }));
  }

  render() {
    return (
      <div>
        <Editor />
        <LinkList links={ this.links } />
      </div>
    );
  }

}
