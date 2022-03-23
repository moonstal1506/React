import logo from './logo.svg';
import './App.css';

// spa
// jsx문법
// 리턴시에 하나의 dom만 리턴할 수 있다.
// 변수 선언은 let(변수)혹은 const(상수)만 가능
// if사용불가능->삼항연산자 가능 {a === 10 ? '10입니다' : '10아닙니다.'}
// 조건부 렌더링{b===20&&'20입니다.'}앞에거 트루면 뒤에거 해라
// css디자인- 내부에 적기/외부에 적기/라이브러리 사용(부트스트랩, component-styled)
let a = 10;
const b = 20;

function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>{list.map((n) => n)}</div>
    </div>
  );
}

export default App;
