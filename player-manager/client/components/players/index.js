import { PlayerComponent } from '../../components';
import * as React from 'react';

export class PlayersComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { players: props.players };
  }

  render() {
    return (
      <table className={ 'table table-hover table-condensed' }>
        <thead>{ this._renderHeader }</thead>
        <tbody>{ this._renderPlayers }</tbody>
      </table>
    );
  }


  get _renderHeader() {
    return (
      <tr>
        <th scope={ 'col' }>{ '#' }</th>
        <th scope={ 'col' }>{ 'User Name' }</th>
        <th scope={ 'col' }>{ 'Status' }</th>
        <th scope={ 'col' }>{ 'Actions' }</th>
      </tr>
    );
  }


  get _renderPlayers() {
    return this.state.players.map(({ id, name, status }) => (
      <PlayerComponent
        key={ id }
        id={ id }
        name={ name }
        status={ status }
        onEdit={ id => this._handleEdit(id) }
        onDelete={ id => this._handleDelete(id) }
      />
    ));
  }


  _handleDelete(playerId) {
    const players = this.state.players.filter(({ id }) => id !== playerId);
    this.setState({ players });
  }


  _handleEdit(playerId) {
  }

}
