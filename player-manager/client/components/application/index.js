import { PlayersComponent, PlayerEditComponent } from '../../components';
import { Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import './index.css';

export class ApplicationComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { players: props.players };
  }

  getChildContext() {
    return { history: this.props.history };
  }

  render() {
    console.info(this.props);
    return (
      <div>
        <h2>{ 'Player Manager' }</h2>
        <Route path={ '/' } exact render={ () => <PlayersComponent players={ this.state.players } onChange={ ({ players }) => this.setState({ players }) } /> } />
        <Route path={ '/edit/:id' } exact render={ ({ match }) => <PlayerEditComponent player={ this.getPlayer(match.params.id) } /> } />
      </div>
    );
  }


  getPlayer(playerId) {
    return this.state.players.find(({ id }) => id === parseInt(playerId));
  }

}

ApplicationComponent.childContextTypes = {
  history: PropTypes.object
};
