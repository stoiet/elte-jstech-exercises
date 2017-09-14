import { expect } from 'chai';
import { reverseNumber } from './';

describe('#reverseNumber', () => {

  it('should reverseNumber function defined', () => {
    expect(reverseNumber).to.be.not.undefined;
  });

  it('should return the given single-digit number', () => {
    expect(reverseNumber(1)).to.eql(1);
  });

  it('should return the given two-digit number as commuted ', () => {
    expect(reverseNumber(12)).to.eql(21);
  });

  it('should return the given N-digit number as reversed ', () => {
    expect(reverseNumber(12436576)).to.eql(67563421);
  });

});
