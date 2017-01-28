import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';

const campaignTypes = ['custom', 'templateBased', 'blockBased'];

const campaigns = [
  { id: '1', name: 'Campaign #1', type: 'custom' },
  { id: '2', name: 'Campaign #2', type: 'templateBased' },
  { id: '3', name: 'Campaign #3', type: 'blockBased' }
];

const campaignIds = campaigns.map(campaign => campaign.id);

export function getCampaignIds() {
  return new Promise(resolve =>
    setTimeout(() => resolve(campaignIds), 40)
  );
}

export function getCampaignById({ id }) {
  const campaign = find(campaigns, campaign => campaign.id === id);
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      isUndefined(campaign) ?
        reject({ message: 'Campaign does not exist!' }) :
        resolve(campaign);
    }, 10)
  );
}
