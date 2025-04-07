// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;

// a = 1;
// a = "hello";
// a = {};
a = undefined; // void로 선언할 경우 undefined를 빼고 아무것도 넣을 수 없다.
// a = null; // 원래 넣을 수 없지만 tsconfig.json에서 strictNullChecks 옵션을 false로 바꾸면 쓸 수 있다.

function func3(): undefined {
  // undefined 는 오류 발생
  console.log("hello");
  return undefined; // 실제로 undefined를 반환해야 오류가 안생김
  // or return;
}

function func4(): null {
  console.log("hello");
  return null; // 이것도 마찬가지로 실제 null을 반환해야함.
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func5(): never {
  while (true) {} // 실제로 반환할 수가 없을 때. -> 무한루프에 빠져서 못나옴.
}

function func6(): never {
  throw new Error(); // 실행되면 바로 에러를 뱉기 때문에 이런 경우도 never로
}

let anyVar: any;

let b: never;

// b = 1;
// b = "hello";
// b = {};
// b = undefined; // never로 선언할 경우 undefined도 불가능하다.
// a = null; //  strictNullChecks 옵션을 false로 바꿔도 넣을 수 없다.
// b = anyVar // 어떤 값이든 넣을 수있는 any타입으로 선언해도 넣을 수 없다.
