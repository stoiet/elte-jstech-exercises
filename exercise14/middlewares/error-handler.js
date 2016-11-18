'use strict';

const logger = require('../logger')('error');

const errorHandlerMiddleware = function *(next) {
  try { yield next; }
  catch(exception) {
    logger.error(Object.assign({
      status: exception.status,
      message: exception.message
    }, exception));

    this.response.status = exception.status;
  }
}

module.exports = errorHandlerMiddleware;
