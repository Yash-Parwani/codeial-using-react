import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';

// importing react -toast notifications to display Notifications


import {ToastProvider} from "react-toast-notifications"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={5000}>
     <App />

    </ToastProvider>
  </React.StrictMode>
);
