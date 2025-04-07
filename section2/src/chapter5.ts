// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 사용목적

// 아래와 같이 사용자의 역할을 분리하기위해 숫자로 표현하는것은 일반적이다. 하지만 숫자 코드는 개발하면서 이 코드의 역할이 무엇이었는지 까먹는 경우가 발생한다. ->  enum활용!
const user1 = {
  name: "이정환",
  role: 0, // 0 <- 관리자
};

const user2 = {
  name: "홍길동",
  role: 1, // 1 <- 일반유저
};

const user3 = {
  name: "아무개",
  role: 2, // 2 <- 게스트
};

enum Role { // 아래 숫자를 쓰지 않아도 순서대로 잘 할당됨 첫번째만 주어진다면, 그 순서대로 할당한다. 중간부터 지정한다면 앞은 0부터, 중간지점은 해당 숫자부터 할당한다.
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
enum Language {
  korean = "ko",
  english = "en",
}
// 숫자 코드 대신 역할을 사용함으로서 헷갈리지 않는다.
const user4 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean, // ko로 나옴
};

const user5 = {
  name: "홍길동",
  role: Role.USER,
};

const user6 = {
  name: "아무개",
  role: Role.GUEST,
};

console.log(user4, user5, user6); //{ name: '이정환', role: 0 } { name: '홍길동', role: 1 } { name: '아무개', role: 2 }
