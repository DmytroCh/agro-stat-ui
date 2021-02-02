import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import './css/index.scss';
import './css/loading.scss';

import App from './App';
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


