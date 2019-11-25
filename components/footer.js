import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  align-items: center;
  background-color: #dfa365;
  border-top: 5px solid white;
  padding: 40px 0px;
  width: 100%;
  margin-top: 50px;

  div {
    text-align: right;
    font-size: 14px;
    margin-right: 35px;
  }

  a {
    text-decoration: none;
    color: #523924;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>ECOMMERCE-SHOP PROJEKT - Next.js, TypeScript, PostgreSQL</p>
        Impressum: Alexander Scherer-Sokolowski | Tel: +43 664 7501 8228 <br />
        Schulstrasse 1 - 7304 Grosswarasdorf - Österreich
        <p>
          <a href="https://alexscherer.dev/">www.alexscherer.dev</a>
        </p>
      </div>
    </FooterContainer>
  );
}
