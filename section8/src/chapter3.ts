/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // 앞 : key , 뒤 : value
  // user의 key에 따라 인덱스드 엑세스 타입이 바뀐다.
  // ? 를 붙여서 모든 프로퍼티가 선택적 프로퍼티가 된다.
};

type BooleanUser = {
  [key in keyof User]: boolean; // 이런식으로 모든 프로퍼티를 boolean으로 바꿔버릴 수 있음
  // keyof 를 이용해서 일일이 Union 타입으로 작성하지 않고 User 인터페이스의 모든
  // 프로퍼티를 유니온 타입으로 만들어줌
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key]; // 맵드 타입을 사용해서 모든 프로퍼티를 한번에 readonly로 만드는 것도 가능하다/
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //.. 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// 한명의 유저정보를 수정하는 기능
function updateUser(user: User) {
  //...수정하는 기능
}

updateUser({
  // id: 1,
  // name: "이정환", // 어차피 age만 수정할거라 다른건 그대로 쓰고 싶음
  age: 25,
});
