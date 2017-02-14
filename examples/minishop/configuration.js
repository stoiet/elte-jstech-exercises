'use strict';

module.exports = {
  clientHost: process.env.CLIENT_HOST || 'localhost',
  clientPort: process.env.CLIENT_PORT || '50001',
  mongoDbUrl: process.env.MONGO_DB_URL || 'mongodb://localhost/minishop',
  serverPort: process.env.SERVER_PORT || '50000',
  tokenExpiration: process.env.TOKEN_EXPIRATION || 43200,
  tokenSecret: process.env.TOKEN_SECRET || 'Rmj8oiP8YwQlcyWxVQSR'
};
