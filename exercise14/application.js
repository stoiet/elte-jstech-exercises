'use strict';

const logger = require('./logger')('app');
const koa = require('koa');

class Application {

  constructor(name) {
    this._koa = koa();
    this._koa.name = name;
    this._koa.proxy = false;
    this._koa.silent = false;
    this._koa.on('error', () => logger.error({ message: 'Application error!' }));
  }

  use(middleware) {
    this._koa.use(middleware);
    return this;
  }

  routes(router) {
    return this
      .use(router.routes())
      .use(router.allowedMethods());
  }

  listen(port = 3000) {
    logger.info({ message: 'Application started!', port });
    this._koa.listen(port);
  }


  static create(name) {
    return new Application(name);
  }

}

module.exports = Application.create;
