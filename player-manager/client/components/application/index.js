import { PlayersComponent, PlayerEditComponent } from '../../components';
import { Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import './index.css';

export class ApplicationComponent extends React.Component {

  getChildContext() {
    return { history: this.props.history };
  }

  render() {
    console.info(this.props);
    return (
      <div>
        <h2>{ 'Player Manager' }</h2>
        <Route path={ '/' } exact render={ () => <PlayersComponent players={ this.props.players } /> } />
        <Route path={ '/edit/:id' } exact render={ ({ match }) => <PlayerEditComponent id={ match.params.id } /> } />
      </div>
    );
  }

}

ApplicationComponent.childContextTypes = {
  history: PropTypes.object
};
