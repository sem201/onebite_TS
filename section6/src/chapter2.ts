/**
 * 접근제어자
 * access modifier
 * => puiblic, private, protected
 */

class Employee {
  // 필드
  public name: string; // 접근제어자를 쓰지 않으면 기본으로 public이다.
  private age: number;
  protected position: string;
  // 생성자 를 작성해주면 필드에서 오류가 사라진다.
  constructor(
    // 생성자에 접근 제어자를 넣어도 되는데 이렇게 할 경우 필드 정의는 생략해야한다. (싹다 없애도 자동으로 한다.)
    private name: string,
    public age: number,
    public position: string
  ) {} // this.name = name; // this.age = age; // this.position = position; // 얘네도 안써도 생성자에서 자동으로 넣어준다.
  work() {
    console.log(`${this.age}일을 합니다.`); // private 필드에 접근 가능
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
  func() {
    this.age; // 상속받은 클래스에서도 private 필드에 접근 불가능
    this.position; // 파생 클래스에서는 protexted 필드에 접근 가능하다.
  }
}

const employee = new Employee("이정환", 27, "developer");
employee.name; // public 이기 때문에 접근 가능
employee.age; // private 이기 때문에 접근 불가능
employee.position; // protected 이기 때문에 접근 불가능
