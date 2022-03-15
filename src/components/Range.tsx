import styled from '@emotion/styled';
import React from 'react';
import { RangesProperties } from '../utils';
import RangeThumbnail from './RangeThumbnail';

type RangeProps = {
  title: string;
  range: RangesProperties[][];
};

const Range: React.VFC<RangeProps> = ({ title, range }) => {
  return (
    <RangeWrapper>
      <RangeThumbnail range={range} />
      <h3>{title}</h3>
    </RangeWrapper>
  );
};

const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #d7dadc;
  width: 14rem;
  height: 14rem;
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: #3a3a3c;
  }

  h3 {
    margin: 0;
    padding: 0;
  }
`;

export default Range;
