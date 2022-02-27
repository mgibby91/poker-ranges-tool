import React from 'react';
import { Global, css } from '@emotion/react';

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
          }
          #root {
            height: 100vh;
            display: flex;
          }
        `}
      />
    </>
  );
};

export default App;
