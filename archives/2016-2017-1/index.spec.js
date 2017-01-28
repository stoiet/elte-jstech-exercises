import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import 'babel-polyfill';

global.expect = expect;
chai.use(sinonChai);
