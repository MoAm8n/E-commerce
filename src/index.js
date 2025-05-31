// # ملف .env
// PUBLIC_URL=/E-commerce
// REACT_APP_AUTH0_DOMAIN=dev-tbhgrv4m2wdbflhs.us.auth0.com
// REACT_APP_AUTH0_CLIENT_ID=sPtbGwWiDmAb5RUmtoPiKNOuNeHzcUdS
// REACT_APP_AUTH0_AUDIENCE=https://dev-tbhgrv4m2wdbflhs.us.auth0.com/api/v2/
// REACT_APP_AUTH0_SCOPE=openid profile email

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin + (process.env.PUBLIC_URL || ''),
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: process.env.REACT_APP_AUTH0_SCOPE || 'openid profile email'
        }}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);