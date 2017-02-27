
class Teacher {

  static createRobert() {
    return new Teacher('Robert');
  }

  constructor(name) {
    this._name = name;
  }

  sayName() {
    console.log(`teacher: ${this._name}`);
  }

}

const robert = Teacher.createRobert();
robert.sayName();
