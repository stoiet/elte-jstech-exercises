import { LocalStore } from './local';
import { SourceStore } from './source';

export const localStore = new LocalStore(window);
export const sourceStore = new SourceStore(localStore);
