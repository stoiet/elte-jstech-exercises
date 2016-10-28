import isEmpty from 'lodash/isEmpty';

const STORAGE_KEY = 'elte-jstech-exercise:12';

export class StorageService {

  constructor(storesMap) {
    this._storesMap = storesMap;
    this._storeKeys = Object.keys(storesMap);
    this._localStorage = window.localStorage;
  }

  fetch() {
    const storedDataString = this._localStorage.getItem(STORAGE_KEY);
    const storedData = JSON.parse(storedDataString);
    if (!isEmpty(storedData)) this._fetchCurrentData(storedData);
  }

  save() {
    const storedDataString = this._localStorage.getItem(STORAGE_KEY);
    const storedData = JSON.parse(storedDataString);
    const currentData = this._getCurrentData();
    const newData = Object.assign({}, storedData, currentData);
    this._localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }


  _fetchCurrentData(currentData) {
    this._storeKeys.forEach(storeKey => {
      this._storesMap[storeKey].setState(currentData);
    });
  }


  _getCurrentData() {
    return this._storeKeys.reduce((currentData, storeKey) => {
      return Object.assign(currentData, { [storeKey]: this._storesMap[storeKey].getState() });
    }, {});
  }

}
