'use strict';

const token = require('../lib/token');
const logger = require('../lib/logger')('error');

const tokenAuthenticationMiddleware = function* (next) {
  try {
    this.state = token.getPayload(this.request.headers['authorization']);
    yield next;
  } catch (_) {
    this.throw(401, 'Missing token!');
  }
};

module.exports = tokenAuthenticationMiddleware;
