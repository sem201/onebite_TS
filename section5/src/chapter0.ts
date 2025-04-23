/**
 * 인터페이스
 */
interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void;
}
type Type1 = string | number | boolean;
// 타입에서는 union 타입이 가능하지만 interface에서는 union 타입이 불가능하다.

const Person: Person = {
  name: "kim",
  age: 20,
  sayHi: function () {
    console.log("Hi");
  },
};
