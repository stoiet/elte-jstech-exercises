import { asyncStatement } from './statements';
import { co } from 'co';

co(function* () {
  yield asyncStatement(() => console.log('Hello!'));
});
