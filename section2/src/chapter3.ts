// let user: object = {
//   id: 1,
//   name: "이정환",
// };

// user.id; // error : object 형식에 id 속성이 없다.

// object : ts에서는 구조를 기준으로 타입을 결정한다. => 구조적 타입 시스템 *보통은 이름을 기준으로 객체를 정의한다.
let user: {
  id?: number;
  name: string;
} = {
  // 객체 리터럴 타입
  id: 1,
  name: "이정환",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

user.id;

user = {
  // error) color가 없기 때문에... -> id프로퍼티를 있어도 되고 없어도 되게한다. 즉 선택적 프로퍼티(optional property) 로 만든다. => [프로퍼티이름]? : string
  name: "홍길동",
};

let config: {
  readonly apiKey: string; // 읽기 전용 프로퍼티로 만들어준다.
} = {
  apiKey: "MyAPIKEY",
};

// config.apiKey = "hacked"; // error : readonly옵션인 프로퍼티에 먼가 입력했으므로...
