import React from 'react';
import styledComponents from 'styled-components';

const StyledFooterDiv = styledComponents.div`
    border:1px solid black;
    height:300px;
`;
const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>오시는길:서울</li>
        <li>전화번호:1111</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
