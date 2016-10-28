import DEFAULT_SOURCE from './default-source.html';
import { EventEmitter } from 'events';

export class SourceStore {

  constructor() {
    this._source = DEFAULT_SOURCE;
    this._emitter = new EventEmitter();
  }

  get state$() {
    return { subscribe: observer => this._emitter.on('change', () => observer()) };
  }

  getState() {
    return this._source;
  }

  setState({ source }) {
    this._source = source;
    this._emitter.emit('change');
  }

}
