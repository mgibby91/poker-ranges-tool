import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider as ReduxProvider } from 'react-redux';
import { Store } from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
