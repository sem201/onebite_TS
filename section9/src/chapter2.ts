/**
 * infer
 */

type FuncA = () => string;

type FuncB = () => number;
type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // string 타입으로 추론

type B = ReturnType<FuncB>; // never 타입으로 추론

type ReturnType2<T> = T extends () => infer R ? R : never; // infer R 조건식을 참으로 만드는 타입으로 만든다.

type C = ReturnType<FuncA>; // string 타입으로 추론

type D = ReturnType<FuncB>; // number 타입으로 추론

type E = ReturnType<number>; // type R을 추론이 불가능하다 => never로 추론

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입어야한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number 로 추론되길 원함.

type PromiseB = PromiseUnpack<Promise<string>>; // string 로 추론되길 원함.
