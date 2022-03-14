import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStores } from '../stores';
import { getAreCardsSame, getCellBg, PlayType } from '../utils';

const RangesToolCreate = observer(() => {
  const { rangesStore } = useStores();

  useEffect(() => {
    rangesStore.createNewRange();
  }, [rangesStore]);

  return (
    <RangesWrapper>
      {rangesStore.newRange.map((row, rowIndex) => {
        return (
          <RowWrapper>
            {row.map(({ value, playType }, cellIndex) => {
              return (
                <Cell
                  areCardsSame={getAreCardsSame(value)}
                  playType={playType}
                  onClick={() =>
                    rangesStore.updateNewRange(rowIndex, cellIndex)
                  }
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
});

const RangesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const Cell = styled.div<{ areCardsSame: boolean; playType: PlayType }>`
  border: 1px solid #d7dadc;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  background-color: ${({ areCardsSame, playType }) =>
    getCellBg(playType, areCardsSame)};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export default RangesToolCreate;
