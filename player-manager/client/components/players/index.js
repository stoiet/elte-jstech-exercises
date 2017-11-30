import { PlayerComponent } from '../../components';
import * as React from 'react';

export class PlayersComponent extends React.Component {

  render() {
    return (
      <table className={ 'table table-hover table-condensed' }>
        <thead>
          <tr>
            <th scope={ 'col' }>{ '#' }</th>
            <th scope={ 'col' }>{ 'User Name' }</th>
            <th scope={ 'col' }>{ 'Status' }</th>
            <th scope={ 'col' }>{ 'Actions' }</th>
          </tr>
        </thead>
        <tbody>
          { this._renderPlayers() }
        </tbody>
      </table>
    );
  }


  _renderPlayers() {
    return this.props.players.map(({ id, name, status }) => (
      <PlayerComponent key={ id } id={ id } name={ name } status={ status } />
    ));
  }

}
