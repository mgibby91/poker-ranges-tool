export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';
export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';

export interface DepositMoney {
  type: typeof DEPOSIT_MONEY;
  payload: number;
}

export interface WithdrawMoney {
  type: typeof WITHDRAW_MONEY;
  payload: number;
}

export type BankDispatchTypes = DepositMoney | WithdrawMoney;
