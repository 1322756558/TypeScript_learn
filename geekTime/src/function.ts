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

// 剩余参数
function add7(x: number, ...rest: number[]) {
  x + rest.reduce((a, b) => a + b);
}
add7(1, 2, 3, 4, 5, 6, 7);


// 函数重载
// 为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 
// 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。

// 注意，function pickCard(x): any并不是重载列表的一部分，
// 因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);