import React from 'react';
import { render } from 'react-dom';
import { helloWorld } from './hello-world';

class Application extends React.Component {

  render() {
    return helloWorld;
  }

}

render(<Application />, document.getElementById('app'));
