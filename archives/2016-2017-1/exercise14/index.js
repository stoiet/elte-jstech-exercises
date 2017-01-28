'use strict';

const errorHandlerMiddleware = require('./middlewares/error-handler');
const requestLoggerMiddleware = require('./middlewares/request-logger');
const tokenAuthenticationMiddleware = require('./middlewares/token-authentication');
const logger = require('./logger')('app');
const application = require('./application')('app');
const router = require('koa-router')();
const token = require('./token');
const links = require('./links');

router.get('/handshake', function *() {
  const user = this.request.query.user;
  this.assert(user, 400, 'User not given!');
  this.response.body = token.generate({ user });
});

router.get('/links', tokenAuthenticationMiddleware, function *() {
  this.response.body = { user: this.state.user, links };
});

application
  .use(errorHandlerMiddleware)
  .use(requestLoggerMiddleware)
  .routes(router)
  .listen();
