describe('Exercise #03', () => {

  it(`should first-module.js defined`, () => {
    require('./first-module');
  });


  it(`should second-module.js defined`, () => {
    require('./second-module');
  });


  it('should firstModule defined in first-module.js', () => {
    const { firstModule } = require('./first-module');
    expect(firstModule).to.exist;
  });


  it('should secondModule defined in second-module.js', () => {
    const { secondModule } = require('./second-module');
    expect(secondModule).to.exist;
  });


  it(`should access firstModule through secondModule`, () => {
    const { secondModule } = require('./second-module');
    expect(secondModule.firstModule).to.exist;
  });

});
