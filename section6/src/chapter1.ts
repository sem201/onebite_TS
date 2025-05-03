/**
 * 타입 스크립트의 클래스
 */

const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일을 합니다.");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;
  // 생성자 를 작성해주면 필드에서 오류가 사라진다.
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log("일을 합니다.");
  }
}

class Executive extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); // 부모 클래스의 생성자를 호출한다.
    this.officeNumber = officeNumber; // 자식 클래스의 필드 초기화
  }
}

const employee2 = new Employee("이정환", 27, "developer"); // Employee2는 Employee 타입으로 추론된다.
console.log(employee2);

// 이렇게도 가능하다.
const employee3: Employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일을 합니다.");
  },
};
