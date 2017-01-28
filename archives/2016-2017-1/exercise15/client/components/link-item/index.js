import template from './index.html';
import './index.css';

export class LinkItemComponent {

  static create() {
    return {
      bindings: {
        text: '<',
        href: '<'
      },
      controller: [LinkItemComponent],
      template
    };
  }

}
