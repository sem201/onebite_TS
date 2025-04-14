/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다.
 */

import { interceptors } from "../node_modules/undici/index";

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean; // string 타입과 number 타입을 합친 Union 타입이 된것.
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true]; // Union 타입을 배열로 사용한 예시

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  // 양쪽 모두를 포함한 교집합
  name: "",
  color: "",
  language: "",
}; // Union 타입은 서로 다른 타입을 합친것이기 때문에 서로 다른 프로퍼티를 가지고 있는 객체를 생성할 수 있다.

// let union4: Union1 = {
//   name: "", // 이렇게 하면 오류 발생
// };

/**
 * 2. 교집합 - Intersection 타입
 */

let variable: number & string; // number 타입과 string 타입의 교집합이 없기 때문에 never 타입이 된다. => 보통 객체 타입에서 많이 사용한다.

// type Dog = {
//     name: string;
//     color: string;
//   };

//   type Person = {
//     name: string;
//     language: string;
//   };

type Intersection = Dog & Person;

let intersection1: Intersection = {
  // 교집합에 들어가는 타입 즉 Dog 타입과 Person 타입을 모두 포함해야한다.
  name: "기린",
  color: "yellow",
  language: "korean",
};
