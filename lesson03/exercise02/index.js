
// Example #1 - object with data and behavior (static)
// const teacher = {
//   name: 'Robert',
//   sayName: () => { console.log(`teacher: ${teacher.name}`); }
// };

// teacher.sayName();


// Example #2 - object with data and behavior (dynamic)
// If treacher created after sayName was declared (event objects, for example)
// const teacher = {
//   name: 'Robert',
//   sayName: () => { console.log(`teacher: ${this.name}`); }
// };

// teacher.sayName();


// Example #3 - object with data and behavior (this)
// const teacher = {
//   name: 'Robert',
//   sayName: function () { console.log(`teacher: ${this.name}`); }
// };

// teacher.sayName.call({ name: 'Gyozo' });


// Example #4 - create object with constructor function
// function Teacher() {
//   this.name = 'Robert';
// }

// const teacher = new Teacher();
// console.log(teacher);


// Example #5 - constructor function
// function Teacher() {
//   this.name = 'Robert';
// }

// Teacher.prototype.sayName = function () {
//   console.log(`teacher: ${this.name}`);
// };

// const teacher = new Teacher();
// teacher.sayName();


// Example #6 - constructor function
// function Teacher(name) {
//   this.name = name;
// }

// Teacher.prototype.sayName = function () {
//   console.log(`teacher: ${this.name}`);
// };

// const robert = new Teacher('Robert');
// const gyozo = new Teacher('Gyozo');
// robert.sayName();
// gyozo.sayName();


// Example #7 - static method (factory)
// function Teacher(name) {
//   this.name = name;
// }

// Teacher.prototype.sayName = function () {
//   console.log(`teacher: ${this.name}`);
// };

// Teacher.createRobert = () => new Teacher('Robert');
// Teacher.createGyozo = () => new Teacher('Gyozo');

// const robert = Teacher.createRobert();
// const gyozo = Teacher.createGyozo();
// robert.sayName();
// gyozo.sayName();


// Example #8 - advanced class emulation example
// const Teacher = (function () {
//   _consturctor.createRobert = () => new Teacher('Robert');
//   _consturctor.createGyozo = () => new Teacher('Gyozo');

//   function _consturctor(name) {
//     this.name = name;
//   }

//   _consturctor.prototype.sayName = function () {
//     console.log(`teacher: ${this.name}`);
//   };

//   return _consturctor;
// })();


// const robert = Teacher.createRobert();
// const gyozo = Teacher.createGyozo();
// const tibor = new Teacher('Tibor');
// robert.sayName();
// gyozo.sayName();
// tibor.sayName();
