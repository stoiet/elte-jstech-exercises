'use strict';

const token = require('../token');
const logger = require('../logger')('error');

const tokenAuthenticationMiddleware = function* (next) {
  try {
    this.state = token.getPayload(this.request.query.token);
    yield next;
  } catch (_) {
    this.throw(401, 'Missing token!');
  }
};

module.exports = tokenAuthenticationMiddleware;
