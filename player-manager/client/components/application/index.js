import * as React from 'react';

export class ApplicationComponent extends React.Component {

  render() {
    return (
      <div>
        <h2>{ 'Player Manager' }</h2>
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
            { this.props.players.map(({ id, name, status }) => (
              <tr key={ id }>
                <th scope={ 'row' }>{ id }</th>
                <td>{ name }</td>
                <td>{ status }</td>
                <td>
                  <button id={ 'edit' } type={ 'button' } className={ 'btn btn-primary btn-xs' }>{ 'Edit' }</button>
                  { ' ' }
                  <button id={ 'edit' } type={ 'button' } className={ 'btn btn-primary btn-xs' }>{ 'Delete' }</button>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }

}
