//새로운 타입을 만드는데 string타입과 number타입 둘 다 지원하는 개발자 정의 타입
type StringOrNumber = string|number;

let sample:StringOrNumber="test";
console.log(sample);

sample=100;
console.log(sample);

//객체의 타입을 지정하는 방법
//회원 데이터의 객체 타입을 미리 정의하고 데이터 할당
type MemberType={
    name:string;
    age:number;
    address:{city:string, country:string};

}

let personData:MemberType={
    name:"김동우",
    age:30,
    address:{city:"Cheongju", country:"Korea"}
}

function printPersonData(person){
    console.log(`이름: ${person.name}, 나이: ${person.age}, 주소: ${person.address.city}, ${person.address.country}`);
}

printPersonData(personData);

//plus함수 구조를 타입으로 정의
//함수 타입명=(매개변수 타입 정의)=>함수 반환 값 타입
type callFuctionType=(a:number,b:number)=>number;

//함수의 구조를 타입으로 정의하고 함수 구현
function plus2(a:number,b:number):number{
    return a+b;
}

function minus(a:number,b:number):number{
    return a-b;
}

//자바스크립트 함수는 특정 함수의 매개변수로 전달 가능
//자바스크립트 함수는 객체 타입
//특정함수를 다른 함수의 매개변수로 전달하고 매개변수의 타입을 지정
//calculate함수에 계산 함수를 매개변수로 전달하고 로직 처리를 전달된 매개변수함수를 통해서 처리 후 리턴
function calculate(a:number,b:number,calfunc:callFuctionType):number{
    return calfunc(a,b);
}


calculate(400,150,plus2);

calculate(400,150,minus);

type OperationInput={
    a:number;
    b:number;
}


type OperationOutput={
    result:number;
}

function addNumbers(input:OperationInput):OperationOutput{
    const {a,b}=input;
    return {result:a+b};
}

const input:OperationInput={a:10,b:20};
const output:OperationOutput=addNumbers(input);