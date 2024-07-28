// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach((item, idx, arr) => {
  console.log(item, idx, arr)
});

// 배열에 데이터 삽입
let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item*2);
})

console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(2);  // true / false 반환
console.log(isInclude)

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2,2,3];
let index = arr3.indexOf(3); // 같은 값이 있을 경우 처음 발견된 데이터 위치 반환
console.log(index);

let objectArr = [
  {name: "lee"},
  {name: "han"}
];

// 객체를 찾을수는 없다.
console.log('objectArr.indexOf({name: "han"})', objectArr.indexOf({name: "han"}));

console.log('objectArr.findInx((item) => {item.name === "lee"}', objectArr.findIndex((item) => {item.name === "lee"}));

// 4. findIndex
// 모든 갳게를 순회하면서, 콜백함수를 호출
// 특정 객체의 인덱스(위치)를 반환하는 메서드
let arr4 = [1,2,3];
const abc = arr4.findIndex(
  (item,idx,arr) => {
    console.log('item', item)
   return item === 2
  }
)
console.log(abc);

// 5. find
// 모든 객체를 순회하면서 콜백함수에 만족하는 객체를 반환
let arr5 = [
  { name: "lee", age: 29},
  { name: "han", age: 33}
];

const aa  = arr5.find(
  (item) => {
    console.log('item', item)
    return item.age < 30
  }
)

console.log('aa', aa)
