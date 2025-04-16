/**
 * 타입 추론
 */

import { profile } from "console";

let a = 10; // number 타입으로 추론됨

function func(param) {
  // 이러면 추론 못함
}

let b = "hello"; // 변수의 초기값을 기준으로 타입을 추론함

let c = {
  id: 1,
  name: "kim",
  profile: {
    nickname: "kim",
  },
  url: ["naver.com", "google.com"],
};

let { id, name, profile } = c; // 알아서 추론 잘함

let [one, two, three] = [1, "hello", true]; // 알아서 추론 잘함

function func(message = "hello") {
  // 매개변수에 기본값을 주면 타입을 추론함
  return "hello";
}

let d; // any 타입으로 추론됨
d = 10;
d.toFixed(); // number 타입으로 추론됨

d = "hello";
d.toUpperCase(); // string 타입으로 추론됨
// d.toFixed(); // string 타입으로 추론됨 => 오류 발생

const num = 10; // const로 선언하면 리터럴 타입으로 추론됨
const str = "hello"; // const로 선언하면 리터럴 타입으로 추론됨

let arr = [1, "string"]; // number 와 string uninion 타입으로 추론됨
