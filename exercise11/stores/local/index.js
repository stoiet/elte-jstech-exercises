import isEmpty from 'lodash/isEmpty';

const STORAGE_KEY = 'elte-jstech-exercise:11';

export class LocalStore {

  constructor(window) {
    this._localStorage = window.localStorage;
  }

  get() {
    const currentDataString = this._localStorage.getItem(STORAGE_KEY);
    return !isEmpty(currentDataString) ? JSON.parse(currentDataString) : {};
  }

  set(data) {
    const currentData = this.get();
    const newData = Object.assign({}, currentData, data);
    this._localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }

}
