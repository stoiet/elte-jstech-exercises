import DEFAULT_CONFIGURATION from './default-configuration.json';
import DEFAULT_VALUE from './default-value.html';
import CodeMirror from 'codemirror';
import { sourceStore } from '../../stores';

import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/lib/codemirror.css';

export class EditorService {

  constructor(element, configuration) {
    this._editor = CodeMirror.fromTextArea(element, this._getConfiguration(configuration));
    this._initializeEventHandlers();
    this._initializeValue();
  }

  destroy() {
    this._editor.toTextArea();
  }

  get _initialValue() {
    const value = sourceStore.getSource();
    return value ? value : DEFAULT_VALUE;
  }

  _getConfiguration(configuration) {
    return Object.assign({}, DEFAULT_CONFIGURATION, configuration);
  }

  _initializeEventHandlers() {
    this._editor.on('change', editor => sourceStore.setSource(editor.getValue()));
  }

  _initializeValue() {
    this._editor.setValue(this._initialValue);
  }

  static fromTextArea(element, configuration = {}) {
    return new EditorService(element, configuration);
  }

}
