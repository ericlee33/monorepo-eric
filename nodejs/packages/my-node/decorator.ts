// function DecoClass<T extends { new (...args: any[]): any }>(target: T) {
//     let new = target
//     new.pro
//   target.prototype = {
//     ...
//   }
//   return target;
// }

// @DecoClass
// class Service {
//   constructor() {}
// }

// const service = new Service();

// service.

// // (service as any).a();


function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
    };
  }
   
  function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("second(): called");
    };
  }
   
  class ExampleClass {
    @first()
    @second()
    method() {}
  }