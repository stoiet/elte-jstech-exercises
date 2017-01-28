'use strict';

const COLLECTION_NAME = 'sources';

class SourcesCollection {

  constructor(collection) {
    this._collection = collection;
  }

  getSource() {
    return this._collection.findOne({}, { fields: { _id: 0, source: 1 } });
  }

  setSource(source) {
    return this._collection.insertOne({ source });
  }

  static create(db) {
    const collection = db.collection(COLLECTION_NAME);
    return new SourcesCollection(collection);
  }

}

module.exports = SourcesCollection;
