import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/commons/ErrorPage';
import './i18n';

import { UserProvider } from './modules/User';
import { MainClassProvider } from './modules/MainClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <BrowserRouter>
          <MainClassProvider>
            <ErrorPage>
              <App />
            </ErrorPage>
          </MainClassProvider>
        </BrowserRouter>
      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
