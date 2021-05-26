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
// const a = 1 < 2

// if (a) {
//     console.log('참')
// } else {
//     console.log('거짓')
// }
// // true이면 첫번째, false이면 두번째 값 출력
// console.log(a ? '참' : '거짓')

// import random from './getRandom'
// // 조건문
// const a = random()

// // 중간에 맞는 조건이 있으면 나머지 조건은 무시한다
// if(a === 0) {
//     console.log('a is 0')
// } else if (a === 2) {
//     console.log('a is 2')
// } else {
//     console.log('rest....')
// }

// // 조건이 어떠한 값으로 딱 떨어질때 더 적합하다
// switch (a) {
//     case 0:
//         console.log('a is 0')
//         break;

//     case 2:
//         console.log('a is 2')
//         break;

//     case 3:
//         console.log('a is 3')
//          break;

//     default:
//         console.log('rest...')
        
// }


// 반복문(For statement)
// for (시작조건; 종료조건; 변화조건) {}
// ul태그 요소를 가져온다.
// const ulEl = document.querySelector('ul')
// console.log(ulEl)
// // i++: 반복 한 번 돌고 1씩 증가
// for (let i = 0; i < 3; i++) {
//     // console.log(i)
//     // li 태그 생성
//     const li = document.createElement('li')
//     // 보간 처리
//     // li 태그 내용 입력
//     li.textContent = `list-${i + 1}`

//     //짝수를 눌렀을때 이벤트 작동
//     if ((i+1) % 2 === 0){
//         // li태그 클릭 할 때마다 li태그 내용 콘솔에 출력
//         li.addEventListener('click', function () {
//         console.log(li.textContent)
//         })
//     }
//     // ul 태그 밑에 li태그 붙이기
//     ulEl.appendChild(li)
// }

// 번수 유효범위(Variable Scope)
// var, let, const
// let, const: 블록레벨의 유효범위를 가진다
// var: 함수레벨의 유효범위를 가진다
// function scope() {
//     if (true) {
//         const a = 123;
//         console.log(a)
//         var b = 222;
//     }
//     console.log(b)
//     // console.log(a) //에러발생
// }
// // console.log(b) //에러발생
// scope()

// 형 변환(Type conversion)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -11, '3.44'.....

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0 -0, NaN

const a = 1;
const b = '1';
// 일치 연산자 false
console.log(a === b)
// 동등 연산자(형변환이 일어난다) true
// 안쓰는 것을 권장한다.
console.log(a == b)

if (true) {
    console.log(123)
}

if (null) {
    console.log(999)
}