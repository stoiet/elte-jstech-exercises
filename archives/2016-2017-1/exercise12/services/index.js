import { linksStore, sourceStore } from '../stores';
import { LinksService } from './links';
import { StorageService } from './storage';

export const linksService = new LinksService(sourceStore, linksStore);
export const storageService = new StorageService({
  links: linksStore,
  source: sourceStore
});
