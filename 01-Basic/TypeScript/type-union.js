var productCode = "10000";
productCode = 20000;
function getCode(code) {
    //파라메타로 전달된 코드의 데이터 타입이 숫자형이면 숫자, 문자형이면 문자열 반환
    if (typeof code === "number") {
        code = "P-" + code.toString();
    }
    return code;
}
//동일한 함수에서 숫자를 전달하는 경우
console.log(getCode(10000)); //P-10000
//동일한 함수에서 문자를 전달하는 경우
console.log(getCode("20000")); //20000
//배열내에 여러 데이터 유형을 할당하고 해당 배열의 타입을 Union타입으로 정의할수 있ek
var userData = ["김동우", 100, true];
var states = "start";
var oddNumber = 1;
