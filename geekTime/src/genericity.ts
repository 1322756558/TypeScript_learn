//----------------泛型函数与泛型接口---------------------------
function log<T>(value:T){
  console.log(value);
  return value;
}

log<string[]>(['a', 'b'])
//or
log(['a','b'])

type TypeLog = <T>(value: T) => T
let myLog: TypeLog = log

// 单独规定泛型
interface Log{
  <T>(value: T): T
}

// 集体规定泛型
interface testLog<T = string> {
  (value: T): T
}

let myLog1: testLog<number> = log
myLog1(1)

// ------------------泛型类与泛型约束-----------------------------
class classLog<T> {
  // 静态成员不能引用类型参数
  // static testRun(value: T){}
  run(value: T) {
    console.log(value)
    return value
  }
}

let log1 = new classLog<number>()
// 不规定泛型类型时可以为任意类型
let log2 = new classLog()

// 泛型约束 打印参数及属性
interface Length{
  length: number
}
function Log1<T extends Length>(value: T): T{
  // 当T不继承Length接口的时候不能使用这样的写法, 会提示value 没有length属性
  // 但是同时, 传入的属性必须有length属性
  console.log(value, value.length);
  return value;
}

// 总结 可支持多种类型, 不必多条函数重载, 及联合类型增强可读性 灵活控制类型之间的约束
