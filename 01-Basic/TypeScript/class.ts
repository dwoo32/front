class Animal {
    //일반화된 속성 정의
    name:string;

    //일반화된 기능정의 및 구현
    move(){
        console.log(`${this.name} is moving`);
    }
    
    //생성자 함수 정의
    constructor(externalname:string=''){
        this.name=externalname;
    }
}

//클래스는 클래스를 상속받아 기능과 속성을 확장 가능
class Dog extends Animal{
    bark(){
        console.log(`${this.name} is barking`);
    }

}

let myDog=new Dog('Happy');
console.log("my Dog",myDog.name);
myDog.move();
myDog.bark();

//클래스는 인터페이스를 상속받으면 반드시 인터페이스의 기능과 속성을 구현 해줘야 함
interface Movable {
    speed: number;
    move(): void;
  }
  
  //인터페이스를 상속받은 클래스는 인터페이스에 정의된 기능과 속성을 반드시 구현해야함
  class Car1 implements Movable {
    speed: number;
  
    constructor(speed: number) {
      this.speed = speed;
    }
  
    move() {
      console.log(`The car is moving at ${this.speed} km/h`);
    }
  }
  
  let myCar1 = new Car1(50);
  myCar1.move(); // "The car is moving."

	//접근 제어자(access modifier) - public, private, protected
	enum UserType{
		Admin="admin",
		User="user",

	}

	enum AdminRole{
		SystemAdmin="SA",
		GeneralAmdin="GA",
	}

	class User{
		public name:string; //외부에 노출가능
		private password:string; //클래스 내 에서만 접근 가능
		protected email:string; //해당 클래스 상속 받은 클래스에서만 접근 가능
		protected userType:UserType;

		//생성자 함수 정의하기
	constructor(name:string,password:string,email:string){
		this.name=name;
		this.password=password;
		this.email=email;
		this.userType=UserType.User;
	}

	//클래스 주요 기능 구현
	public greeting(){
		console.log(`Hello, I'm ${this.name}`);
	}

	private config(){
		this.sendEmail('개인화 정보를 설정했습니다');
		console.log("개인화 정보를 설정했습니다\n 메일로 관련 내용을 확인하세요");
	}

	protected sendEmail(message:string){
		console.log(`이메일을 보냅니다. 메세지:${message}`);
	}

	changpassword(newPassword:string){
		this.password=newPassword;
		console.log("비밀번호가 변경되었습니다");
	}
}

let user=new User("김동우","1234","dw@naver.com");
user.greeting();

user.name="kdw";
console.log("user name",user.name);

user.changpassword("12345");

class AdminUser extends User{
	private adminRole:AdminRole;

		//생성자 함수 정의하기
		constructor(name:string,password:string,email:string, adminRole?:AdminRole){

			//super클래스는 부모클래스의 생성자함수를 호출
			super(name,password,email);

			//user 부모 클래스의 name
			this.name=name;
			
			this.email=email;
			this.userType=UserType.User;
		}

	changeRoleType(roleType:AdminRole){
		this.adminRole=roleType;
		console.log("관리자 권한이 변경되었습니다");


		//상속받은 클래스에서 protected sendEmail함수 호출
		this.sendEmail("관리자 권한이 변경되었습니다");
	}


}

let admin1 = new AdminUser("Admin", "123456", "admin@example.com");
//admin1.userType = UserType.Admin;  userType 속성 접근불가 에러발생
// admin1.changeUserType(UserType.Admin); //changeUserType() 메소드를 통해 부모 클래스의 속성값을 변경
admin1.changeRoleType(AdminRole.SystemAdmin); //관리자 역할 을 바꾸려면 

//admin1.sendEmail("test"); //protected 속성은 상속받은 클래스 안에서만 접근가능//에러발생

// 선택적 매개변수를 이용한 클래스 생성자 함수 오버로딩처럼 구현하기 
let admin2= new AdminUser("Admin", "123456", "admin@example.com",AdminRole.SystemAdmin);