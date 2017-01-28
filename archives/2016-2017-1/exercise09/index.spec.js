import { getCampaignTypes } from './';

describe('Exercise #09', () => {

  it('should getCampaignTypes generator function defined', () => {
    expect(getCampaignTypes).to.exist;
    expect(getCampaignTypes).to.be.instanceOf(Function);
  });


  it(`should getCampaignTypes generator function returns with [ 'custom', 'templateBased', 'blockBased' ] types`, function* () {
    const campaignTypes = yield getCampaignTypes();
    expect(campaignTypes).to.eql(['custom', 'templateBased', 'blockBased']);
  });

});
