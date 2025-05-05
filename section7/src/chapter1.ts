/**
 * 첫번째 사례
 */

function swap<T>(a: T, b: T) {
  return [b, a];
}

function swap2<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, 2); // number로 추론된다.
const [c, d] = swap("1", 2); // error 발생 (T가 string으로 추론됨)
const [e, f] = swap2("1", 2); // error 해결

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  // 첫번째 인자만 관심이있음. 나머지 인자는 unknown으로 처리
  return data[0];
}

let num = returnFirstValue([1, 2, 3]); // 0

let str = returnFirstValue(["a", "b", "c"]); // a

let str2 = returnFirstValue2([1, "b", "c"]); //

/**
 * 세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  // number 타입의 프로퍼티 length를 가지고있는 타입만 가능
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
