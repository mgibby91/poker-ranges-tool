import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStores } from '../stores';
import CreateNew from './CreateNew';
import Range from './Range';

const Main = observer(() => {
  const { rangesStore } = useStores();

  return (
    <MainWrapper>
      {rangesStore.userRanges.map(({ range, title }) => (
        <Range range={range} title={title} />
      ))}
      <CreateNew />
    </MainWrapper>
  );
});

const MainWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 2rem 0;
`;

export default Main;
