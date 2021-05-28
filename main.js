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
// ------------------------------
// 형 변환(Type conversion)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -11, '3.44'.....

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0 -0, NaN

// const a = 1;
// const b = '1';
// // 일치 연산자 false
// console.log(a === b)
// // 동등 연산자(형변환이 일어난다) true
// // 안쓰는 것을 권장한다.
// console.log(a == b)

// if (true) {
//     console.log(123)
// }

// if (null) {
//     console.log(999)
// }

// ------------------------------------------

// 매개변수로 지정해야할 값이 너무 많을 경우 arguments 객체 사용하여 일괄적으로 사용할수있다
// function sum() {

//     console.log(arguments)
    
//     return arguments[0] + arguments[1] + arguments[2] + arguments[3]
// }
// console.log(sum(1, 5, 9,4))
// ===============================================
// 화살표 함수
// () => {} vs function () {}
// const double = function (x) {
//     return x * 2
// }

// console.log('double: ', double(7))

// const doubleArrow = (x) => {
//     return x * 2
// }
// console.log('doubleArrow: ', doubleArrow(5))

// // 화살표 함수는 축약형으로 표현이 가능하다
// const doubleArrow2 = x => x * 8

// console.log('doubleArrow: ', doubleArrow2(5))

// // 매개변수가 2개 이상일 경우 () 입력
// const doubleArrow3 = (x, y) => x * 8 + y

// console.log('doubleArrow: ', doubleArrow3(5,2))

// // 객체 데이터를 반환하는 방법 대괄호{}를 소괄호()로 감싸줘야 한다.
// const doubleArrow4 = (x, y) => ({
//     name: 'oh',
//     X: x,
//     Y: y
// })

// console.log('doubleArrow: ', doubleArrow4(5,2))
// ====================================================

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression
// const a = 7
// // 일반 함수 예제
// function double() {
//     console.log(a * 2)
// }
// double();

// //즉시실행함수 예제(앞에 함수에 반드시 끝났다는 표시에 ; 을 입력해주어야 한다)
// (function () {
//     console.log("즉시 실행", a + 3)
// })();

// (function () {
//     console.log("즉시 실행", a + 3 *8)
// }());

// =================================================

// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어 올려지는 현상
// const a = 7

// // 호이스팅 현상 발생
// double()

// function double() {
//     console.log(a * 2)
// }

// =====================================

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// 3초뒤 실행하는 함수
// const timer = setTimeout(function () {
//     console.log('안녕!!')
// }, 3000)

// // 화살표 함수
// setTimeout( () => {
//     console.log('화살표 함수 안녕!!')
// }, 3000)

// // h1태그를 클릭하면 timeout이 종료되도록 선언
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     // 종료할 타이머함수 변수를 입력
//     clearTimeout(timer)
// })

// // 3초마다 함수 호출
// const interval = setInterval(function () {
//     console.log('안녕!!')
// }, 3000)

// // h1태그를 클릭하면 Interval이 종료되도록 선언
// const h1El2 = document.querySelector('h1')
// h1El2.addEventListener('click', function() {
//     // 종료할 타이머함수 변수를 입력
//     clearInterval(interval)
// })

// ====================================================

// 콜백(callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// function timeout(cb) {
//     setTimeout(() => {
//         console.log('안녕하세요');
//         // 원하는 출력 위치에 콜백함수 입력
//         cb();
//     }, 4000);
// }
// // timeout()
// // 콜백함수 설정
// timeout(() => {
//     console.log('콜백함수')
// })

// console.log('먼저 출력')

// ========================================

// const happy = {
//     first_name: 'Happy',
//     last_name: 'oh',
//     getFullName: function () {
//         return `${this.first_name} ${this.last_name}`
//     }
// }
// console.log(happy)
// console.log(happy.getFullName())

// const amy = {
//     first_name: 'Amy',
//     last_name: 'Clarke',
//     getFullName: function() {
//         return `${this.first_name} ${this.last_name}`
//     }
// }

// console.log(amy)
// console.log(amy.getFullName())

// const neo = {
//     first_name: 'Neo',
//     last_name: 'Smith',
//     getFullName: function() {
//         return `${this.first_name} ${this.last_name}`
//     }
// }

// console.log(neo)
// console.log(neo.getFullName())

// // 클래스 예제
// // 파스칼 케이스를 이용하여 첫문자를 대문자로 입력
// function User(first, last) {
//     this.first_name = first
//     this.last_name = last
// }
// // prototyper을 통해서 getFullName이라는 함수를 참조할 수 있도록 설정
// User.prototype.getFullName = function () {
//     return `${this.first_name} ${this.last_name}`
// } 
// //  생성자 함수
// //  받는 변수들은 인스턴스라고 불린다.
// const happy1 = new User('happy', 'oh')
// const amy1 = new User('Amy', 'Clarke')
// const neo1 = new User('Neo', 'Smith')

