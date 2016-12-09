'use strict';

module.exports = {
  clientHost: process.env.CLIENT_HOST || 'localhost',
  clientPort: process.env.CLIENT_PORT || '50001',
  serverPort: process.env.SERVER_PORT || '50000',
  mongoDbUrl: process.env.MONGO_DB_URL || 'mongodb://localhost/exercise15',
  tokenSecret: process.env.TOKEN_SECRET || 'Rmj8oiP8YwQlcyWxVQSR',
  tokenExpiration: process.env.TOKEN_EXPIRATION || 43200
};
