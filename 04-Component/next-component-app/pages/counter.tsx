//리액트 로컬 데이터 상태 관리 훅인 userState훅 참조
//각종 훅은 use 사용
import { useState } from 'react';

const Counter = () => {
  //카운트 상태값과 상태값을 변경할 수 있는 함수를 반환
  //useState(초기값), 비구조화 할당 문법을 통해 반환되는 배열 내
  const [count, setCount] = useState<number>(0);

  //count 상태값을 변경하는 함수
  const handlePlus = (): void => {
    console.log('Pre setCount:', count);

    //count 상태값을 변경하려면 무조건 setCount()함수를 사용해야 함

    //setter함수가 실행되는 handlePlus함수가 완전히 실행이 완료된 후에 최종 counter값 갱신됨
    console.log('After setCount:', count);
    setCount(count + 1);
  };

  const handleMinus = (): void => {
    //count 상태값을 변경하려면 무조건 setCount()함수를 사용해야 함
    setCount(count - 1);
  };

  const onInit = (): void => {
    setCount(0);
  };

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[60px] font-semibold text-indigo-600">{count}</p>
        <p className="mt-6 text-base leading-7 text-gray-600">
          버튼을 클릭해 숫자를 증가 또는 감소 시켜보세요.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handlePlus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Plus
          </button>
          <button
            onClick={handleMinus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Minus
          </button>
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Init
          </button>
        </div>
      </div>
    </main>
  );
};
