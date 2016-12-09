import template from './index.html';

export class ApplicationComponent {

  static create() {
    return {
      controller: [ApplicationComponent],
      template
    };
  }

}
