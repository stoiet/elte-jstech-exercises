import { ApplicationComponent } from './components';
import { render } from 'react-dom';
import * as React from 'react';
import 'regenerator-runtime/runtime';
import 'core-js/shim';

render(
  <ApplicationComponent players={ window.config.players }/>,
  document.getElementById('application'),
);
