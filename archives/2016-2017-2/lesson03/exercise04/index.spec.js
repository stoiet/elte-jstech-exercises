import { expect } from 'chai';
import { Student } from './';

describe('Student', () => {

  it('should be defined', () => {
    expect(Student).to.exist;
    expect(new Student()).to.instanceOf(Student);
  });

  describe('#constructor', () => {

    it('should set name by given value', () => {
      const student = new Student('some student name');
      expect(student._name).to.eql('some student name');
    });

    it('should set name to student by default', () => {
      const student = new Student();
      expect(student._name).to.eql('student');
    });

    it('should set grade by given value', () => {
      const student = new Student('', 3);
      expect(student._grade).to.eql(3);
    });

    it('should set grade to 5 by default', () => {
      const student = new Student();
      expect(student._grade).to.eql(5);
    });

  });

  describe('@name', () => {

    it('should return name', () => {
      const student = new Student('other student name');
      expect(student.name).to.eql('other student name');
    });

  });

  describe('@grade', () => {

    it('should return grade', () => {
      const student = new Student('', 1);
      expect(student.grade).to.eql(1);
    });

  });

  describe('#setGrade', () => {

    it('should set grade', () => {
      const student = new Student();
      student.setGrade(4);
      expect(student.grade).to.eql(4);
    });

  });

});
