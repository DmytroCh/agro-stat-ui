import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import './css/index.scss';
import './css/loading.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/LoadingScreen';
import LoadingScreen from './components/LoadingScreen';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={ <LoadingScreen/> }>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
