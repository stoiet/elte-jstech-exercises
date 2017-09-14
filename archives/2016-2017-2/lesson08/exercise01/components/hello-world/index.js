
export class HelloWorld {

  static get name() {
    return 'helloWorld';
  }

  static create() {
    return {
      bindings: {
        text: '@'
      },
      controller: [HelloWorld],
      template: require('./template.html')
    };
  }

}
