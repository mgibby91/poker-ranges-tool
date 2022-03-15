import styled from '@emotion/styled';
import React from 'react';
import {
  getAreCardsSame,
  getCellBg,
  PlayType,
  RangesProperties,
} from '../utils';

type RangeThumbnailProps = {
  range: RangesProperties[][];
};

const RangeThumbnail: React.VFC<RangeThumbnailProps> = ({ range }) => {
  return (
    <RangeThumbnailWrapper>
      {range.map((row) => {
        return (
          <RowWrapper>
            {row.map(({ value, playType }) => {
              return (
                <Cell
                  areCardsSame={getAreCardsSame(value)}
                  playType={playType}
                />
              );
            })}
          </RowWrapper>
        );
      })}
    </RangeThumbnailWrapper>
  );
};

const RangeThumbnailWrapper = styled.div`
  border: 1px solid #ddd;
  width: 11rem;
  height: 11rem;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const Cell = styled.div<{ areCardsSame: boolean; playType: PlayType }>`
  width: calc(11rem / 13);
  height: calc(11rem / 13);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ areCardsSame, playType }) =>
    getCellBg(playType, areCardsSame)};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export default RangeThumbnail;
