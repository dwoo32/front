//Case1)함수에 제네릭 타입 전달하여 사용하기

//getRandomElement(배열타입매개변수 T[])함수에 숫자형,문자열 배열타입과 상관없는 그냥 배열타입을 전달하고
//반환값으로 다양한 타입을 반환하는 함수를 정의합니다.
//형식설명: 함수명<GenericType이 전달되어 넘어 온다고 명시>(매개변수명: 매개변수의 GenericType): 반환 GenericType
function getRandomElement<T>(list: T[]): T {
    //랜덤 숫자를 만들고 제공된 배열내의 해당 Index값를 반환합니다.
    //반환되는 값의 타입은 숫자배열이 넘어온경우는 number타입을 문자열 배열이 파라메터로 전달된경우는 문자열 타입 반환타입이 됩니다.
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
  }
  
  const randomString = getRandomElement(["a", "b", "c"]); // 무작위 문자열 반환
  console.log("randomString:", randomString);
  
  const randomNumber = getRandomElement([1, 2, 3]); // 무작위 숫자 반환
  console.log("randomNumber:", randomNumber);
  
  //CASE2) 클래스에 제너릭 타입을 사용하기
  //형식설명: 클래스명<GenericType이 전달되어 넘어 온다고 명시>;
  class Stack<T> {
    private items: T[] = [];
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  }
  
  const stringStack = new Stack<string>();
  stringStack.push("apple");
  stringStack.push("banana");
  const poppedString = stringStack.pop();
  console.log("poppedString:", poppedString);
  
  const numberStack = new Stack<number>();
  numberStack.push(1000);
  numberStack.push(2000);
  const poppedNumber = numberStack.pop();
  console.log("poppedNumber:", poppedNumber);
  
  //tsc --strictNullChecks generic.ts
  //node generic.js