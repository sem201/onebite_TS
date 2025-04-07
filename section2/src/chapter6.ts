// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {}; // any타입과 마찬가지로 모두 오류 발생 x

num = unknownVar; // error) any타입과는 다르게 넣는 건 불가능

unknownVar.toUpperCase; // error)

if (typeof unknownVar === "number") {
  num = unknownVar; // 이건 가능하다!! -> 타입정제
}
