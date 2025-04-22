/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // 이 함수가 참이면  animal은 Dog타입이다.
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // 프로퍼티의 이름을 기준으로 타입을 구분하면 프로퍼티가 바뀌거나 등의 문제가 생겼을 때 수정을 일일이 해줘야함. -> 별로임 ㅇㅇ;
  //   if ("isBark" in animal) {
  //     console.log(`${animal.name}는 짖습니다.`);
  //   } else if ("isScratch" in animal) {
  //     console.log(`${animal.name}는 할퀴기 합니다.`);
  //   }

  if (isDog(animal)) {
    console.log(`${animal.name}는 짖습니다.`);
  } else if ("isScratch" in animal) {
    console.log(`${animal.name}는 할퀴기 합니다.`);
  }
}
