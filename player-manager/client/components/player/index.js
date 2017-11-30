import * as React from 'react';

export const PlayerComponent = ({ id, name, status, onDelete }) => (
  <tr>
    <th scope={ 'row' }>{ id }</th>
    <td>{ name }</td>
    <td>{ status }</td>
    <td>
      <button id={ 'edit' } type={ 'button' } className={ 'btn btn-primary btn-xs' }>{ 'Edit' }</button>
      { ' ' }
      <button
        id={ 'edit' }
        type={ 'button' }
        className={ 'btn btn-primary btn-xs' }
        onClick={ () => onDelete(id) }
      >{ 'Delete' }</button>
    </td>
  </tr>
);
