import createHistory from 'history/createBrowserHistory'
import { ApplicationComponent } from './components';
import { Router } from 'react-router';
import { render } from 'react-dom';
import * as React from 'react';
import 'regenerator-runtime/runtime';
import 'core-js/shim';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const history = createHistory();

render(
  <Router history={ history }>
    <ApplicationComponent
      players={ window.config.players }
      history={ history }
    />
  </Router>,
  document.getElementById('application'),
);
