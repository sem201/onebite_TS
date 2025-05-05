/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

// keyof Person : Person 객체의 모든 프로퍼티의 키 들을 유니온으로 가져온다. (type 에서만 쓸수 있음!)
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

// keyof 와 typeof를 연결해서 person2로 선언한 변수의 타입을 추론 -> 타입을 정의
// 한 후에 해당 타입의 프로퍼티 들을 keyof로 뽑아낼 수 도 있다.
function getPropertyKey2(person: Person, key: keyof typeof person2) {
  return person[key];
}

const person: Person = {
  name: "dd",
  age: 27,
};

getPropertyKey(person, "name");

typeof person === "object"; // js에서 typeof 연산자는 객체의 타입을 확인하는 함수임.

// 타입에서 typeof 를 쓰면 선언한 변수로 타입을 추론해서 정의할 수 있다.
type Person2 = typeof person2;

const person2 = {
  name: "dd",
  age: 27,
};
