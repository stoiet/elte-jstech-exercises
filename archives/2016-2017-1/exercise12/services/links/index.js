import { EventEmitter } from 'events';
import { collectLinks, setLinks } from '../../lib';

export class LinksService {

  constructor(sourceStore, linkStore) {
    this._sourceStore = sourceStore;
    this._linksStore = linkStore;
    this._emitter = new EventEmitter();
    this._initializeEventHandlers();
  }

  get links() {
    return this._linksStore.getState();
  }

  get change$() {
    return { subscribe: observer => this._emitter.on('change', () => observer()) };
  }

  changeLink(index, changes) {
    const link = Object.assign(this.links[index], changes);
    const source = setLinks(this._sourceStore.getState(), link, index);
    this._sourceStore.setState({ source });
  }

  _initializeEventHandlers() {
    this._sourceStore.state$.subscribe(() => {
      const links = collectLinks(this._sourceStore.getState());
      this._linksStore.setState({ links });
      this._emitter.emit('change');
    });
  }


}
