import React from 'react';
import { Global, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../state/actions';

const App = () => {
  const state = useSelector((state) => state);
  console.log({ state });

  const dispatch = useDispatch();
  const { DepositMoney, WithdrawMoney } = bindActionCreators(Actions, dispatch);

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Nunito;
          }
          #root {
            /* height: 100vh; */
            display: flex;
          }
        `}
      />
      <button onClick={() => DepositMoney(1000)}>Deposit 1000</button>
      <button onClick={() => WithdrawMoney(1000)}>Withdraw 1000</button>
    </>
  );
};

export default App;
