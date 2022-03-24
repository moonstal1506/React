import React from 'react';
import styledComponents from 'styled-components';

const StyledHeaderDiv = styledComponents.div`
    border:1px solid black;
    height:300px;
`;
const Header = () => {
  return (
    <StyledHeaderDiv>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
