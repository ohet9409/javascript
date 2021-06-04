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
// const result = 'Hello World!'.indexOf('World')
// console.log(result)

// const str = '0123'
// // 글자 길이를 출력
// console.log(str.length)
// console.log('12 33'.length)

// const str2 = 'Hello world!'
// // boolean 데이터로 확인하는 방법
// console.log(str2.indexOf('aaa') !== -1)
// console.log(str2.indexOf('wor'))
// // 문자를 자르는 함수(시작번호, 끝번호) / 0 1 2
// console.log(str2.slice(0,3))
// console.log(str2.slice(6,11))
// // 특정 문자를 원하는 문자로 바꾸는 함수
// console.log(str2.replace('world', 'happy'))
// console.log(str2.replace(' world!', ''))

// const str3 = 'happy@naver.com'
// // 정규표현식을 이용해서 특정문자 배열위치를 찾아서 추출
// console.log(str3.match(/.+(?=@)/)[0])
// // 정규표현식 배열 확인
// console.log(str3.match(/.+(?=@)/))

// const str4 = '    Hello    world   '
// // 특정문자의 맨 앞, 맨 뒤 공백을 제거
// console.log(str4.trim())

// ============================================
// JS 데이터 - 숫자(수학)
// const pi = 3.141592
// console.log(pi)

// // 소수점 2자리만 보여줌
// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)

// // 정수형으로 변환하여 정수부분만 반환
// const integer = parseInt(str)
// // 실수형으로 변환하여 소수점까지 반환
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)

// 수학 메소드 예제
// 특정한 숫자의 절대값 출력
// console.log('abs: ', Math.abs(-12))

// // 인수로 들어온 숫자들 중에 가장 작은 값 출력
// console.log('min: ', Math.min(2, 8))

// // 인수로 들어온 숫자들 중에 가장 큰 값 출력
// console.log('max: ', Math.max(2, 8))

// // 인수로 들어온 숫자 데이터를 올림 처리(기본적으로 정수 단위로 올림 처리)
// console.log('ceil: ', Math.ceil(3.14))

// // 인수로 들어온 숫자 데이터를 내림 처리(기본적으로 정수 단위로 내림 처리)
// console.log('floor: ', Math.floor(3.14))

// // 인수로 들어온 숫자 데이터를 반올림 처리(기본적으로 정수 단위로 반올림 처리)
// console.log('round: ', Math.round(3.14))
// console.log('round: ', Math.round(3.5))

// //  랜덤값 반환
// console.log('random: ', Math.random())

// ===================================================
// JS 데이터 - 배열 api
// 배열 데이터 생성
// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(number)
// // 첫번째 데이터 출력
// console.log(number[0])

// console.log(fruits)
// // 마지막 데이터 출력
// console.log(fruits[2])

// .length 속성
// 배열의 갯수를 반환
// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(number.length)
// console.log(fruits.length)
// console.log([1, 2].length)
// console.log([].length)

// .concat()
// 배열 데이터를 병합 하여 반환(원본의 데이터는 수정되지 않는다)
// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(number.concat(fruits))
// console.log(number)
// console.log(fruits)

// .forEach()
// 배열 데이터의 갯수 만큼 반복
// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// // 콜백함수 실행
// // element: 배열의 데이터
// // index: 현재 배열 데이터의 위치
// // array: 배열 데이터
// fruits.forEach(function (element, index, array) {
//   console.log(element, index, array)
// })

// .map()
// 배열 데이터의 갯수 만큼 반복 실행하여 반환된 데이터를 새로운 배열에 담는다
// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']//  . 

// const a = fruits.forEach(function (fruit, index) {
//   console.log(`${fruit} - ${index}`)
// })
// console.log(a)

// // 콜백함수 실행
// const b = fruits.map(function (fruit, index) {
//   return `${fruit} - ${index}`
// })
// console.log(b)

// const c = fruits.map(function (fruit, index) {
//   // 배열데이터에 객체 데이터 생성 예
//   return {
//     id: index,
//     name: fruit
//   }
// })
// console.log(c)

// 화살표 함수로 변환
// 콜백함수 실행
// const b = fruits.map((fruit, index) => {
//   return `${fruit} - ${index}`
// })
// console.log(b)

