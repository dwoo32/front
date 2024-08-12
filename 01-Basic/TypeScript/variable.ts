//변수 별 타입을 지정하고 값을 할당


var memberName:string="김동우";
let age:number=24;
let price:number=1000;
const isMale:boolean=true;
let totalPayprice:number=0;

function showTotalPrice(price:number,count:number):void{
    totalPayprice=price*count;
    console.log(`총 금액은 ${totalPayprice} 입니다.`);

}

console.log("사용자명 : " ,memberName); //김동우
console.log("나이 : " ,age); //24
console.log("가격 : " ,price); //1000
console.log("성별 : " ,isMale); //true

showTotalPrice(price,3); //총 금액은 3000 입니다.

