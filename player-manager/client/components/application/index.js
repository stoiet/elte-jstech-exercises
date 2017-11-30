import { PlayersComponent } from '../../components';
import * as React from 'react';

export class ApplicationComponent extends React.Component {

  render() {
    return (
      <div>
        <h2>{ 'Player Manager' }</h2>
        <PlayersComponent players={ this.props.players } />
      </div>
    );
  }

}
