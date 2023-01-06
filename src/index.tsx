import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/lib.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthStateContextProvider } from './contexts/AuthStateContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthStateContextProvider>
      <App />
    </AuthStateContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
