import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStores, StoresProvider } from './stores';

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider stores={createStores()}>
      <App />
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
