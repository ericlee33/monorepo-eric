// class BaseModel {
//   firstName = 'parent_nick';

//   constructor() {
//     this.lastName = 'parent_yang';
//   }
// }

class Person
//  extends BaseModel 
 {
  // 方式一：直接在属性声明时给个默认值
  firstName = 'tom';
  // 普通声明
  lastName;

  constructor() {
    // super();
    // 方式二：在构造器中赋值
    this.firstName = 'nick';
    this.lastName = 'yang';
  }
}

const p = {
  fisrtName: '123',
  lastName: '234',
};
const person = new Person(p);

console.log(person.firstName, person.lastName);
