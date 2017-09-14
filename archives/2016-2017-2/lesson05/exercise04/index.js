import { asyncStatement } from './statements';
import { co } from 'co';

co(function* () {
  try {
    yield asyncStatement(() => console.log('Hello!'));
    yield asyncStatement(() => console.log('Hello!'));
    yield asyncStatement(() => console.log('Hello!'));
    yield asyncStatement(() => console.log('Hello!'));
  } catch (ex) {

  }
});


function* asyncFn() {
  yield 1;
}

async function asyncFn() {
  await 1;
}

