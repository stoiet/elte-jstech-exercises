import { expect } from 'chai';
import { spawnSync } from 'child_process';
import { relative } from 'path';

const runScript = () => {
  const script = spawnSync('babel-node', ['./lesson05/exercise02/index.js'], {
    cwd: process.cwd(),
    encoding: 'utf-8',
    env: process.env,
    stdio: ['ignore', 'pipe', process.stderr]
  });

  return script.stdout.toString();
};

const getCleanResult = scriptResult => {
  return scriptResult
    .split('\n')
    .map(result => result.trim())
    .filter(result => result !== '');
};

describe('Exercise #00', () => {

  it('should write to stdout first, second, third by sync statements', () => {
    const scriptResult = runScript();
    const result = getCleanResult(scriptResult);
    expect(result.slice(0, 3)).to.eql(['first', 'second', 'third']);
  });


  it('should write to stdout firstAsync, secondAsync, thirdAsync by async statements (random)', () => {
    const scriptResult = runScript();
    const result = getCleanResult(scriptResult);
    expect(result.slice(3, 6)).to.include('firstAsync');
    expect(result.slice(3, 6)).to.include('secondAsync');
    expect(result.slice(3, 6)).to.include('thirdAsync');
  });


  it('should write to stdout firstAsync, secondAsync, thirdAsync by async statements (not random)', () => {
    const scriptResult = runScript();
    const result = getCleanResult(scriptResult);
    expect(result.slice(6, 9)).to.eql(['firstAsync', 'secondAsync', 'thirdAsync']);
  });

});
