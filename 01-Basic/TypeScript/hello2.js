var userID = 'K';
var userName = '김동우';
function sayHello1(userID, userName) {
    return "Hello, ".concat(userName, "(").concat(userID, ")");
}
function sayHello2(userID, userName) {
    console.log("Hello, ".concat(userName, "(").concat(userID, ")"));
}
console.log(sayHello1(userID, userName)); // sayHello1의 반환 값을 콘솔에 출력
sayHello2(userID, userName); // sayHello2는 직접 콘솔에 출력
