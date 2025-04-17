/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

//value => number : toFxed
// value => string : toUpperCase
// value => Date : getTime
function func(value: number | string | Date | null | Person) {
  value; // value는 number | string 타입으로 추론됨
  value.toUpperCase(); // 오류 발생 -> value는 string 타입이 아님
  value.toFixed(); // 오류 발생 -> value는 number 타입이 아님

  if (typeof value === "number") {
    // typeguard 라고 부른다.
    console.log(value.toFixed()); // value의 타입이 number로 좁혀짐
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); //value의 타입이 string으로 좁혀짐
  }
  //   else if (typeof value === "object") {
  //     // null도 object로 판단되므로 이런 추론은 좋지않음.
  //     console.log(value.getTime()); // 타입오류 발생
  else if (value instanceof Date) {
    // instatnceof : 왼쪽에 있는 값이 오른쪽 객체인지 확인하는 것
    console.log(value.getTime()); // value의 타입이 Date로 좁혀짐
  } else if (value instanceof Person) {
    // 에러 발생 // Person은 class가 아니기 때문에 instanceof로 사용 불가능
  } else if (value && "age" in value) {
    // value가 null일수있기 때문에 value && 를 통해 value가 null이 아님을 확인
    // value가 Person 타입인지 확인하는 방법
    console.log(value.age); // value의 타입이 Person으로 좁혀짐
  }
}
