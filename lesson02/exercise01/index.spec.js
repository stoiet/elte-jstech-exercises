import { expect } from 'chai';
import { data } from './data';
import { sanitize } from './';

describe('#sanitize', () => {

  it('should sanitize function defined', () => {
    expect(sanitize).to.be.not.undefined;
  });


  it('should give back sanitized data', () => {
    expect(sanitize(data)).to.eql([
      {
        name: 'Peter',
        favouriteFoods: [
          { name: 'hamburger', nice: 9 },
          { name: 'cake', nice: 2 }
        ]
      },
      {
        name: 'Sam',
        favouriteFoods: [
          { name: 'pizza', nice: 2 }
        ]
      },
      {
        name: 'Jane',
        favouriteFoods: [
          { name: 'muffin', nice: 9 },
          { name: 'donat', nice: 5 }
        ]
      },
      {
        name: 'Diana',
        favouriteFoods: [
          { name: 'gyros', nice: 5 },
          { name: 'ice-cream', nice: 6 }
        ]
      }
    ]);
  });

});
