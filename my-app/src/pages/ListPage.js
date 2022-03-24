//rsc
import React, { useState } from 'react';
import styledComponents from 'styled-components';

const StyledItemBoxDiv = styledComponents.div`
    display:flex;
    justify-content:space-between;
    border:1px solid black;
    padding: 10px;
    height:100px;
    margin:20px;
    align-items:center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);
  const handleWrite = e => {
    e.preventDefault(); //form태그 하려는 액션 중지
    console.log(1, post.title);
    console.log(2, post.content);
    setPosts([...posts, { ...post, id: no }]);
    setNo(no + 1);
  };

  //   const handleChangeTitle = e => {
  //     console.log(e.target.value);
  //     setPost({ title: e.target.value });
  //   };
  //   const handleChangeContent = e => {
  //     console.log(e);
  //     setPost({ content: e.target.value });
  //   };
  const handleForm = e => {
    console.log(e.target.name);
    console.log(e.target.value);

    //computed property names 문법(키값 동적할당)
    setPost({ ...post, [e.target.name]: e.target.value });
    // console.log(post.title);
    // console.log(post.content);
  };

  return (
    <div>
      <h1>리스트페이지</h1>
      <from onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글쓰기</button>
      </from>
      <hr />
      {posts.map(post => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} / 제목: {post.title} / 내용:{post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