// const c = fruits.map((fruit, index) => ({
//   id: index,
//     name: fruit
// }))
// console.log(c)

// ==============================================

//  .filter()
//  지정한 배열안의 데이터를 필터링하여 조건에 맞는 데이터를 반환한다
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => {
//   // true, false 반환
//   return number < 3
// })
// console.log(a)

// const b = numbers.filter(number => {
//   // 3보다 작은 데이터만 반환하여 새로운 배열에 입력
//   return number < 3
// })
// console.log(b)

// 화살표 함수 최적화 변환
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => number < 3 )
// console.log(a)

// const b = numbers.filter(number => number < 3 )
// console.log(b)

// .find() .findIndex()
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry', 'Boat']

// const a = fruits.find(fruit => {
//   // 대문자 B로 시작하는 데이터를 반환
//   // 찾은 후 종료됨
//   return /^B/.test(fruit)
// })
// console.log(a)

// // 찾아진 데이터의 위치값을 반환
// const b = fruits.findIndex(fruit => {
//   // 대문자 B로 시작하는 데이터를 반환
//   // 찾은 후 종료됨
//   return /^B/.test(fruit)
// })
// console.log(b)

// // 간소화 표현
// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a)

// // 찾아진 데이터의 위치값을 반환
// const b = fruits.findIndex(fruit => /^B/.test(fruit))
// console.log(b)

// .includes()
// 배열데이터에 해당 데이터가 포함되어있는지 boolean 데이터로 반환
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry', 'Boat']

// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('happy')
// console.log(b)

// push() .unshift()
// 원본 수정됨  주의!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry', 'Boat']

// 가장 마지막에 데이터를 추가
// numbers.push(5)
// console.log(numbers)

// 가장 첫번째에 데이터를 추가
// numbers.unshift(0)
// console.log(numbers)

// .reverse()
// 원본 수정됨 주의!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry', 'Boat']

// // 순서를 거꾸로 변환
// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)

// .splice()
// 원본 수정됨 주의!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry', 'Boat']

// // 인덱스 번호 2번에 데이터 1가지를 제거
// numbers.splice(2, 1)
// console.log(numbers)

// // 2번째 데이터의 999를 추가(그 뒤는 밀림 처리)
// numbers.splice(2, 0, 999)
// console.log(numbers)

// ======================================
// Object 예제
// const userAge = {
//   // Key: value
//   name: 'happy',
//   age: 48
// }

// const userEmail = {
//   name: 'happy',
//   email: 'happy@naver.com'
// }
// // 원본을 유지하는 방법
// const target = Object.assign({}, userAge, userEmail)
// console.log(target)
// console.log(userAge)
// // 같은 메모리를 바라보기 때문에 true 반환
// console.log(target === userAge)


// // 정적메소드: 복사 기능
// const target2 = Object.assign(userAge, userEmail)
// console.log(target2)
// console.log(userAge)
// // 같은 메모리를 바라보기 때문에 true 반환
// console.log(target2 === userAge)


// const a = { k: 123}
// const b = { k: 123}
// // 메모리 주소가 다르기 때문에 false 반환
// console.log(a === b)

// const user = {
//   name: 'happy',
//   age: 90,
//   email: 'happy@navver.com'
// }

// const keys = Object.keys(user)
// console.log(keys)
// // ['name', 'age', 'email']

// // 인덱싱 방식
// console.log(user['email'])

// // key라는 매개변수이름은 변경할 수 있음
// // key에 해당하는 값들만 추출해서 배열데이터로 만들수있음
// const values = keys.map(key => user[key])
// console.log(values)

// ======================================

// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
// const user = {
//   name: 'happy',
//   age: 43,
//   email: 'happy@naver.com'
// }

// 배열의 원하는 데이터만 뽑아서 선언 할 수있다.
// const {name, age, email, address } = user

// 기본값 설정가능(기존값이 있을경우 재지정 불가) address='korea'
// 데이터 명칭을 사용자가 바꿔서 사용할 수 있음 name: happy
// const {name: happy, age, email, address='korea' } = user

