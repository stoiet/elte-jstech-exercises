import { ApplicationComponent } from './components';
import { render } from 'react-dom';
import * as React from 'react';
import 'regenerator-runtime/runtime';
import 'core-js/shim';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <ApplicationComponent players={ window.config.players } />,
  document.getElementById('application'),
);
