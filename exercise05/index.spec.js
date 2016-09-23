import { range } from './';

for(let number of range({ start: 0, end: 10, step: 1 })) {
  console.log(number);
}
