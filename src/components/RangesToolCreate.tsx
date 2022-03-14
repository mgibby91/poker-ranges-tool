import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStores } from '../stores';
import { getAreCardsSame, getCellBg, PlayType } from '../utils';
import { SubmitHandler, useForm } from 'react-hook-form';

type RangeForm = {
  title: string;
};

const RangesToolCreate = observer(() => {
  const { rangesStore } = useStores();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<RangeForm>();

  useEffect(() => {
    rangesStore.createNewRange();
  }, [rangesStore]);

  const onSubmitNewRange: SubmitHandler<RangeForm> = (data) => {
    console.log({ data });
  };

  return (
    <MainWrapper>
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
      <UserActionsWrapper>
        <RangesTitleForm onSubmit={handleSubmit(onSubmitNewRange)}>
          <input
            placeholder='Enter title'
            {...(register('title'), { required: true })}
          />
          <input type='submit' />
        </RangesTitleForm>
      </UserActionsWrapper>
    </MainWrapper>
  );
});

const MainWrapper = styled.div`
  display: flex;
`;

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

const UserActionsWrapper = styled.div``;

const RangesTitleForm = styled.form``;

export default RangesToolCreate;
