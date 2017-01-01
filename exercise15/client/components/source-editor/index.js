import template from './index.html';

export class SourceEditorComponent {

  constructor($rootScope, sourceStore) {
    this._$rootScope = $rootScope;
    this._sourceStore = sourceStore;
  }

  get initialSource() {
    return this._sourceStore.source;
  }

  setSource(source) {
    this._sourceStore.setSource(source);
    this._$rootScope.$digest();
  }

  static create() {
    return {
      controller: ['$rootScope', 'sourceStore', SourceEditorComponent],
      template
    };
  }

}
