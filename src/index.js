import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
    <Auth0Provider 
    domain='dev-vc3p0t1x.us.auth0.com' 
    clientId='lMSkKfO5a7pdt2MxhEUyyfV8uy5V9Egl' 
    redirectUri={window.location.origin}>
        
<App />
</Auth0Provider>
</BrowserRouter>,

document.getElementById('root'));

// video de apoyo para hacer Auth0Provider https://www.youtube.com/watch?v=sTJaHQINpTc
// Si desea que su aplicación funcione sin conexión y se cargue más rápido, puede cambiar
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
