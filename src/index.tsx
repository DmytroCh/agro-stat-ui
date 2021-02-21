import 'semantic-ui-css/semantic.min.css';
import './index.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';


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


