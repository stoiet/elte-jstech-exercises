import React, { Component } from 'react';
import { Echo, TextInput } from './';

export class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <TextInput onTextChange={ ({ textValue }) => this.setState({ textValue }) } />
        <Echo text={ this.state.textValue } />
      </div>
    );
  }

}
