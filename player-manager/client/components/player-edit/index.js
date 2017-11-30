import * as React from 'react';

export class PlayerEditComponent extends React.Component {

  render() {
    return (
      <span>{ this.props.player.name }</span>
    );
  }

}
