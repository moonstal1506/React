import React from 'react';

import Login from '../components/login/Login';

const LoginPage = props => {
  const { history } = props;
  console.log('LoginPage', props);

  return (
    <div>
      {/* <button onClick={() => props.history.go(-1)}>뒤로가기</button> */}
      {/* <button onClick={() => props.history.goBack()}>뒤로가기</button> */}
      <button onClick={() => history.push('/')}>뒤로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
