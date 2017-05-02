import React, { Component } from 'react';

export class Echo extends Component {

  static get defaultProps() {
    return { text: 'Hello World!' };
  }


  static get propTypes() {
    return { text: React.PropTypes.string };
  }


  render() {
    return (
      <h1>
        { this.props.text }
      </h1>
    );
  }

}
