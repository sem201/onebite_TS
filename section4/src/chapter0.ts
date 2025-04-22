/**
 * 함수 타입 정의
 */

//  함수를 설명하는 가장 좋은 방법
// 어떤 [타입의] 매개변수를 받고 어떤 [타입의] 값을 반환하는지 설명하는 것
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

function introduce(name = "홍길동") {
  console.log(`안녕하세요 ${name}입니다.`);
}

introduce(1); // 이렇게 number타입을 넣으면 에러 도출.

function introduce2(name = "홍길동", tall?: number) {
  console.log(`안녕하세요 ${name}입니다.`);
  console.log(`키는 ${tall}입니다.`);
  if (typeof tall === "number") {
    console.log(`${tall + 10}`); // tall이 undefined일 수 있으므로 에러 발생 => 타입가드 필요
  }
}

introduce2("홍길동", 180);
introduce2("홍길동");

function getSum(...rest: number[]) {
  // rest = 가변적인 배열로 선언
  let sum = 0;
  rest.forEach((item) => (sum += item));
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4); // 10
