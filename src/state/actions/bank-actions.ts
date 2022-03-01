import { Dispatch } from 'redux';
import { BankDispatchTypes } from './bank-action-types';

export const DepositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankDispatchTypes>) => {
    dispatch({
      type: 'DEPOSIT_MONEY',
      payload: amount,
    });
  };
};

export const WithdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankDispatchTypes>) => {
    dispatch({
      type: 'WITHDRAW_MONEY',
      payload: amount,
    });
  };
};
