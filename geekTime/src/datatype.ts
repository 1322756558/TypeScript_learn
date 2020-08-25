let bool: boolean = true
let num: number = 123
let str: string | undefined = 'asd'

let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

let tuple: [number, string] = [0 , '1']
// tuple 可添加不可访问

// 如不标明返回值类型ts可进行类型推断
let add = (x: number, y:number): number => x + y
let compute: (x: number, y:number) => number
compute = (a, b) => a + b

let obj: {x: number, y:number} = {x:1, y:2}
obj.x = 3

// 此时s1!=s2
let s1: symbol = Symbol()
let s2 = Symbol()

let un: undefined = undefined
let nu: null = null

// 将undefind和null赋值给其他类型需要在tsconfig中打开相关设置项
num = null
num = undefined

// void 这个类型存在的意义在于undefined并非保留字, 可被重写
let npReturn = () => {}

// any
let x
x = 1
x = 'q'
x = []

// never 永远无返回值, 错误或死循环
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}