// console.log(`사용자의 이름은 ${name} 입니다.`)
// console.log(`${name}의 나이는 ${age}입니다`)
// console.log(`${happy}의 이메일 주소는 ${user.email}입니다`)
// console.log(address)



// const fruits = ['Apple', 'Banana', 'Cherry']
// // const [a, b, c, d] = fruits
// // console.log(a, b, c, d)
// // 원하는 데이터만 추출하는 방법
// const [, b] = fruits
// console.log(b)

// =============================================

// 전개 연산자 (spread)
// const fruits = ['Apple', 'Banana', 'Cherry','Orange']
// // 배열 데이터 출력됨
// console.log(fruits)
// // 문자 데이터 형태로 출력됨
// console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry')

// 배열데이터를 문자형으로 추출하여 객체데이터로 값을 넣어주는 함수 예제
// function toObject(a, b, c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }

// console.log(toObject(...fruits))
// // 전개 연산자와 같은 결과를 내기 위해서는 하나씩 지정해주어야 한다.
// console.log(toObject(fruits[0],fruits[1], fruits[2]))

// 매개변수에 전개 연산자 사용(나머지 매개변수)
// function toObject2(a, b, ...c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }

// 축약형
// key값과 value값이 같기 때문에 아래와 같이 사용할 수 있음
// function toObject2(a, b, ...c) {
//   return {
//     a,
//     b,
//     c
//   }
// }

// 화살표 함수로 변환
// const toObject2 = (a, b, ...c) => ({a, b, c})

// console.log(toObject2(...fruits))

// ====================================================

// 데이터 불변성(Immutablility)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function
// let a = 1;
// let b = 4
// console.log(a, b, a === b)

// b = a 
// // 같은 메모리 주소를 바라보기 때문에 true
// console.log(a, b, a === b)

// a = 7
// console.log(a, b, a === b)

// let c = 1
// // 기존의 1이라는 메모리를 바라보기 때문에 true
// console.log(b, c, b === c)

// let a = { k: 1}
// let b = { k: 1}
// console.log(a, b, a === b)
// a.k = 7
// b = a
// // b 는 a의 메모리 주소를 바라보게 되기 때문에 true
// console.log(a, b, a === b)
// a.k = 2
// // a의 데이터를 수정해도 b는 a의 메모리를 바라보기 때문에 true (값이 자동으로 b 또한 변한다.)
// console.log(a, b, a === b)
// let c = b
// console.log(a, b, c, a === c)

// ===========================================================
// lodash 사용
// import _ from 'lodash'
// // 얕은 복사(Shallow copy), 깊은 복사 (Deep copy)
// const user = {
//   name: 'happy',
//   age: 33,
//   email: ['happy@naver.com'] 
// }
// const copyUser = user
// console.log(copyUser === user)

// // 바라보고 있는 쪽의 데이터가 변하면 참조하고있는 데이터 또한 변한다.
// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// console.log('----------')
// console.log('----------')

//  얕은 복사
//  {}: 대상 객체, user: 참조 객체 (새로운 메모리주소가 할당 된다)
// const copyUser2 = Object.assign({}, user)
//  전개 연산자를 이용해서 사용 가능
// const copyUser2 = {...user}
// console.log(copyUser2 === user)
// // 기존의 데이터가 변해도 참조하고 있는 데이터는 변하지 않는다.
// user.age = 99
// console.log('user', user)
// console.log('copyUser2', copyUser2)

// // email은 배열 형태이기 때문에 기존의 메모리를 그대로 바라보고 있다.
// user.email.push('hi@naver.com')
// console.log(user.email === copyUser2.email)
// console.log('user.email', user.email)
// console.log('copyUser2.email', copyUser2.email)
// console.log('----------')
// console.log('----------')
// // 깊은 복사
// const copyUser3 = _.cloneDeep(user)
// console.log(copyUser3 === user)
// // 기존의 데이터가 변해도 참조하고 있는 데이터는 변하지 않는다.
// user.age = 99
// console.log('user', user)
// console.log('copyUser3', copyUser3)
// user.email.push('hello@naver.com')
// console.log(user.email === copyUser2.email)
// console.log('user.email', user.email)
// // 참조데이터안의 참조데이터 또한 새로 메모리가 생성되어 함께 변하지 않는다.
// console.log('copyUser3.email', copyUser3.email)

