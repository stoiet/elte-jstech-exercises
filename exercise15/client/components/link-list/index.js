import template from './index.html';
import { collectLinks } from './collect-links';
import './index.css';

export class LinkListComponent {

  constructor() {
    this._links = [];
  }

  get links() {
    return this._links;
  }

  $onChanges({ source }) {
    this._links = collectLinks(source.currentValue);
  }

  static create() {
    return {
      bindings: {
        source: '<'
      },
      controller: [LinkListComponent],
      template
    };
  }

}
