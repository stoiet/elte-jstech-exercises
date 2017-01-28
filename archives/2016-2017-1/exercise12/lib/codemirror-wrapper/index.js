import CONFIGURATION from './configuration.json';
import CodeMirror from 'codemirror';

import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/lib/codemirror.css';

export class CodeMirrorWrapper {

  constructor(element) {
    this._editor = CodeMirror.fromTextArea(element, CONFIGURATION);
  }

  get change$() {
    return { subscribe: observer => this._editor.on('change', () => observer()) };
  }

  getValue() {
    return this._editor.getValue();
  }

  setValue(value) {
    this._editor.setValue(value);
  }

  destroy() {
    this._editor.toTextArea();
  }

  static fromTextArea(element) {
    return new CodeMirrorWrapper(element);
  }

}
