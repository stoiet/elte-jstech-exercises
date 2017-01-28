
export class SourceService {

  constructor($http, sourceStore) {
    this._$http = $http;
    this._sourceStore = sourceStore;
  }

  fetch() {
    this._$http
      .get('/api/source')
      .then(({ data }) => this._sourceStore.setSource(data.source))
      .catch(() => this._sourceStore.setSource(''));
  }

  save() {
    this._$http
      .post('/api/source', { source: this._sourceStore.source });
  }

  static create() {
    return ['$http', 'sourceStore', SourceService];
  }

}
