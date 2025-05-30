import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Auth0Provider
    domain="dev-tbhgrv4m2wdbflhs.us.auth0.com"
    clientId="sPtbGwWiDmAb5RUmtoPiKNOuNeHzcUdS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </HashRouter>

);
reportWebVitals();
