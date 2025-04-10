// unknown 타입

function unknownExam() {
  // 아래는 업 캐스팅이라 문제 없이 됨
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 아래는 다운 캐스팅이므로 당연히 안됨
  let unknownvar: unknown;
  //   let num: number = unknownvar;
  //   let num: string = unknownvar;
  //   let num: boolean = unknownvar;
}

// Never 타입
// 모든 타입의 서브타입 => 공집합

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 1; // Error
  //   let never2: never = "hello"; // Error
  //   let never3: never = true; // Error
}

// void 타입
function voidExam() {
  // void 타입은 undefuned의 슈퍼 타입이다.
  function voidFunc(): void {
    console.log("hello world");
  }

  let voidcar: void = undefined; // OK
}

// any 타입
function anyExam() {
  let unknownvar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownvar; // any 타입이 unknown 타입의 서브타입이지만 다운 캐스팅이 가능하다.

  undefinedVar = anyVar; // any 타입은 타입 계층을 싹 무시하고 가능하다.
  neverVar = anyVar; // never 타입까지 다운캐스팅은 불가능하다....

  //   let never1: never = anyvar; // Error
  //   let never2: never = anyvar; // Error
}