// ================================================
// import _ from 'lodash'  // From 'node_modules' !
// import getType from './getType' // getType.js
// // import getRandom from './getRandom' // getRandom.js
// // import {random, user} from './getRandom'
// import * as R from './getRandom'


// console.log(_.camelCase('the hello world'))
// console.log(getType([1, 2, 3]))
// // console.log(getRandom(), getRandom())
// // console.log(random(), random())
// // console.log(user)
// console.log(R)
// console.log(R.random())

// =====================================
// lodash 사용법
//  선언
// import _ from 'lodash'

// const userA = [
//   { userId: '1', name: 'happy'},
//   { userId: '2', name: 'neo'}
// ]
// const userB = [
//   { userId: '1', name: 'happy1'},
//   { userId: '3', name: 'amy'}
// ]

// // userA에 userB 데이터를 합쳐서 userC에 저장
// const userC = userA.concat(userB)
// console.log('concat', userC)

// // userId의 중복 값을 제거 (뒤에 데이터를 제거 한다.)
// console.log('uniqBy', _.uniqBy(userC, 'userId'))

// // userId의 중복 없이 userA, userB 데이터를 합쳐서 userD에 저장
// const userD = _.unionBy(userA, userB, 'userId')
// console.log('unionBy', userD)

// const users = [
//   { userId: '1', name: 'happy'},
//   { userId: '2', name: 'neo'},
//   { userId: '3', name: 'evan'},
//   { userId: '4', name: 'lea'},
//   { userId: '5', name: 'yaa'}
// ]

// // users라는 배열 데이터에서 name값이 evan인 데이터를 찾는다.
// const foundUser = _.find(users, {name: 'evan'})
// console.log(foundUser)

// // users라는 배열 데이터에서 name값이 evan인 index 번호를 찾는다. 0부터 시작
// const foundUserIndex = _.findIndex(users, {name: 'evan'})
// console.log(foundUserIndex)

// // users라는 배열 데이터에서 name 값이 happy인 데이터를 제거한다.
// _.remove(users, {name: 'happy'})
// console.log(users)

// ========================================================
// JSON 
// 자바스크립트의 객체 표기법
// json 파일 가져오기
// import myData from './myData.json'
// console.log(myData)

// const user = {
//   name: 'happy',
//   age: 89,
//   email: [
//     'ttt@naver.com',
//     'eee@naver.com'
//   ]
// }
// console.log('user', user)

// // json형식 (문자데이터)으로 변환
// const str = JSON.stringify(user)
// console.log('str', str)
// console.log(typeof str)

// // 자바스크립트에서 해석되는 객체로 저장
// const obj = JSON.parse(str)
// console.log('obj', obj)

// =============================================
// Storage
// const user = {
//   name: 'happy',
//   age: 85,
//   email: [
//     'ttt@naver.com',
//     'nnn@naver.com'
//   ]
// }

// 저장소에 데이터 저장
// localStorage.setItem('user', user)

// // 문자 데이터로 저장
// localStorage.setItem('user2', JSON.stringify(user))

// // 로컬 저장소에서 데이터 가져오기
// console.log(localStorage.getItem('user2'))

// // 객체 데이터로 변환하여 콘솔에 출력
// console.log(JSON.parse(localStorage.getItem('user2')))

// // 로컬저장소에 데이터를 수정하는 방법
// const str = localStorage.getItem('user2')
// const obj = JSON.parse(str)
// obj.age = 22
// console.log(obj)
// localStorage.setItem('user2', JSON.stringify(obj))

// // 로컬저장소에 데이터를 제거
// localStorage.removeItem('user2')

// ================================================

// omdb api
// axios 패키지 사용(HTTP 요청을 처리하기 위해)
import axios from 'axios'
function fetchMovies() {
  // apikey= 발급받은 api key, s= 검색하고자 하는 영화 제목
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    // url에 해당하는 정보를 처리하는 구문
    .then((res) => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Tilte
      imgEl.src = res.data.Search[0].Poster
    })
}
// 실행
fetchMovies()