/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

type StringNumberSwitch2<T> = [T] extends [number] ? string : number; // 대괄호를 씌우면 분산을 방지할 수 있다.

let c: StringNumberSwitch<number | string>; // 조건부 타입에 union 타입을 전달하면 union타입이 전달되는 것이 아니라 하나씩 둘 다 들어간다.
// StringNumberSwitch<number> // string
// StringNumberSwitch<string> // number
// 위의 분리된 결과 들을 union 타입으로 가져간다.

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T; // 이런식으로 같을 때 never로 없애버려서 특정 타입만 제거한 타입을 만들 수 있다.

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number,string> |
// Exclude<string,string> |
// Exclude<boolean,string> |

// 2단계
// number
// never
// boolean

// 결과
// number | never | boolean => number|boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
