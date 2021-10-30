// 分割代入
const me = {
  name: "はむ",
  age: 27
};
// オブジェクト名meと何回も書くことになる
const mes1 = `私の名前は${me.name}です。${me.age}歳です。`;
console.log(mes1);
// 分割代入を使う
const { name, age } = me;
const mes2 = `私の名前は${name}です。${age}歳です。`;
console.log(mes2);

const me = ["ハム", 27];
const mes1 = `私の名前は${me[0]}です。${me[1]}歳です。`;
console.log(mes1);

const [name, age] = me;
const mes2 = `私の名前は${name}です。${age}歳です。`;
console.log(mes1);

const say = (name = "ありません") => console.log(`私の名前は${name}です`);
say("ハム");

// スプレッド構文
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sum = (num1, num2) => num1 + num2;
console.log(sum(arr1[0], arr1[1])); //3となる
console.log(sum(...arr1)); //3となる

// // まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(arr3);

// 配列のコピー
const arr4 = [5, 6];
const arr5 = [7, 8];

// const arr6 = arr4;でもコピーはできるが、arr4の参照を引き継ぐのでバグの元になりやすい
const arr6 = [...arr4];
console.log(arr6); //5,6

const arr7 = [...arr4, ...arr5];
console.log(arr7); //5,6,7,8

const nameArr = ["たろう", "じろう", "はな"];
// 普通のfor
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// map
const nameArr2 = nameArr.map((name) => {
  console.log(name);
});

// map省略
nameArr.map((name) => console.log(name));

//map1は第２引数にインデックスをとれる
nameArr.map((name, index) => console.log(name, index));

//filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// mapの練習
const newNameArr = nameArr.map((name) => {
  if (name === "はな") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額";
console.log(fee);

// &&は左側がfalseなら左側を返す、trueなら右側を返す
const num = null;
const fee = num && "金額";
console.log(fee);
