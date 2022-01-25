import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UIStateProvider } from './context/UpdateUiContext';
import { UserProvider } from './context/UserContext';
import { PageProvider } from './context/PageContext';

ReactDOM.render(
  <React.StrictMode>
    <PageProvider>
      <UserProvider>
        <UIStateProvider>
          <App />
        </UIStateProvider>
      </UserProvider>
    </PageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
