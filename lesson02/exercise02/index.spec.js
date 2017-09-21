import { expect } from 'chai';
import { createNode } from './';

describe('#createNode', () => {

  it('should createNode function defined', () => {
    expect(createNode).to.be.not.undefined;
  });

  it('should return object containing the given name', () => {
    expect(createNode({ name: 'div' })).to.property('name', 'div');
  });

  it('should return object containing name as span by default', () => {
    expect(createNode()).to.property('name', 'span');
  });

  it('should return object containing the given children array', () => {
    const children = [createNode()];
    expect(createNode({ children })).to.property('children', children);
  });

  it('should return object containing children as empty array by default', () => {
    expect(createNode().children).to.eql([]);
  });

  it('should return object containing the given attributes array', () => {
    const attributes = [{ style: 'background: red;' }];
    expect(createNode({ attributes }).attributes).to.eql(attributes);
  });

  it('should return object containing attributes as empty array by default', () => {
    expect(createNode().attributes).to.eql([]);
  });

});
