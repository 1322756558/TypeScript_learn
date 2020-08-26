interface List {
  id: number;
  name: string;
  // 第三种方法: 字符串索引签名
  [x: string]: any;
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
  })
}
let result = {
  data: [
    {id: 1, name: 'A', sex:'male'},
    {id: 2, name: 'B'}
  ]
}
// 鸭式变形法  满足接口要求即可传入
render(result)

// 但是当直接传入参数时, ts就会对额外的自变量进行检查, 第一种是上面的方式, 将参数赋值给一个新的变量
render({
  data: [
    // 隐藏第三种方法时会报错
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
})

// 第二种: 表示明确知道类型是Result 可以绕过类型检查
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
} as Result)
// 或者  --与上面原理上相同但是建议前一种 在react中会产生歧义
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
} as Result)

// ----------------------------------可选属性----------------------------------------
interface List {
  id: number;
  name: string;
  // 表示属性可选
  age?: number
}
interface Result {
  data: List[]
}
function render1(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age){
      console.log(value.age)
    }
  })
}
let result1 = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 10 }
  ]
}

// --------------------------只读属性-------------------------------
interface List2 {
  // 只读, 不允许修改
  readonly id: number;
  name: string;
  age?: number
}


//--------------------------可索引的接口--------------------------
interface StringArray {
  // 任意数字索引会返回字符串, 相当于一个字符串数组
  [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
  // 索引接口有多重类型时多种类型之间需要相互兼容
  [x: number]: string;
  // y: number;
  [z: string]: string;
}
let testname: Names = {'1': 'a', 2: 'b'}

// ---------------------函数类型的接口----------------------------
let wadd: (x:number, y:number) => number

wadd = (a, b) => a + b


interface Add {
  (x: number, y: number): number
}

type ADd = (x: number, y: number) => number

let numadd: Add = (a, b) => a + b


// ---混合接口---
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

// 封装为函数可以创建多个实例
function getLib() {
  // 需要断言lib的类型-->as Lib
  let lib: Lib = (() => {}) as Lib;
  lib.version = '2.0';
  lib.doSomething = () => {}
  return lib
}
