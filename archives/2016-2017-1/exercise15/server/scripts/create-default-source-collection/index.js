'use strict';

const { MongoClient } = require('mongodb');
const { mongoDbUrl } = require('../../../configuration');
const logger = require('../../lib/logger')('create-default-source-collection');
const { co } = require('co');

const DEFAULT_SOURCE =
`<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Exercise #15</title>
  </head>

  <body>
  </body>

</html>`;

const SOURCE_COLLECTION_OPTIONS = {
  autoIndexId: false,
  capped: true,
  max: 1,
  size: 10000000,
  strict: true
};

co(function* () {
  const db = yield MongoClient.connect(mongoDbUrl);
  const collection = yield db.createCollection('sources', SOURCE_COLLECTION_OPTIONS);
  collection.insertOne({ source: DEFAULT_SOURCE });
  db.close();
})
.then(() => logger.info({ result: 'Success!' }))
.catch(exception => logger.error({ message: exception.message }));
