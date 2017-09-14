
import { syncStatement, slowStatement, asyncStatement } from './statements';


// syncStatement(() => console.log('first sync statement!'));
// syncStatement(() => console.log('second sync statement!'));
// syncStatement(() => console.log('third sync statement!'));


// slowStatement(() => console.log('first slow statement!'));
// slowStatement(() => console.log('second slow statement!'));
// slowStatement(() => console.log('third slow statement!'));


// asyncStatement(() => console.log('first async statement!'));
// asyncStatement(() => console.log('second async statement!'));
// asyncStatement(() => console.log('third async statement!'));




syncStatement(() => console.log('first'));
syncStatement(() => console.log('second'));
syncStatement(() => console.log('third'));


asyncStatement(() => console.log('firstAsync'));
asyncStatement(() => console.log('secondAsync'));
asyncStatement(() => console.log('thirdAsync'));


asyncStatement(() => {
  console.log('firstAsync');
  asyncStatement(() => {
    console.log('secondAsync');
    asyncStatement(() => console.log('thirdAsync'));
  });
});

