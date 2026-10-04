import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (import.meta.env.PROD) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
