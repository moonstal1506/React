import React from 'react';
import styledComponents from 'styled-components';

const HeaderList = styledComponents.div`
    border:1px solid black;
    height:300px;
`;
const Header = () => {
  return (
    <HeaderList>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </HeaderList>
  );
};

export default Header;
