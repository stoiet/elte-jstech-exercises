import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';

const campaignTypes = ['custom', 'templateBased', 'blockBased'];

const campaigns = [
  { id: '1', name: 'Campaign #1', type: 'custom' },
  { id: '2', name: 'Campaign #2', type: 'templateBased' },
  { id: '3', name: 'Campaign #3', type: 'blockBased' }
];

export function getCampaignTypes(callback) {
  setTimeout(() => callback(undefined, campaignTypes), 30);
}

export function getCampaigns(callback) {
  setTimeout(() => callback(undefined, campaigns), 20);
}

export function getCampaignById({ id }, callback) {
  const campaign = find(campaigns, campaign => campaign.id === id);
  const error = isUndefined(campaign) ? { message: 'Campaign does not exist!' } : undefined;
  const result = !isUndefined(campaign) ? campaign : undefined;
  setTimeout(() => callback(error, result), 10);
}
