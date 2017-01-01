import template from './index.html';

export class SourceLinksComponent {

  constructor(sourceStore) {
    this._sourceStore = sourceStore;
  }

  get source() {
    console.log(this._sourceStore.source);
    return this._sourceStore.source;
  }

  static create() {
    return {
      controller: ['sourceStore', SourceLinksComponent],
      template
    };
  }

}
