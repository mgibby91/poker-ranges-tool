import styled from '@emotion/styled';
import React from 'react';
import CreateNew from './CreateNew';

const Main = () => {
  return (
    <MainWrapper>
      <CreateNew />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 2rem 0;
`;

export default Main;
