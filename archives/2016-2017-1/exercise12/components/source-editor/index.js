import React, { Component } from 'react';
import { Editor } from '../';
import { sourceStore } from '../../stores';

export class SourceEditor extends Component {

  constructor(props) {
    super(props);
    this.state = { source: sourceStore.getState() };
  }

  componentDidMount() {
    sourceStore.state$.subscribe(() => this.setState({ source: sourceStore.getState() }));
  }

  handleSourceChange(source) {
    sourceStore.setState({ source });
  }

  render() {
    return (
      <Editor
        value={ this.state.source }
        onChange={ source => this.handleSourceChange(source) }
      />
    );
  }

}
