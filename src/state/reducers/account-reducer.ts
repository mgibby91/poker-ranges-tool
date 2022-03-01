import {
  BankDispatchTypes,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY,
} from '../actions/bank-action-types';

interface DefaultStateI {
  account: number;
}

const defaultState: DefaultStateI = {
  account: 0,
};

const accountReducer = (
  state: DefaultStateI = defaultState,
  action: BankDispatchTypes
): DefaultStateI => {
  // switch (action.type) {
  //   case 'deposit':
  //     return state + action.payload;
  //   case 'withdraw':
  //     return state - action.payload;
  //   default:
  //     return state;
  // }

  switch (action.type) {
    case DEPOSIT_MONEY:
      return {
        ...state,
        account: state.account + action.payload,
      };
    case WITHDRAW_MONEY:
      return {
        ...state,
        account: state.account - action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
