// 数字枚举取值从零开始, 数字与名称可相互索引---原理:反向映射-emum[emum["a"] = 0] = "a";
enum Role{
  // 可以自定义初始值
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

// 字符串枚举无法反向映射
enum Message {
  Success = '成功',
  Fail = '失败'
}

// 数字枚举和字符串枚举可以混用但不建议--异构枚举
enum Answer{
  N,
  Y = 'Yes'
}

// 枚举成员只读
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length,
  // 计算枚举后面的值要赋值
  f = 4
}

// 常量枚举, 在编译后被移除---在仅使用对象不适用对象的值的时候使用
const enum Month{
  Jan,
  Feb,
  Mar
}
let month = [Month.Feb, Month.Jan, Month.Mar]  // month [1, 0, 2]

enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

// 数字枚举可以赋值任意数值, 字符串枚举一定要赋值他的枚举值----必须赋值
let e1: E.a = 1
let e2: G.b = G.b
// let e3: G = G.a or G.b