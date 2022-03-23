import React from 'react';
import styledComponents from 'styled-components';

const FooterList = styledComponents.div`
    border:1px solid black;
    height:300px;
`;
const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는길:서울</li>
        <li>전화번호:1111</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
