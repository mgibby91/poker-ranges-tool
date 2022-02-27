import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
