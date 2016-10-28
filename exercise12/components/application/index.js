import React, { Component } from 'react';
import { SourceEditor, LinkList } from '../';
import { storageService } from '../../services';

export class Application extends Component {

  componentDidMount() {
    storageService.fetch();
    window.addEventListener('unload', () => storageService.save());
  }

  render() {
    return (
      <div>
        <SourceEditor />
        <LinkList />
      </div>
    );
  }

}
