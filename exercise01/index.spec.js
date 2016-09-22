import { templateLiteralExercise } from './';

describe('Exercise #01', () => {

  it(`should templateLiteralExercise function be defined`, () => {
    expect(templateLiteralExercise).to.exist;
    expect(templateLiteralExercise).to.be.instanceOf(Function);
  });


  it(`should templateLiteralExercise function returns 'Welcome!' if no parameters given`, () => {
    const result = templateLiteralExercise();
    expect(result).to.eql('Welcome!');
  });


  it(`should templateLiteralExercise function returns 'Welcome Thomas!' if an array with Thomas given`, () => {
    const result = templateLiteralExercise(['Thomas']);
    expect(result).to.eql('Welcome Thomas!');
  });


  it(`should templateLiteralExercise function returns 'Welcome Thomas, Joe, Rebeca!' if an array with Thomas, Joe, Rebeca given`, () => {
    const result = templateLiteralExercise(['Thomas', 'Joe', 'Rebeca']);
    expect(result).to.eql('Welcome Thomas, Joe, Rebeca!');
  });

});
