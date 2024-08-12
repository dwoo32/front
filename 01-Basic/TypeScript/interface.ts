//인터페이스의 목적은
//데이터 타입을 정리하거나
//특정 인터페이스를 상속받아 기능을 확장가능하며(exptend)
//특정 클래스의 해당 인터페이스를 상속받으면 반드시 인터페이스의 기능과 속성을 클래스에서 구현해야 함(implement)
//Case1)인터페이스 개념 이해하기
//인터페이스는 = 없이 사용하고 {로 시작하고 속성구분을;로 구분
interface User {
    name: string;
    age: number;
  }
  
  //type Alias와 비교하기예시
  type MemberType = {
    name: string;
    age: number;
  };
  
  function greet(user: User): string {
    return `Hello, ${user.name}!`;
  }
  
  let user = { name: "Alice", age: 20 };
  console.log(greet(user)); // "Hello, Alice!"
  
  //CASE2)인터페이스의 확장(속성추가와 상속)
  interface Person {
    name: string;
  }
  
  //한번 정의된 인터페이스 속성을 나중에 추가정의해도 사용가능
  interface Person {
    address: string;
  }
  
  interface Group {
    group: string;
  }
  
  //Person 인터페이스를 상속받아 Employee 인터페이스를 정의
  //인터페이스가 다른 인터페이스를 상속받아 속성/기능을 확장 -extends
  //여러 인터페이스를 이용해 확장 가능
  interface Employee extends Person, Group {
    department: string;
  }
  
  let employee: Employee = {
    name: "Alice",
    department: "Engineering",
    address: "Seoul",
    group: "IT",
  };
  
  console.log("인터페이스 상속 데이터", employee);
  
  //Case3)클래스 구현시 인터페이스를 상속받은 클래스는 인터페이스의 모든 속성과 기능을 구현해야하는 제약기능 -implements
  interface Movable {
    speed: number;
    move(): void;
  }
  
  //인터페이스를 상속받은 클래스는 인터페이스에 정의된 기능과 속성을 반드시 구현해야함
  class Car implements Movable {
    speed: number;
  
    constructor(speed: number) {
      this.speed = speed;
    }
  
    move() {
      console.log(`The car is moving at ${this.speed} km/h`);
    }
  }
  
  let myCar = new Car(50);
  myCar.move(); // "The car is moving."
  
  //타입스크립트 컴파일과 JS모듈 파일 실행하기
  //tsc --strictNullChecks interface.ts
  //node interface.js