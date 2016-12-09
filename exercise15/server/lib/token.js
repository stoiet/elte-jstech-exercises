'use strict';

const jwt = require('jsonwebtoken');
const omit = require('lodash/omit');
const configuration = require('../../configuration');

class Token {

  static generate(payload) {
    return jwt.sign(payload, configuration.tokenSecret, { expiresIn: configuration.tokenExpiration });
  }

  static getPayload(token) {
    return omit(jwt.verify(token, configuration.tokenSecret), 'iat', 'exp');
  }

}

module.exports = Token;