// console.log(happy1)
// console.log(happy1.getFullName())
// console.log(amy1)
// console.log(neo1)

// ======================================

// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

// const happy = {
//     name: 'Happy',
//     normal: function() {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }

// happy.normal()
// happy.arrow()

// const amy = {
//     name: 'Amy',
//     //happy의 함수 자체가 할당되는 구조 (소괄호()를 입력안했기 때문에 함수를 호출하는 것이 아니다
//     normal: happy.normal,
//     arrow: happy.arrow
// }

// amy.normal()
// amy.arrow()

// // 생성자 함수 이용
// function User (name) {
//     this.name = name
// }
// User.prototype.normal3 = function(){
//     console.log(this.name)
// }
// User.prototype.arrow2 = () => {
//     console.log(this.name)
// }
// const happy2 = new User('Happy')
// happy2.normal3()
// happy2.arrow2()

// // 타이머 함수 이용
// const timer = {
//     name: 'Happy',
//     timeout: function() {
//         // 2초뒤 함수 호출
//         // 일반함수는 setTimeout내부에 어딘가에서 호출되기 때문에 undefined 가 호출된다
//         // setTimeout(function() {
//         //     console.log(this.name)
//         // }, 2000)
//         // 화살표함수는 선언된 함수 범위에서 this가 정의 되기 때문에 정상 출력
//         setTimeout(() => {
//             console.log(this.name)
//         }, 2000)
//     }
// }
// timer.timeout()

// const timer2 = {
//     name: 'Happy',
//     timeout: () => {
//         // 2초뒤 함수 호출
//         // 일반함수는 setTimeout내부에 어딘가에서 호출되기 때문에 undefined 가 호출된다
//         // setTimeout(function() {
//         //     console.log(this.name)
//         // }, 2000)
//         // 화살표함수는 선언된 함수 범위에서 this가 정의 되기 때문에 정상 출력
//         setTimeout(() => {
//             console.log(this.name)
//         }, 2000)
//     }
// }
// timer2.timeout()

// ES6 Classes
// const happy = {
//     name: 'happy',
//     normal(){
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }

// happy.normal()
// happy.arrow()

// // function User(first, last) {
// //     this.firstName = first
// //     this.lastName = last
// // }
// // User.prototype.getFullName = function () {
// //     return `${this.firstName} ${this.lastName}`
// // }

// class User {
//     constructor(first, last) {
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const happy2 = new User('Happy', 'Oh')
// const amy = new User('amy', 'Clack')
// const neo = new User('Neo', 'Smith')

// console.log(happy2)
// console.log(amy.getFullName())
// console.log(neo.getFullName())

// class Vehicle {
//     constructor(name, wheel){
//         this.name = name
//         this.wheel = wheel
//     }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// //  확장(상속)
// class Bicycle extends Vehicle {
//     constructor(name, wheel){
//         // Vehicle 클래스를 의미
//         super(name, wheel)
//     }
// }
// const myBicycle = new Bicycle('자전거', 2)
// const daughtersBicycle = new Bicycle('세발자전거', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         // Vehicle 클래스를 의미
//         super(name, wheel)
//         // 새로운 로직 추가
//         this.license = license
//     }
// }
// const myCar = new Car('자동차', 4, '2종')
// const daughtersCar = new Car('작은자동차', 4, '2종')
// console.log(myCar)
// console.log(daughtersCar)
// =====================================================
// JS 데이터 - 문자
// 문자위치값을 가져오는 함수 0부터 시작, 찾지못하면 -1 반환
const result = 'Hello World!'.indexOf('World')
console.log(result)

const str = '0123'
// 글자 길이를 출력
console.log(str.length)
console.log('12 33'.length)

const str2 = 'Hello world!'
// boolean 데이터로 확인하는 방법
console.log(str2.indexOf('aaa') !== -1)
console.log(str2.indexOf('wor'))
// 문자를 자르는 함수(시작번호, 끝번호) / 0 1 2
console.log(str2.slice(0,3))
console.log(str2.slice(6,11))
// 특정 문자를 원하는 문자로 바꾸는 함수
console.log(str2.replace('world', 'happy'))
console.log(str2.replace(' world!', ''))

const str3 = 'happy@naver.com'
// 정규표현식을 이용해서 특정문자 배열위치를 찾아서 추출
console.log(str3.match(/.+(?=@)/)[0])
// 정규표현식 배열 확인
console.log(str3.match(/.+(?=@)/))

const str4 = '    Hello    world   '
// 특정문자의 맨 앞, 맨 뒤 공백을 제거
console.log(str4.trim())