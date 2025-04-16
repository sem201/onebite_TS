/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};
let person = {} as Person; // 타입 단언을 사용하여 person 변수를 Person 타입으로 단언함
person.name = "kim";
person.age = 10;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "dog",
  color: "black",
  breed: "진도", // 추가 프로퍼티를 넣어야할때 !
} as Dog; // Dog 타입으로 단언함 -> 오류 사라짐

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함.
 */

let num1 = 10 as never; // 19(A) 가 B(never)의 슈퍼타입이므로 단언 가능
let num2 = 10 as unknown; // 10(A) 가 unknown(B)의 슈퍼타입이므로 단언 가능
// let num3 = 10 as string; // 10(a) 와 string(B)는 서로 다른 타입이므로 단언 불가능
let num4 = 10 as unknown as string; //10(A)가 unknown(B)의 슈퍼타입이므로 -> string(C)의 슈퍼타입이므로 단언 가능 / 단 좋은 방법은 아님.

/**
 * const 단언
 */

let num5 = 10 as const; // as const가 없으면 number 타입으로 추론됨 -> as const가 있으면 10이라는 리터럴 타입으로 추론됨
let cat = {
  name: "cat",
  color: "black",
} as const; // as const가 없으면 { name: string; color: string; } 타입으로 추론됨 -> as const가 있으면 readonly로 바뀜

// cat.name = "dog"; // 오류 발생 -> 읽기 전용 속성이므로 할당 불가능

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // 익명 고려
};

let post: Post = {
  title: "hello",
  author: "kim",
};

const len: number = post.author?.length; // Post 타입의 author 속성이 undefined일 수 있음을 고려하여 ?(옵셔널 체이닝) 연산자를 이용했음.
// 단 이때 undefined일 경우 len은 undefined가 됨. -> number로 정의해줬기 때문에 오류 발생

const len2: number = post.author!.length; // Non Null 단언을 사용하여 author 속성이 undefined가 아님을 단언함.
