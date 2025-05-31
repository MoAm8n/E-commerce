
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
          domain="dev-tbhgrv4m2wdbflhs.us.auth0.com"
          clientId="kuAEWoqdleESgHoq7pulECUlBK3Lw89c"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);