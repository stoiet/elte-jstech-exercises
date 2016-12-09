
export class SourceStore {

  constructor() {
    this._source = '';
  }

  get source() {
    return this._source;
  }

  setSource(source) {
    this._source = source;
  }

  static create() {
    return [SourceStore];
  }

}
