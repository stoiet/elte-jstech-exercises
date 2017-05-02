import { Application } from './components';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from './initial-items.json';
import React from 'react';

const changer = (previousState, event) => {
  if (event.type === 'FILTER') {
    const newItems = initialItems.filter(item => item.name.includes(event.value));
    return { items: newItems };
  }

  return { items: initialState };
};

const store = createStore(changer);

render(
  <Provider store={ store } >
    <Application />
  </Provider>
, document.getElementById('application'));
