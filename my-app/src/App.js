//useRef(디자인)
//dom을 변경할 때 사용
import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/login/Login';
import { Title } from './MyCss';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

// const a = {
//   backgroundColor: 'red',
// };

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
