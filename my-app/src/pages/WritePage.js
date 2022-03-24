import React from 'react';

const handleWrite = () => {
  //리스트페이지의 setPosts에 무엇을 담아야함?
  let post = { id: 6, title: '인풋값' };
};

const WritePage = () => {
  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <from>
        <input type="text" placeholder="제목을 입력하세요" />
      </from>
      <button type="button" onClick={handleWrite}>
        글쓰기
      </button>
    </div>
  );
};

export default WritePage;
