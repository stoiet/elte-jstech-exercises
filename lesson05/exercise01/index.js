import { getSubRedditItems, subscribeTo, getCommentsOf } from './library';

const fn = callback => getSubRedditItems(items => {
  const ids = items
    .filter(item => item.tags.includes('#language'))
    .map(item => item.id);

  ids.forEach(id => {
    subscribeTo({ id }, ({ token }) => {
      getCommentsOf({ id, token }, ({ comments }) => {
        callback(comments);
      });
    });
  });
});









const { id } = OBJ; // { id, name, property }
const [first, _] = ARRAY; // [1,3,4]

const fn = ({ id = '' }) => {
  console.log(id);
};





