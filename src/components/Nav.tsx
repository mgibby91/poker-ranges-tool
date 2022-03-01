import styled from '@emotion/styled';
import React from 'react';

const Nav = () => {
  return (
    <NavWrapper>
      <div>Create new</div>
      <Title>POKER RANGES</Title>
      <div>Settings</div>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3a3a3c;
  max-height: 20%;
  min-width: 350px;
  width: 80%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  color: #d7dadc;
  padding: 0;
  margin: 0 1rem;
`;

export default Nav;
