import React, { Component } from 'react';
import { CodeMirrorWrapper } from '../../lib';
import './index.css';

export class Editor extends Component {

  constructor(props) {
    super(props);
    this._editorElement = null;
    this._codeMirrorWrapper = null;
  }

  get value() {
    return this._codeMirrorWrapper.getValue();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this._codeMirrorWrapper = CodeMirrorWrapper.fromTextArea(this._editorElement);
    this._codeMirrorWrapper.change$.subscribe(() => this.props.onChange(this.value));
    this._codeMirrorWrapper.setValue(this.props.value);
  }

  componentWillUnmount() {
    this._codeMirrorWrapper.destroy();
  }

  componentWillReceiveProps({ value }) {
    if (this.value !== value) {
      this._codeMirrorWrapper.setValue(value);
    }
  }

  render() {
    return (
      <div className={ 'editor' }>
        <textarea ref={ element => this._editorElement = element } />
      </div>
    );
  }

}
