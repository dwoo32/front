var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    //생성자 함수 정의
    function Animal(externalname) {
        if (externalname === void 0) { externalname = ''; }
        this.name = externalname;
    }
    //일반화된 기능정의 및 구현
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    return Animal;
}());
//클래스는 클래스를 상속받아 기능과 속성을 확장 가능
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking"));
    };
    return Dog;
}(Animal));
var myDog = new Dog('Happy');
console.log("my Dog", myDog.name);
myDog.move();
myDog.bark();
//인터페이스를 상속받은 클래스는 인터페이스에 정의된 기능과 속성을 반드시 구현해야함
var Car1 = /** @class */ (function () {
    function Car1(speed) {
        this.speed = speed;
    }
    Car1.prototype.move = function () {
        console.log("The car is moving at ".concat(this.speed, " km/h"));
    };
    return Car1;
}());
var myCar1 = new Car1(50);
myCar1.move(); // "The car is moving."
//접근 제어자(access modifier) - public, private, protected
var UserType;
(function (UserType) {
    UserType["Admin"] = "admin";
    UserType["User"] = "user";
})(UserType || (UserType = {}));
var AdminRole;
(function (AdminRole) {
    AdminRole["SystemAdmin"] = "SA";
    AdminRole["GeneralAmdin"] = "GA";
})(AdminRole || (AdminRole = {}));
var User = /** @class */ (function () {
    //생성자 함수 정의하기
    function User(name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.userType = UserType.User;
    }
    //클래스 주요 기능 구현
    User.prototype.greeting = function () {
        console.log("Hello, I'm ".concat(this.name));
    };
    User.prototype.config = function () {
        this.sendEmail('개인화 정보를 설정했습니다');
        console.log("개인화 정보를 설정했습니다\n 메일로 관련 내용을 확인하세요");
    };
    User.prototype.sendEmail = function (message) {
        console.log("\uC774\uBA54\uC77C\uC744 \uBCF4\uB0C5\uB2C8\uB2E4. \uBA54\uC138\uC9C0:".concat(message));
    };
    User.prototype.changpassword = function (newPassword) {
        this.password = newPassword;
        console.log("비밀번호가 변경되었습니다");
    };
    return User;
}());
var user = new User("김동우", "1234", "dw@naver.com");
user.greeting();
user.name = "kdw";
console.log("user name", user.name);
