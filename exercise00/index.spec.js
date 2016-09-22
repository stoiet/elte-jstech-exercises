import { exerciseTest } from './';

describe('Exercise #00', () => {

  it('should exerciseTest function be defined', () => {
    expect(exerciseTest).to.exist;
    expect(exerciseTest).to.be.instanceOf(Function);
  });

  it('should exerciseTest function returns with 42', () => {
    const result = exerciseTest();
    expect(result).to.eql(42);
  });

});
