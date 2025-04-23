/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // Animal 인터페이스를 상속받아서 Animal의 프로퍼티를 모두 가짐
  name: string; // name 프로퍼티를 재정의함. -> string 리터럴 타입으로 정의함. 단 원본타입의 서브타입이어야만 가능하다.
  isBark: boolean;
}
const dog: Dog = {
  name: "hello",
  age: 10,
  isBark: true,
};

interface Cat extends Animal {
  //인터페이스는 확장타입이 type으로 정의되어 있더라도 상속받을 수 있다.
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}
const dogCat: DogCat = {
  name: "hello",
  age: 10,
  isBark: true,
  isScratch: true,
};
