const logger = require('./server/lib/logger')('client-server');
const configuration = require('./configuration');
const StaticServer = require('static-server');

const clientServer = new StaticServer({
  rootPath: './dist',
  name: 'exercise15',
  port: configuration.clientPort,
  host: configuration.clientHost,
  followSymlink: true
});

clientServer.start(() => {
  logger.info({ message: 'Client server started!', port: configuration.clientPort });
});

clientServer.on('request', request => {
  logger.info({ method: request.method, path: request.path });
});
