import React from 'react';
import { Global, css } from '@emotion/react';
// import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Actions } from '../state/actions';
import Nav from './Nav';
import Main from './Main';

const App = () => {
  // const state = useSelector((state) => state);
  // console.log({ state });

  // const dispatch = useDispatch();
  // const { DepositMoney, WithdrawMoney } = bindActionCreators(Actions, dispatch);

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Nunito;
            background-color: #121213;
            color: #d7dadc;
          }
          #root {
            /* height: 100vh; */
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      />
      <Nav />
      <Main />
    </>
  );
};

export default App;
