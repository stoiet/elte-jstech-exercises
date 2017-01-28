import React, { Component } from 'react';
import { EditorService } from '../../services';
import './index.css';

export class Editor extends Component {

  _editorElement = null;
  _editorService = null;

  componentDidMount() {
    this._editorService = EditorService.fromTextArea(this._editorElement);
  }

  componentWillUnmount() {
    this._editorService.destroy();
  }

  render() {
    return (
      <div className={ 'editor' }>
        <textarea ref={ element => this._editorElement = element } />
      </div>
    );
  }

}
