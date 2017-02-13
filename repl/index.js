const chalk = require('chalk');
const repl = require('repl');

const replServer = repl.start({
  breakEvalOnSigint: true,
  ignoreUndefined: true,
  prompt: chalk.bold.cyan('js> '),
  replMode: repl.REPL_MODE_STRICT,
  useColors: true
});
