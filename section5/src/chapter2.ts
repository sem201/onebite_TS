/**
 * 선언 합침
 */

// type Person 2개를 동일하게 정의하면 에러 발생
type Person = {
  name: string;
};
type Person = {
  name: string;
};

// interface Person2 2개를 동일하게 정의해도 에러 발생 X 동일하게 선언된 인터페이스들은 다 합쳐짐.
interface Person2 {
  name: string;
}
interface Person2 {
  //   name: number; // 이렇게 동일한 프로퍼티를 다른 타입으로 정의해버리면 에러 발생
  //   name:"name"; // 인터페이스 확장과 다르게 서브타입으로 정의하더라도 에러가 발생한다.
  age: number;
}

const Person2: Person2 = {
  name: "kim",
  age: 20,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
