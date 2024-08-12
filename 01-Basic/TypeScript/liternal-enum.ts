//genderType 2가지로 제한
//변수 선언 시 특정 값으로 변수의 할당되는 값들의 범위를 제한
let genderType : "Male" | "Female";

//선언된 genderType변수에 값 할당
genderType="Male";

genderType="Female";

//type alias를 이용해 사용자 객체 타입 정의
type User={
    name:string;
    age:number;
    userType:"Admin"|"User";
    address:{city:string, country:string};

};

//user라는 json데이터 할당
const user1:User={
    name:"김동우",
    age:24,
    userType:"Admin",
    address:{city:"Cheongju", country:"Korea"}
}

//함수를 만들고 함수의 반환값을 특정 값으로 제약하기
function getUserType(user){
    if(user.userType==="Admin"){
        return 0;
    }
    else{
        return 1;
    }
}

getUserType(user1);

//열거형
//특정값의 범위를 상수처럼 한번 할당하여 값의 범위 제약
enum DisplayType{
    Nonedisplay=0,
    Display=1
};

const displayCode=1;
//타입 변환
const display=displayCode as DisplayType
//이게 나음 숫자를 명시적으로 표현하는 것 보다
const displayTestCode:DisplayType=DisplayType.Display; 
const displayTestCode2=DisplayType.Display;


//열거형을 정의해서 사용하는 주요 목적은
//코드성 데이터를 소스 내에서 직접 박아서 사용하는 것은 좋지 않아서
//반복적으로 또는 값이 범위가 제한되어 있는 데이터들을 enum타입을 이용해
//값의 설명과 실제 값을 표시하여 사용
if(display==DisplayType.Display){
    console.log("Display");
}

enum SNSType{
    None="",
    Facebook="Facebook",
    Instagram="Instagram",
    Twitter="Twitter"
}

//enum은 실제 값을 할당하지 않으면 0부터 시작하여 1씩 증가하는 값이 할당
enum EntryState{
    Inactive,
    Active,
    Pending
}

enum MemberType{
    Admin=2,
    User=1,
    Guest=0
}

type Member={
    id:number;
    email:string;
    password:string;
    entryState:EntryState;
    memberType:MemberType;
    snsType:SNSType;

};

const snsTypeCode:string="Facebook";

let member={
    id:1,
    email:"dw@naver.com",
    password:"1234",
    MemberType:MemberType.Admin,
    snsType:snsTypeCode as SNSType,
    entryState:EntryState.Active
}