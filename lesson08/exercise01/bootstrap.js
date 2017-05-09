import angular from 'angular';
import { HelloWorld } from './components/hello-world';
import { Application } from './components/application';

const mainModule = angular.module('main', []);

mainModule
  .component(HelloWorld.name, HelloWorld.create())
  .component(Application.name, Application.create());

angular.bootstrap(document.getElementById('application'), [mainModule.name]);
