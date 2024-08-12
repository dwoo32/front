let notSure:any=4;
notSure="문자열일 수도 있고";
notSure=false;

console.log("notSure의 값은 : ",notSure);

let fullName:any = "김동우";

//변수의 형 변환하기 1 <string>fullName은 string 타입으로 형변환
let fullNameLength:number = (<string>fullName).length;
console.log("fullName의 길이는 : ",fullNameLength);

//변수의 형 변환하기 2
let fullNameLength2:number = (fullName as string).length;

console.log("fullName의 길이는 : ",fullNameLength);

const companyName="Msoftware" as string;

//interface는 객체의 구조와 속성에 타입을 지정하는 방법을 제공
interface User{
    id:number;
    name:string;
    email:string;
    telephone?:string; //?는 선택적 속성을 의미 (필수가 아닌 속성)
}

let user={}as User;
user.id=1;
user.name="김동우";
user.email="dw@naver.com";
// user.telephone="010-1234-5678";

console.log("user의 값은 : ",user);