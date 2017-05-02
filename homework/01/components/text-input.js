import React, { Component } from 'react';

export class TextInput extends Component {

  static get propTypes() {
    return { onTextChange: React.PropTypes.func };
  }


  render() {
    return (
      <input
        type={ 'text' }
        placeholder={ 'Write something!' }
        onChange={ ({ target }) => this.props.onTextChange({ textValue: target.value }) }
      />
    );
  }

}
