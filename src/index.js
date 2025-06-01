
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/E-commerce">
                <Auth0Provider
                  domain="dev-tbhgrv4m2wdbflhs.us.auth0.com"
                  clientId="XQdHGvY5rO8u0M7XrN8RgnByYNxDZTZN"
                  authorizationParams={{
                    redirect_uri: "https://moam8n.github.io/E-commerce/" // هنا!
                  }}
                >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);