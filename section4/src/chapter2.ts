/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급핻 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b=a; // 에러 발생

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 여기는 반대로 에러가 발생
c = d; // 에러 발생
d = c;

// 예시
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name, dog.color);
};

animalFunc = dogFunc;
dogFunc = animalFunc;

let testfunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); // 이해하기 쉽게 코드로 작성해보면 이런 느낌의 코드가 되는 것임.. => 당연히 오류가 발생함
};

let testfunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1; // 에러 발생
