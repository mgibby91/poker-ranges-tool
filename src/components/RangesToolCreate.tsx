import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import React from 'react';
import { useStores } from '../stores';
import { getAreCardsSame, getCellBg, PlayType } from '../utils';
import { SubmitHandler, useForm } from 'react-hook-form';

type RangeForm = {
  title: string;
};

type RangesToolCreateProps = {
  closeModal: () => void;
};

const RangesToolCreate: React.VFC<RangesToolCreateProps> = observer(
  ({ closeModal }) => {
    const { rangesStore } = useStores();
    const { register, handleSubmit, errors } = useForm<RangeForm>();

    const onSubmitNewRange: SubmitHandler<RangeForm> = ({ title }) => {
      rangesStore.addNewUserRange(title);
      rangesStore.resetNewRange();
      closeModal();
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
              ref={register({ required: true })}
              name='title'
            />
            {errors.title && <span>This field is required.</span>}
            <button type='submit'>Create</button>
          </RangesTitleForm>
        </UserActionsWrapper>
      </MainWrapper>
    );
  }
);

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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

const UserActionsWrapper = styled.div`
  width: 100%;
`;

const RangesTitleForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default RangesToolCreate;
