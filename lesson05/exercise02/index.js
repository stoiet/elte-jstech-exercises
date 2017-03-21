
import { syncStatement, slowStatement, asyncStatement } from './statements';

// syncStatement(() => console.log('first'));
// syncStatement(() => console.log('second'));
// syncStatement(() => console.log('third'));


const firstPromise = asyncStatement(() => console.log('firstAsync'));
const secondPromise = asyncStatement(() => console.log('secondAsync'));
const thirdPromise = asyncStatement(() => console.log('thirdAsync'));


Promise
  .all([firstPromise, secondPromise, thirdPromise])
  .then(() => {
    return asyncStatement(() => console.log('firstAsync'))
      .then(() => asyncStatement(() => console.log('secondAsync')))
      .then(() => asyncStatement(() => console.log('thirdAsync')));
  });
