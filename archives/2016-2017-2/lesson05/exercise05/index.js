import { getSubRedditItems, subscribeTo, getCommentsOf } from './library';
import { co } from 'co';

co(function* () {

  const { items } = yield getSubRedditItems();
  console.log(items);

});
