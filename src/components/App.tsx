import React from 'react';
import { Global, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const App = () => {
  const state = useSelector((state) => state);
  console.log({ state });

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

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
      <button onClick={() => depositMoney(1000)}>Deposit 1000</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw 1000</button>
    </>
  );
};

export default App;
