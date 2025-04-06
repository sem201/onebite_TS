// 배열
let numArr: number[] = [1, 2, 3];

let srtArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소드르이 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

// tup1 = [1,2,3]; // 에러 - 갯수 초과
// tup1 = ["tt","tt"] // 에러 - 타입 다름름

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["2",1,true]; // 에러 - 순서 바뀜

// 튜플은 자바스크립트에 없음!! 얘를 js로 컴파일 해보면 그냥 배열로 나옴
// -> push,pop등 배열 메서드 사용가능

tup1.push(1);
tup1.pop();
tup1.pop();
// js에서는 튜플이 없기 때문에 실행이 되버림. 예상치 못한 동작에 주의 할것.

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"], // 튜플이 값을 잘못 넣는것을 방지해준다.
];
