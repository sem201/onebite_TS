/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용하여 하나의 타입으로 다양한 타입을 처리할 수 있다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["hi", "hello"],
};

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 12312,
};

// 제네릭 인터페이스와 인덱스 시그니쳐를 함께 사용하면 더 자유롭게 사용 가능하다.
interface Map<V> {
  [key: string]: V;
}
let StringMap: Map<string> = {
  key: "val",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "val",
};

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 이렇게 하면 귀찮음... because 새로운 타입이 올때마다 직접 바꿔줘야함...
function goToSchool(user: User) {
  const school = user.profile.school;
  console.log(`${school}에 다닙니다.`);
}

// 제네릭을 사용하면 타입가드를 없애버려도됨!!
function goToSchool2(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}에 다닙니다.`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "이정환",
  profile: {
    type: "student",
    school: "한양대학교",
  },
};
