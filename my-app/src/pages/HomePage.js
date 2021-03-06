import React, { useEffect, useState } from 'react';

import Home from '../components/home/Home';

const HomePage = () => {
  //http요청 ( fetch,axios(다운))
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  //빈배열 한번만 실행
  useEffect(() => {
    //다운로드 가정 = fetch(),axios(),ajax()
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    //빈데이터
    setBoards([...data]);
    setUser({ id: 1, username: 'zxcv' });
  }, []);

  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
