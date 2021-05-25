// 타입확인 typeof
console.log(typeof "Hello World!!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);

// 객체 데이터와 배열데이터는 object로 나온다
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

// getType으로 타입 확인
console.log(getType(123))
console.log(getType(false))
// getType 함수를 이용하여 정확하게 표현 가능
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))