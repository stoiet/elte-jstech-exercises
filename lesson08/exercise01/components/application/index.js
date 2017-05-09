import angular from 'angular';

export class Application {

  constructor($http) {
    this._text = '';
    $http.head('http://google.com');
  }


  get text() {
    return this._text;
  }

  static get name() {
    return 'application';
  }

  static create() {
    return {
      controller: ['$http', Application],
      template: require('./template.html')
    };
  }

}
