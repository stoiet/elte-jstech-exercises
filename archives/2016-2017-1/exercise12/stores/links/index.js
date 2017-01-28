import { EventEmitter } from 'events';

export class LinksStore {

  constructor() {
    this._links = [];
    this._emitter = new EventEmitter();
  }

  get state$() {
    return { subscribe: observer => this._emitter.on('change', () => observer()) };
  }

  getState() {
    return this._links;
  }

  setState({ links }) {
    this._links = links;
    this._emitter.emit('change');
  }

}
