import { getCampaignTypes } from './';

describe('Exercise #08', () => {

  it('should getCampaignTypes function defined', () => {
    expect(getCampaignTypes).to.exist;
    expect(getCampaignTypes).to.be.instanceOf(Function);
  });


  it('should getCampaignTypes function returns with promise', () => {
    expect(getCampaignTypes()).to.be.instanceOf(Promise);
  });


  it(`should getCampaignTypes function returns with [ 'custom', 'templateBased', 'blockBased' ] types`, () => {
    return getCampaignTypes().then(campaignTypes =>
      expect(campaignTypes).to.eql(['custom', 'templateBased', 'blockBased'])
    );
  });

});
