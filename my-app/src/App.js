import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

// spa
// jsx문법
// 리턴시에 하나의 dom만 리턴할 수 있다.
// 변수 선언은 let(변수)혹은 const(상수)만 가능
// if사용불가능->삼항연산자 가능 {a === 10 ? '10입니다' : '10아닙니다.'}
// 조건부 렌더링{b===20&&'20입니다.'}앞에거 트루면 뒤에거 해라
// css디자인- 내부에 적기/외부에 적기/라이브러리 사용(부트스트랩, component-styled)

function App() {
  // let number = 1;//상태값아님
  // const [number, setNumber] = useState(2); //리액트안에 hooks라이브러리 상태값이 됨

  // const add = () => {
  //   setNumber(number + 1); //리엑트한테 number값 변경요청
  //   console.log('add', number);
  // };

  // let num =5;
  const [num, setNum] = useState(5);

  console.log('App 실행됨');
  let sample = [
    { id: 1, name: '11' },
    { id: 2, name: '22' },
    { id: 3, name: '33' },
    { id: 4, name: '44' },
  ];
  //다운로드받음
  const [users, setUsers] = useState(sample); //레퍼런스 변경되어야 동작
  const download = () => {
    // const a = sample.concat({ id: 5, name: '55' });
    //fetch().then().then()
    setUsers([...sample, { id: num, name: '55' }]);
    setNum(num + 1);
  };
  //랜더링 시점= 상태값 변경
  return (
    <div>
      {/* <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
      <Sub/>  */}

      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
