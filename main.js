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
// console.log(1 + 2) // 더하기
// console.log(5 - 2) // 빼기
// console.log(9 * 2) // 곱하기
// console.log(10 / 2) // 나누기
// console.log(9 % 2) // 나머지

// // 할당 연산자(aaignment operator)
// // const: 재할당 불가
// const a = 2
// console.log(a)
// // let: 재할당 가능
// let b = 1
// // b = b + 4
// b += 4
// console.log(b)

// 비교 연산자(comparison operator)
// const a = 1
// const b = 3
// //  일치 연산자
// console.log(a === b)
// // 일치 연산자를 이용한 함수 생성
// function isEqual(x, y){
//     return x === y
// }
// console.log(isEqual(1,1))
// // 데이터 형이 다르기 때문에 false 출력
// console.log(isEqual("1",1))
// // 서로 다른 값인지 확인하는 연산자
// console.log(a !== b)
// // a가 b보다 큰지 확인하는 연산자
// console.log(a > b)
// // = 기호를 반드시 뒤쪽에 위치 시켜야 한다
// console.log(a >= b)

// // 논리 연산자
// const a1 = 1 === 1
// const b1 = 'AB' === 'AB'
// const c1 = false

// console.log(a1)
// console.log(b1)
// console.log(c1)

// // and 연산자: 모두 true 일때 true 반환
// console.log('&&: ', a1 && b1 && c1 )
// // or 연산자: 한가지 값이 true이면 true 반환
// console.log('||: ', a1 || b1 || c1 )
// // not 연산자: 반대값을 출력
// console.log('!: ', !a1 )

// 삼항 연산자(ternary operator)
const a = 1 < 2

if (a) {
    console.log('참')
} else {
    console.log('거짓')
}
// true이면 첫번째, false이면 두번째 값 출력
console.log(a ? '참' : '거짓')