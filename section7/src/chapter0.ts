/**
 * 제너릭
 */

// 이렇게 하면 다 any 타입으로 추론하기 때문에 좋지않다...
// let num = func(10);
// num.toUpperCase(); // any 타입이기 때문에 오류가 나지 않는다.
// function func(value: any) {
//   return value;
// }

// 제네릭 함수를 이용해서 원하는 함수의 타입을 가변적으로 정의할 수 있다.
function func<T>(value: T): T {
  return value;
}

let num = func(10); // any로 했을때에는 모두 any로 추론되었지만, 제네릭을 사용하면 number로 추론된다.
// value가 number로 추론되기 때문에 제네릭 T가 모두 number로 추론된다.

let bool = func(true);

let srt = func("hello");

let arr = func([1, 2, 3]);

let arr2 = func<[number, number, number]>([1, 2, 3]); // 튜플 타입으로 추론된다.
