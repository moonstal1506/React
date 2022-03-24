import React from 'react';
import styledComponents from 'styled-components';

let StyledDeleteButton = styledComponents.button`
color: ${props => (props.user.username === 'asdf' ? 'blue' : 'red')};
`;
//스타일 확장
let StyledAddButton = styledComponents(StyledDeleteButton)`
    color: ${props => (props.user.username === 'asdf' ? 'blue' : 'red')};
    background-color:green;
  `;

const Home = props => {
  // const boards = props.boards;
  // const id =props.id
  //   console.log(1, props);
  //   console.log(2, boards);

  //구조분해 할당
  const { boards, setBoards, user } = props; //넘겨준 이름이랑 같아야함

  return (
    <div>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map(board => (
        <h3>
          제목: {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
