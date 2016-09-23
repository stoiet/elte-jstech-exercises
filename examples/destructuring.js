
const nestedObject = {
  deepValues: {
    first: 'first',
    second: 'second'
  },
  other: 'other value'
};

const { deepValues: { first } } = nestedObject;
console.log(first);


const largeArray = [...Array(100000).keys()];
const [head, ...last] = largeArray;
console.log(head);


const helloBean = 'Hello Bean!';
const helloMrBean = [
  ...helloBean.slice(0, 6),
  'Mr. ',
  ...helloBean.slice(6, helloBean.length),
].join('');

console.log(helloMrBean);


const peoples = [
  { name: 'Joe', age: 24 },
  { name: 'Jessica', age: 45 }
];

for (let { name, age } of peoples) {
  console.log(name, age);
}