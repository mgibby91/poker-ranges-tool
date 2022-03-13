import React from 'react';
import { Global, css } from '@emotion/react';
import Nav from './Nav';
import Main from './Main';

const App = () => {
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
