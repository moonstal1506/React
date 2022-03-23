import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    //다운로드 받고(통신)
    let downloadData = 5; //가정
    setData(downloadData);
  };
  //실행시점:
  //App() 함수가 최초 실행될 때(그림이 최초로 그려질때)
  //상태변수가 변경될때
  //의존리스트 관리할 수 있다.
  useEffect(() => {
    console.log('useEffect실행됨');
    download();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터:{data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
