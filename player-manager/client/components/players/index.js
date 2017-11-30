import { PlayerComponent } from '../../components';
import * as PropTypes from 'prop-types';
import * as React from 'react';

export class PlayersComponent extends React.Component {

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
    return this.props.players.map(({ id, name, status }) => (
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
    const players = this.props.players.filter(({ id }) => id !== playerId);
    this.props.onChange({ players });
  }


  _handleEdit(playerId) {
    this.context.history.push(`/edit/${playerId}`);
  }

}

PlayersComponent.contextTypes = {
  history: PropTypes.object
};
