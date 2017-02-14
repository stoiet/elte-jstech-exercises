'use strict';

router.get('/', function* () {
  yield 'Hello World!';
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
