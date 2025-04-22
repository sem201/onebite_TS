/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> 매개변수가 1개 -> 이 매개변수의 20을 곱한 값 출력
 * -> 매개변수가 3개 -> 이 매개 변수를 다 더한 값을 출력
 */

// 타입스크립트에서 함수 오버로딩을 위해서는 미리 버전들을 명시해야함
function func(a: number): void;
function func(a: number, b: number, c: number): void; // 함수의 구현부 없이 선언만 해야함. => (오버로드 시그니쳐)

// 실제 구현부 => 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  // 매개변수가 1개 or 3개 이므로 옵셔널 프로퍼티를 추가하지 않으면 1번 함수가 존재의미가 없어짐 -> 에러 발생
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c); // 3개일때
  } else {
    console.log(a * 20); // 1개일때
  }
}

func(); // 에러
func(1);
func(1, 2); // 에러
func(1, 2, 3);
