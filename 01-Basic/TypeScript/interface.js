function greet(user) {
    return "Hello, ".concat(user.name, "!");
}
var user = { name: "Alice", age: 20 };
console.log(greet(user)); // "Hello, Alice!"
var employee = {
    name: "Alice",
    department: "Engineering",
    address: "Seoul",
    group: "IT",
};
console.log("인터페이스 상속 데이터", employee);
//인터페이스를 상속받은 클래스는 인터페이스에 정의된 기능과 속성을 반드시 구현해야함
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("The car is moving at ".concat(this.speed, " km/h"));
    };
    return Car;
}());
var myCar = new Car(50);
myCar.move(); // "The car is moving."
//타입스크립트 컴파일과 JS모듈 파일 실행하기
//tsc --strictNullChecks interface.ts
//node interface.js
