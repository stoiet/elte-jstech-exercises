
export class Application {

  static get name() {
    return 'application';
  }

  static create() {
    return {
      template: require('./template.html')
    };
  }

}
