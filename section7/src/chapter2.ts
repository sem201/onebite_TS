/**
 * map 메서드
 */

const arr = [1, 2, 3];

const newArr = arr.map((it) => it * 2); // [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());
map(["hi", "hello"], (it) => parseInt(it)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => console.log(it.toFixed())); // 1 2 3
forEach(["123", "456"], (it) => console.log(it)); // 123 456
