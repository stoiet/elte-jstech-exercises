'use strict';

const configuration = require('../configuration');
const application = require('./lib/application')('app');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const requestLoggerMiddleware = require('./middlewares/request-logger');
const noResponseCacheMiddleware = require('./middlewares/no-response-cache');
const sourceValidationMiddleware = require('./middlewares/source-validation');
const tokenAuthenticationMiddleware = require('./middlewares/token-authentication');
const views = require('koa-views')(`${ __dirname }/views`, { extension: 'html', map: { html: 'lodash' } });
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const logger = require('./lib/logger')('app');
const token = require('./lib/token');
const { MongoClient } = require('mongodb');
const isEmpty = require('lodash/isEmpty');

router.get('/', function* () {
  yield this.render('index', {
    clientHost: configuration.clientHost,
    clientPort: configuration.clientPort,
    token: token.generate({ timestamp: Date.now().toString() })
  });
});

router.get('/api/source', tokenAuthenticationMiddleware, function* () {
  const source = yield this.app.sourceCollection.getSource();
  this.response.body = isEmpty(source) ? { source: '' } : source;
});

router.post('/api/source', tokenAuthenticationMiddleware, sourceValidationMiddleware, function* () {
  yield this.app.sourceCollection.setSource(this.request.body.source);
  this.response.status = 200;
});


MongoClient
  .connect(configuration.mongoDbUrl)
  .then(db => {

    application
      .setDatabase(db)
      .use(errorHandlerMiddleware)
      .use(requestLoggerMiddleware)
      .use(noResponseCacheMiddleware)
      .use(bodyParser({ enableTypes: ['json'], strict: true }))
      .use(views)
      .routes(router)
      .listen(configuration.serverPort);

  })
  .catch(exception => logger.error({ message: exception.message }));
