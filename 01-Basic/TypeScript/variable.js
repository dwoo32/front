//변수 별 타입을 지정하고 값을 할당
var memberName = "김동우";
var age = 24;
var price = 1000;
var isMale = true;
var totalPayprice = 0;
function showTotalPrice(price, count) {
    totalPayprice = price * count;
    console.log("\uCD1D \uAE08\uC561\uC740 ".concat(totalPayprice, " \uC785\uB2C8\uB2E4."));
}
console.log("사용자명 : ", memberName); //김동우
console.log("나이 : ", age); //24
console.log("가격 : ", price); //1000
console.log("성별 : ", isMale); //true
showTotalPrice(price, 3); //총 금액은 3000 입니다.
