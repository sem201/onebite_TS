/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "white",
  breed: "푸들",
};

animal = dog; // OK
// dog = animal; // Error

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: "리액트",
  price: 30000,
  skill: "react",
};
book = programmingBook; // OK
// programmingBook = book; // Error

/**.
 * 초과 프로퍼티 검사
 */
let book2: Book = {
  name: "리액트",
  price: 30000,
  //   skill: "react", // Error 객체 리터럴을 사용할때에는 초과 프로퍼티 검사에 걸려서 에러를 발생시킨다.
};

// => 해결 방안
let book3: Book = programmingBook; // 이런식으로 초과프로퍼티 검사를 피할 수 있다.

function func(book: Book) {}
func({ name: "리액트", price: 30000, skill: "react" }); // Error 객체 리터럴을 사용할때에는 초과 프로퍼티 검사에 걸려서 에러를 발생시킨다.

// => 해결 방안
func(programmingBook); // 이런식으로 초과프로퍼티 검사를 피할 수 있다.
