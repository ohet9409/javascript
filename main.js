// 타입확인 typeof
// console.log(typeof "Hello World!!");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof undefined);

// // 객체 데이터와 배열데이터는 object로 나온다
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);

// function getType(data) {
//     return Object.prototype.toString.call(data).slice(8, -1)
// }

// // getType으로 타입 확인
// console.log(getType(123))
// console.log(getType(false))
// // getType 함수를 이용하여 정확하게 표현 가능
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))

// 산술 연산자(arithmetic operator)
console.log(1 + 2)
console.log(5 - 2)
console.log(9 * 2)
console.log(10 / 2)
console.log(9 % 2)

// 할당 연산자(aaignment operator)
// const: 재할당 불가
const a = 2
console.log(a)
// let: 재할당 가능
let b = 1
// b = b + 4
b += 4
console.log(b)