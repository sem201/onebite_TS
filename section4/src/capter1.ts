/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number; // 변수 타입 하는 것처럼 함수에도 이용 가능하다.
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b; // Operation 타입을 이용하여 sub함수도 만들 수 있다.
const mul: Operation = (a, b) => a * b; // Operation 타입을 이용하여 mul함수도 만들 수 있다.

// 하나의 타입 정의로 중복함수 삭제

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
  (a: number, b: number): number;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b; // Operation 타입을 이용하여 sub함수도 만들 수 있다.
const mul2: Operation2 = (a, b) => a * b; // Operation 타입을 이용하여 mul함수도 만들 수 있다.
