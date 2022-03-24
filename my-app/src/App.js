import React, { useState } from 'react';
import './App.css';
import Bottom from './components/Bottom';
import Top from './components/Top';
//글쓰기, 글삭제, 글목록
function App() {
  // const [number, setNumber] = useState(1);

  // const addNumber = () => {
  //   setNumber(number + 1);
  // };

  return (
    <div className="container">
      <h1>최상단 화면</h1>
      {/* <Top number={number} />
      <Bottom addNumber={addNumber} /> */}
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
