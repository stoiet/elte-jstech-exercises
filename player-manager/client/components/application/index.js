import * as React from 'react';

export class ApplicationComponent extends React.Component {

  render() {
    return (
      <table>
        <tbody>
          { this.props.players.map(({ id, name, status }) => (
            <tr key={ id }>
              <td>{ name }</td>
              <td>{ status }</td>
              <td><button id={ 'edit' } value={ 'Edit' } /></td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }

}
