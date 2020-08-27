// 类的实现
class Dog {
  // 函数载原型上而不再实例上
  constructor(name: string){
    this.name = name
  }
  // 内部属性在实例上而不再原型上, 且实例的属性必须有初始值
  name: string
  run(){}
}
let dog = new Dog('wangwangwang')

// -----------------------------------------------------------------------------
// 继承
// 抽象类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 方法由子类实现 父类无需实现
  abstract sleep(): void

}
// let animal = new Animal()   /* 抽象类无法被实例化只能被继承 */

class Cat extends Animal{
  // 函数载原型上而不再实例上
  constructor(name: string) {
    super()
    this.name = name;
  }
  // 内部属性在实例上而不再原型上, 且实例的属性必须有初始值
  name: string;
  run() {}
  sleep(){
    console.log('sleep')
  }
}

// ------------------多态---------------------------
class Tiger extends Animal{
  sleep(){
    console.log('Cat sleep')
  }
}

let tiger = new Tiger();
let cat = new Cat('paofu');

let animal: Animal[] = [tiger, cat]

animal.forEach(
  i => {
    i.sleep()
  }
)

// 类中方法的链式调用 /* this 既可以是父类型也可以是子类型 */
class WorkFlow{
  step1(){
    return this;
  }
  step2(){
    return this;
  }
}
new WorkFlow().step1().step2();

class Myflow extends WorkFlow {
  next() {
    return this;
  }
}

new Myflow().next().step1().step2().next();

interface Human {
  name: string;
  eat(): void;
}

// 接口只能约束类的公有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  // private eat() {};  /* 从接口继承的属性无法设为私有 */
  eat() {}
  private sleep() {}
}

// --------------------------接口的继承----------------------------------
// 一个接口可以继承多个接口

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口继承类
class Auto {
  constructor(name: string){
    console.log(name)
  }
  state = 1
  private state2 = 1
}
interface AutoInterface extends Auto {

}

// class C implements AutoInterface {
//   state = 1
//   // 接口在抽离类的时候也会抽离私有成员, 并且如果接口继承的类有私有属性
//   // 那么实现这个接口的类只能是接口所继承类的子类
//   // private state2 =1;
// }

class Bus extends Auto implements AutoInterface{
  // 这里就不需要实现state 因为他继承了Auto
}