import styled from '@emotion/styled';
import React from 'react';
import { createRangesArray, getAreCardsSame } from '../utils';

const RangesToolCreate = () => {
  const onCellUpdate = (rowIndex: number, cellIndex: Number) => {
    console.log({ rowIndex, cellIndex });
  };

  return (
    <RangesWrapper>
      {createRangesArray().map((row, rowIndex) => {
        return (
          <RowWrapper>
            {row.map(({ value, isSuited }, cellIndex) => {
              return (
                <Cell
                  areCardsSame={getAreCardsSame(value)}
                  onClick={() => onCellUpdate(rowIndex, cellIndex)}
                >
                  {value}
                </Cell>
              );
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
