import template from './index.html';

export class SourceEditorComponent {

  constructor(sourceStore) {
    this._sourceStore = sourceStore;
  }

  get initialSource() {
    return this._sourceStore.source;
  }

  setSource(source) {
    this._sourceStore.setSource(source);
  }

  static create() {
    return {
      controller: ['sourceStore', SourceEditorComponent],
      template
    };
  }

}
