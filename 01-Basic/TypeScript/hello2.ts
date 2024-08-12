const userID: string = 'K';
const userName: string = '김동우';

function sayHello1(userID: string, userName: string): string {
    return `Hello, ${userName}(${userID})`;
}

function sayHello2(userID: string, userName: string): void {
    console.log(`Hello, ${userName}(${userID})`);
}

console.log(sayHello1(userID, userName)); // sayHello1의 반환 값을 콘솔에 출력
sayHello2(userID, userName); // sayHello2는 직접 콘솔에 출력
