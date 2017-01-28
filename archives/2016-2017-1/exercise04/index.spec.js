import { EventEmitter } from 'events';
import { ApplicationState } from './';

describe('Exercise #04', () => {

  it(`should ApplicationState class defined`, () => {
    expect(ApplicationState).to.exist;
    expect(ApplicationState).to.be.instanceOf(Function);
  });


  it('should ApplicationState has a static createWithLoadingState function', () => {
    expect(ApplicationState.createWithLoadingState).to.exist;
    expect(ApplicationState.createWithLoadingState).to.be.instanceOf(Function);
  });


  it('should ApplicationState has a state getter', () => {
    const applicationState = new ApplicationState('');
    expect(applicationState.state).to.exist;
  });


  it('should state getter return with state after initialization', () => {
    const applicationState = new ApplicationState('state');
    expect(applicationState.state).to.eql('state');
  });


  it('should static createWithLoadingState function initialize with loading state', () => {
    const applicationState = ApplicationState.createWithLoadingState();
    expect(applicationState.state).to.eql('loading');
  });


  it('should setStateToStarted function set state to started', () => {
    const applicationState = ApplicationState.createWithLoadingState();
    applicationState.setStateToStarted();
    expect(applicationState.setStateToStarted).to.exist;
    expect(applicationState.setStateToStarted).to.be.instanceOf(Function);
    expect(applicationState.state).to.eql('started');
  });


  it('should setStateToStarted function emit started state as a state.started event', () => {
    let eventEmitted = false;
    const applicationState = ApplicationState.createWithLoadingState();
    expect(applicationState).to.be.instanceOf(EventEmitter);
    applicationState.once('state.started', () => eventEmitted = true);
    applicationState.setStateToStarted();
    expect(eventEmitted).to.be.true;
  });

});
