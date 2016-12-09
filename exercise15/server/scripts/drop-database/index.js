'use strict';

const { MongoClient } = require('mongodb');
const { mongoDbUrl } = require('../../../configuration');
const logger = require('../../lib/logger')('drop-database');
const { co } = require('co');

co(function* () {
  const db = yield MongoClient.connect(mongoDbUrl);
  yield db.dropDatabase();
  db.close();
})
.then(() => logger.info({ result: 'Success!' }))
.catch(exception => logger.error({ message: exception.message }));
