/**
 * 제네릭 클래스
 */

// 이렇게 만들면 number만 가능하고 다른 용도의 함수를 만들때 똑같은 코드로 새로 다시 짜야함
class NumberList {
  // 생성자에 private list: number[]; <- 썻으므로 필드 생략 가능
  constructor(private list: number[]) {
    // this.list = list; <- 얘도 생성자에서 자동으로 해줌
  }

  push(data: number) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

// 위의 클래스를 제네릭 클래스로 만들어보자
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const list = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();
