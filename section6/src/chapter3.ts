/**
 * 인터페이스와 클래스
 */

interface Characterinteerface {
  // 인터페이스로 정의하는 프로퍼티는 모두 public이다.
  name: string;
  mobeSpeed: number;
  move(): void;
}

class Character implements Characterinteerface {
  constructor(public name: string, public mobeSpeed: number) {}
  move(): void {
    console.log(`${this.mobeSpeed} 속도로 이동!`);
  }
}
