import angular from 'angular';
import { Application } from './components/application';

const mainModule = angular.module('main', []);

mainModule
  .component(Application.name, Application.create());

angular.bootstrap(document.getElementById('application'), [mainModule.name]);
