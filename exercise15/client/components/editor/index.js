import { CodeMirrorWrapper } from '../../lib';
import template from './index.html';
import head from 'lodash/head';
import './index.css';

export class EditorComponent {

  constructor($element, sourceStore) {
    this._$element = $element;
    this._sourceStore = sourceStore;
    this._codeMirrorWrapper = null;
  }

  $onChanges({ source }) {
    if (this._codeMirrorWrapper && source.currentValue !== this._codeMirrorWrapper.getValue()) {
      this._codeMirrorWrapper.setValue(source.currentValue);
    }
  }

  $postLink() {
    const textarea = head(this._$element.find('textarea'));
    this._codeMirrorWrapper = CodeMirrorWrapper.fromTextArea(textarea);
    this._codeMirrorWrapper.change$.subscribe(() => {
      this.sourceChange({ $event: this._codeMirrorWrapper.getValue() });
    });
  }

  static create() {
    return {
      bindings: {
        source: '<',
        sourceChange: '&'
      },
      controller: ['$element', 'sourceStore', EditorComponent],
      template
    };
  }

}
