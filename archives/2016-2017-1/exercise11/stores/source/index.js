import { EventEmitter } from 'events';
import get from 'lodash/get';

export class SourceStore {

  constructor(store) {
    this._emitter = new EventEmitter();
    this._store = store;
  }

  subscribe(callback) {
    this._emitter.on('source:change', callback);
  }

  getSource() {
    return get(this._store.get(), 'source');
  }

  setSource(source) {
    this._store.set({ source });
    this._emitter.emit('source:change', source);
  }

}
