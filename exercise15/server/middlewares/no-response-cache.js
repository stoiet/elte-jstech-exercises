'use strict';

const noResponseCacheMiddleware = function* (next) {
  yield next;
  this.response.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  this.response.set('Pragma', 'no-cache');
  this.response.set('Expires', 0);
};

module.exports = noResponseCacheMiddleware;