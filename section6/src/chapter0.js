/**
 * 클래스
 */

// 동일한 모양의 객체를 만들 때 클래스를 이용하면 편하다
let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  //메서드
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  //필드
  favoriteSkill;
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("이정환", "B+", 27, "Ts");
console.log(studentDeveloper);

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("이정환", "A+", 27);
console.log(studentB);

studentB.study();
studentB.introduce();
