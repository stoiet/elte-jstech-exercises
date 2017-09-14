import chai from 'chai';
import { object } from './object';
import { invertObject } from './index';

const expect = chai.expect;

describe('#invertObject', () => {

  it('should invertObject function defined', () => {
    expect(invertObject).to.exist;
    expect(invertObject).to.instanceOf(Function);
  });


  it('should invert object keys and values', () => {
    expect(invertObject(object)).to.eql({
      '1': 'first',
      '2': 'second'
    });
  });

});
