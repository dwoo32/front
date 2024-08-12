var memberName = "김동우";
var price = 1000;
var isMale = true;

console.log("회원명은 타입 추론에 의해 문자로 자동인식 됨: ",memberName.length);
// console.log("가격은 타입 추론에 의해 숫자로 자동인식 됨: ",price.length); //err


var user={
    id:1,
    name:"김동우",
    email:"dw@naver.com"

}

console.log("user는 객체로 인식됨: ",user.name.length);
// console.log("user는 객체로 인식됨: ",user.id.length);//err

function plus (a:number,b:number):number{
    return a+b;
}

console.log(plus(1,2));
// console.log(plus("1",2)); //err
// console.log(plus(1,2).length); //err