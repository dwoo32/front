let productCode:string|number="10000";
productCode=20000;

function getCode(code:number|string):number|string{
    //파라메타로 전달된 코드의 데이터 타입이 숫자형이면 숫자, 문자형이면 문자열 반환
    if(typeof code==="number"){
        code="P-"+code.toString();
    }
   
    return code;
}

//동일한 함수에서 숫자를 전달하는 경우
console.log(getCode(10000)); //P-10000

//동일한 함수에서 문자를 전달하는 경우
console.log(getCode("20000")); //20000

//배열내에 여러 데이터 유형을 할당하고 해당 배열의 타입을 Union타입으로 정의할수 있ek
const userData:(string|number|boolean)[]=["김동우", 100, true];

//type 선언자를 이용해 개발자가 원하는 타입을 정의하고 사용할 수 있다
type ProcessStatus = "start"|"progress"|"end";

let states:ProcessStatus="start";

//특정 값만 설정 할 수 있는 type변수에 할당할 수 없는 값을 할당 하면 에러 발생
//status="test"; //error

type OddNumbersUnderTen = 1|3|5|7|9;
let oddNumber:OddNumbersUnderTen=1;