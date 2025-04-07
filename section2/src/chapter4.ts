//타입 별칭
type User = {
  // 아래와 같이 필요한 프로퍼티가 많을 경우에 chapter3에서 객체처럼 타입을 만든다면 객체를 생성할 때마다 저 많은 프로퍼티를 반복해서 입력해야한다...
  // 가령 추가 프로퍼티가 생긴다면?? -> 따라서 type을 통해 하나의 타입 처럼 만들어준다.
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
// type User; // error) 동일 스코프에서 쓸 경우 에러

function test() {
  type User = {}; // 함수 내에서 선언할 경우 함수 내부의 User 타입을 사용한다.
}
let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "2001,08.05",
  bio: "안녕하세요",
  location: "dsds",
};

// 인덱스 시그니처

// type CountryCodes = {
//   Korea: string;
//   UnitedStatr: string;
//   Unitedkingdom: string;
//   //   etc.... 안에 코드가 많아질 때마다 계속 생성해야함..
// };

type CountryCodes = {
  [key: string]: string; // key, value 형식으로 만들어줄 수 있음.
  // 인덱스 시그니처 의 경우 빈객체여도 허용된다.
  Korea: string; // Korea프로퍼티를 반드시 가져야함.
  //   UnitedState: number; // error) 인덱스 시그니처로 value값은 string이라고 지정했기 때문에
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UniterState: "us",
  UnitedKingdom: "uk",
};
