import { defaultParametersExercise } from './';
import sinon from 'sinon';

describe('Exercise #02', () => {

  it(`should defaultParametersExercise function be defined`, () => {
    expect(defaultParametersExercise).to.exist;
    expect(defaultParametersExercise).to.be.instanceOf(Function);
  });


  it(`should templateLiteralExercise function connect with database and configuration given`, () => {
    const configuration = { host: 'test.service.com' };
    const database = { connect: sinon.stub() };
    const result = defaultParametersExercise({ configuration, database });
    expect(database.connect).to.have.been.calledWith('test.service.com');
  });


  it(`should templateLiteralExercise function connect to default host with only database given`, () => {
    const database = { connect: sinon.stub() };
    const result = defaultParametersExercise({ database });
    expect(database.connect).to.have.been.calledWith('api.service.com');
  });


  it(`should templateLiteralExercise function not throw exception if nothing given`, () => {
    defaultParametersExercise();
  });

});