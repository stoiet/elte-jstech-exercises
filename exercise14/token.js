'use strict';

const jwt = require('jsonwebtoken');
const omit = require('lodash/omit');

const SECRET = 'Rmj8oiP8YwQlcyWxVQSR';
const EXPIRATION = 43200;

class Token {

  static generate(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: EXPIRATION });
  }

  static getPayload(token) {
    return omit(jwt.verify(token, SECRET), 'iat', 'exp');
  }

}

module.exports = Token;
