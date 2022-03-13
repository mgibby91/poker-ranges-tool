import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../state/reducers/root-reducer';
import { getAreCardsSame } from '../utils';

const RangesToolCreate = () => {
  const defaultRanges = useSelector((state: IRootState) => state.range.range);

  return (
    <RangesWrapper>
      {defaultRanges.map((row) => {
        return (
          <RowWrapper>
            {row.map(({ value, isSuited }) => {
              return <Cell areCardsSame={getAreCardsSame(value)}>{value}</Cell>;
            })}
          </RowWrapper>
        );
      })}
    </RangesWrapper>
  );
};

const RangesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const Cell = styled.div<{ areCardsSame: boolean }>`
  border: 1px solid #d7dadc;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;

  background-color: ${({ areCardsSame }) => (areCardsSame ? '#d7dadc39' : '')};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export default RangesToolCreate;
