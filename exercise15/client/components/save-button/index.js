import template from './index.html';
import './index.css';

export class SaveButtonComponent {

  constructor(sourceService) {
    this._sourceService = sourceService;
  }

  save() {
    this._sourceService.save();
  }

  static create() {
    return {
      controller: ['sourceService', SaveButtonComponent],
      template
    };
  }

}
