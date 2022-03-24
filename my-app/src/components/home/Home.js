import React from 'react';

//Function 방식
const Home = props => {
  // const boards = props.boards;
  // const id =props.id
  //   console.log(1, props);
  //   console.log(2, boards);

  //구조분해 할당
  const { boards, setBoards, number, setNumber } = props; //넘겨준 이름이랑 같아야함

  return (
    <div>
      <h1>홈:{number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map(board => (
        <h3>
          제목: {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
