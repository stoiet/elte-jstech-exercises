const chalk = require('chalk');

class Logger {

  constructor(namespace) {
    this._namespace = namespace;
  }

  info(params) {
    this._log(
      chalk.magenta(`[${new Date(Date.now())}]`),
      chalk.green(`[${this._namespace}]`),
      params
    );
  }

  error(params) {
    this._log(
      chalk.red(`[${new Date(Date.now())}]`),
      chalk.red(`[${this._namespace}]`),
      params
    );
  }

  _log(date, namespace, params) {
    console.log(date, namespace, this._logParamsString(params));
  }

  _logParamsString(params) {
    return Object
      .keys(params)
      .map(key => `${key}="${params[key]}"`)
      .join(' ');
  }

  static create(namespace) {
    return new Logger(namespace);
  }

}

module.exports = Logger.create;
