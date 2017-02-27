
const inherit = Child => ({
  from: Parent => {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }
});


const Teacher = (function () {

  function _Teacher() {
    this.teacher = true;
  }

  _Teacher.prototype = {
    sayName: function () { console.log(`My name is ${this.name}, teacher: ${this.teacher}`); }
  };

  return _Teacher;
})();


const Robert = (function (Parent) {

  inherit(_Robert).from(Parent);

  function _Robert() {
    Parent.call(this);
    this.name = 'Robert';
  }

  return _Robert;

})(Teacher);


const robert = new Robert();
robert.sayName();
