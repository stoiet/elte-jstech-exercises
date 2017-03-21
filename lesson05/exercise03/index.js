import { getSubRedditItems, subscribeTo, getCommentsOf } from './library';

const getIds = items => {
  return items
    .filter(item => item.tags.includes('#language'))
    .map(item => item.id);
};

const fn = () => getSubRedditItems()
  .then(({ items }) => getIds(items))
  .then(ids => ids.map(id => subscribeTo({ id }).then(({ token }) => ({ id, token }))))
  .then(promises => Promise.all(promises))
  .then(results => Promise.all(results.map(getCommentsOf)))
  .then(console.log)
  .catch(console.error);
