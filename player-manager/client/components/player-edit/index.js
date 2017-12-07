import * as PropTypes from 'prop-types';
import * as React from 'react';

export class PlayerEditComponent extends React.Component {

  render() {
    return (
      <form>
        <div className={ 'form-group' }>
          <label htmlFor={ 'playerName' }>Player Name</label>
          <input
            id={ 'playerName' }
            type={ 'text' }
            className={ 'form-control input-sm' }
            value={ this.props.player.name }
          />
        </div>
        <div className={ 'form-group' }>
          <label htmlFor={ 'playerStatus' }>Player Status</label>
          <select id={ 'playerStatus' } className={ 'form-control input-sm' } value={ this.props.player.status } >
            <option value={ 'online' }>Online</option>
            <option value={ 'offline' }>Offline</option>
            <option value={ 'freezed' }>Freezed</option>
            <option value={ 'banned' }>Banned</option>
            <option value={ 'kicked' }>Kicked</option>
          </select>
        </div>
        <button
          type={ 'button' }
          className={ 'btn btn-success btn-xs' }
        >Apply</button>
        { ' ' }
        <button
          type={ 'button' }
          className={ 'btn btn-default btn-xs' }
          onClick={ () => this.handleCancel() }
        >Cancel</button>
      </form>
    );
  }

  handleCancel() {
    this.context.history.push('/');
  }

}

PlayerEditComponent.contextTypes = {
  history: PropTypes.object
};
