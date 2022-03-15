import styled from '@emotion/styled';
import React from 'react';
import { RangesProperties } from '../utils';

type RangeProps = {
  title: string;
  range: RangesProperties[][];
};

const Range: React.VFC<RangeProps> = ({ title, range }) => {
  return <RangeWrapper></RangeWrapper>;
};

const RangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d7dadc;
  width: 15rem;
  height: 10rem;
  border-radius: 0.5rem;
  margin: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #3a3a3c;
  }
`;

export default Range;
