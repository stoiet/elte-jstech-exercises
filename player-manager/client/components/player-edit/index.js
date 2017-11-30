import * as PropTypes from 'prop-types';
import * as React from 'react';

export class PlayerEditComponent extends React.Component {

  render() {
    return (
      <div>
        <button
          type={ 'button' }
          className={ 'btn btn-success btn-sm' }
        >Apply</button>
        <button
          type={ 'button' }
          className={ 'btn btn-default btn-sm' }
          onClick={ () => this.handleCancel() }
        >Cancel</button>
      </div>
    );
  }

  handleCancel() {
    this.context.history.push('/');
  }

}

PlayerEditComponent.contextTypes = {
  history: PropTypes.object
};
