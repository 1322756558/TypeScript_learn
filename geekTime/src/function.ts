// ts函数小结
// 定义
let funcAdd: (x: number, y: number) => number;

funcAdd = (a, b) => a + b;

interface funcAdd {
  (x: number, y: number): number;
}

type funcAdd1 = (x: number, y: number) => number;

// 参数
// 可选参数
function add5(x: number, y?: number) {
  return y ? x + y : x;
}
add5(1);

// 默认参数
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
add6(1, undefined, 2);

function add7(x: number, ...rest: number[]) {
  x + rest.reduce((a, b) => a + b);
}

add7(1, 2, 3, 4, 5, 6, 7);
