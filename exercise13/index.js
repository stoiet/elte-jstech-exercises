const errorHandlerMiddleware = require('./middlewares/error-handler');
const requestLoggerMiddleware = require('./middlewares/request-logger');
const logger = require('./logger')('app');
const application = require('./application')('app');

application
  .use(errorHandlerMiddleware)
  .use(requestLoggerMiddleware)
  .use(function *() {
    this.response.body = 'Hello World!';
  })
  .listen();
