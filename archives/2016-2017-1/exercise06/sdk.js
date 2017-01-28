import find from 'lodash/find';
import isUndefined from 'lodash/isUndefined';

const campaigns = [
  { id: '1', name: 'Campaign #1', type: 'custom' },
  { id: '2', name: 'Campaign #2', type: 'templateBased' },
  { id: '3', name: 'Campaign #3', type: 'blockBased' }
];

export function getCampaignsAsync(callback) {
  setTimeout(() => callback(undefined, campaigns), 20);
}

export function getCampaignByIdAsync({ id }, callback) {
  const campaign = find(campaigns, campaign => campaign.id === id);
  const error = isUndefined(campaign) ? { message: 'Campaign does not exist!' } : undefined;
  const result = !isUndefined(campaign) ? campaign : undefined;
  setTimeout(() => callback(error, result), 10);
}

